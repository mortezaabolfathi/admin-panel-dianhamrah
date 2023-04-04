

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Api } from '../../Config';
import { Cookies } from 'react-cookie';

interface User {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  password: string,
  nationalCode:number
}

const baseQuery = fetchBaseQuery({
  baseUrl: Api.base, prepareHeaders: (headers) => {
    const cookie = new Cookies()
    const token = cookie.get("token")
    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  }
})

export const userApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (name) => ({ url: `user` }),
    }),
    getUsers: builder.query<User[], string>({
      query: (name) => ({ url: `user/list` }),
    }),
    addUser: builder.mutation<User, User>({
      query: (body) => ({ url: `user/signUp` , body:body , method:"POST" }),
    }),
  }),
});


export const { useGetUsersQuery , useAddUserMutation } = userApi

