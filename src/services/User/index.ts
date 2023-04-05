

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
interface DeleteUserResponse {
  message: string;
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
    getOneUser: builder.query<User, number>({
      query: (id) => ({ url: `user/${id}` }),
    }),
    getUsers: builder.query<User[], string>({
      query: (name) => ({ url: `user/list` }),
    }),
    addUser: builder.mutation<User, User>({
      query: (body) => ({ url: `user/signUp` , body:body , method:"POST" }),
    }),
    deleteUser: builder.mutation<DeleteUserResponse, User>({
      query: (id) => ({
        url: `/user/${id}`,
        method: 'DELETE',
      }),
    }),
    updateUser: builder.mutation<User, updateUserProps>({
      query: ({id , body}) => ({ url: `user/update/${id}` , body:body , method:"PUT" }),
    }),

  }),
});
interface updateUserProps {
  id: number;
  body : User
}

export const { useGetUsersQuery , useAddUserMutation, useDeleteUserMutation , useGetOneUserQuery , useUpdateUserMutation } = userApi

