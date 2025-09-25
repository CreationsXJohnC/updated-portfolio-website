import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URI || 'http://localhost:4000/graphql',
  credentials: 'include',
})

// Cache implementation
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        projects: {
          merge(existing = [], incoming) {
            return incoming
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
        }
      }
    }
  }
})

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
})

export default apolloClient