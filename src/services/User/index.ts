// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// export const apiSlice = createApi({
//   reducerPath: 'apiSlice',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://jsonplaceholder.typicode.com',
//   }),
//   tagTypes: ['Post'],
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => '/posts',
//     }),
//   }),
// })
// export const { useGetPostsQuery } = apiSlice

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { PostUser } from '../../constants/types';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const apiSlice:any = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
