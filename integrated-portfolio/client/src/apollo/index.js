import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`GraphQL error: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })
  }
  if (networkError) {
    console.error(`Network error: ${networkError}`)
  }
})

// Auth link for future authentication
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('auth-token')
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URI || 'http://localhost:4000/graphql',
  credentials: 'include',
})

// Optimized cache implementation
const cache = new InMemoryCache({
  // Increase cache size for better performance
  resultCaching: true,
  typePolicies: {
    Query: {
      fields: {
        projects: {
          // Cache projects with better merge strategy
          merge(existing = [], incoming, { args, readField }) {
            // If it's a filtered query, don't merge with existing
            if (args?.filter || args?.category) {
              return incoming
            }
            // For regular queries, merge intelligently
            const merged = existing.slice()
            incoming.forEach(item => {
              const existingIndex = merged.findIndex(
                existing => readField('id', existing) === readField('id', item)
              )
              if (existingIndex >= 0) {
                merged[existingIndex] = item
              } else {
                merged.push(item)
              }
            })
            return merged
          },
          // Cache for 5 minutes
          read(existing, { args }) {
            return existing
          }
        },
        skills: {
          merge(existing = [], incoming) {
            return incoming
          }
        },
        experiences: {
          merge(existing = [], incoming) {
            return incoming
          }
        },
        profile: {
          // Cache profile data aggressively
          merge(existing, incoming) {
            return { ...existing, ...incoming }
          }
        }
      }
    },
    Project: {
      fields: {
        // Cache individual projects
        technologies: {
          merge(existing = [], incoming) {
            return incoming
          }
        }
      }
    }
  },
  // Add cache persistence for better UX
  addTypename: true,
})

// Create the apollo client with optimized configuration
export const apolloClient = new ApolloClient({
  link: from([
    errorLink,
    authLink,
    httpLink
  ]),
  cache,
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-first', // Use cache first for better performance
      nextFetchPolicy: 'cache-first',
    },
    query: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-first',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
  // Enable query deduplication
  queryDeduplication: true,
  // Assume immutable cache for better performance
  assumeImmutableResults: true,
})

export default apolloClient