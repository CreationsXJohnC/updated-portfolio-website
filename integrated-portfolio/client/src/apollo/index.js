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
    const statusCode = networkError.statusCode
    const message = networkError.message || ''
    const ctx = operation.getContext() || {}
    // Retry once by switching between /graphql and /api/graphql when 404/NOT_FOUND occurs
    if (!ctx.__retried && (statusCode === 404 || message.includes('NOT_FOUND'))) {
      const currentUri = ctx.uri || (import.meta.env.VITE_GRAPHQL_URI || '/api/graphql')
      const fallbackUri = currentUri.includes('/api/graphql') ? '/graphql' : '/api/graphql'
      operation.setContext({ ...ctx, uri: fallbackUri, __retried: true })
      return forward(operation)
    }
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
  uri: import.meta.env.VITE_GRAPHQL_URI || '/api/graphql',
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
          // Distinguish cache entries by arguments
          keyArgs: ['featured', 'category', 'filter'],
          // Cache projects with better merge strategy
          merge(existing = [], incoming, { args, readField }) {
            // If it's a filtered query, don't merge with existing
            if (args?.featured === true || args?.filter || args?.category) {
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
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-and-network',
    },
    query: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-and-network',
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