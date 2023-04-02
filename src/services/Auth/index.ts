import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Login } from '../../constants/types'


// Define a service using a base URL and expected endpoints

export const authApi = createApi({
  reducerPath: 'AuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://188.121.102.86:8081/api/"  }),
  endpoints: (builder) => ({
    loginAdmin: builder.mutation<string , Login>({
      query: (user) => ({
        url: `admin/login`,
        method: 'POST',
        body: user,
      }),
    }),
  }),
}) 

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginAdminMutation } =authApi