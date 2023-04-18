import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Api } from '../../Config';
import { Cookies } from 'react-cookie';
import { Term } from '../../constants/types';


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

  export const termApi = createApi({
    reducerPath: "termApi",
    baseQuery:baseQuery,
    endpoints: (builder) =>({
        createTerm : builder.mutation<Term, Omit<Term , "id">>({
            query:(body)=>({url:`/term`, body:body , method:"POST"})
        }),
        listTerm: builder.query<Term[], null>({
          query:()=>({url:"/term"})
        }),
        deleteTerm : builder.mutation<Term, number>({
          query:(id)=>({url:`/term/${id}` , method:"DELETE"})
      }),

    })
  })


  export const {useCreateTermMutation, useListTermQuery ,useDeleteTermMutation} = termApi