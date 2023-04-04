import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Login } from '../../constants/types'
import { Api } from '../../Config'


// Define a service using a base URL and expected endpoints


export const authApi = createApi({
  reducerPath: 'AuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: Api.base  }),
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