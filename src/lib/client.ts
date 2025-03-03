import { createClient } from 'jstack'

/**
 * Your type-safe API client
 * @see https://jstack.app/docs/backend/api-client
 */
export const client = createClient<any>({
  baseUrl: 'http://localhost:3000/api',
})
