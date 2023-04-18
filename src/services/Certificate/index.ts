import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Api } from '../../Config';
import { Cookies } from 'react-cookie';
import type { CreateCertificate, Term } from '../../constants/types';


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

  export const certificateApi = createApi({
    reducerPath: "certificateApi",
    baseQuery:baseQuery,
    endpoints: (builder) =>({
        createCertificate : builder.mutation<any, CreateCertificate>({
            query:(body)=>({url:`/certificate`, body:body , method:"POST"})
        }),
        getCertificate: builder.query<any, number>({
          query:(userId)=>({url:`/certificate/${userId}`})
        }),
        deleteCertificate: builder.mutation<any , number>({
            query:(userId)=>({url:`/certificate/${userId}` , method:"DELETE"})
        })
    })
  })


  export const {useCreateCertificateMutation , useDeleteCertificateMutation , useGetCertificateQuery} = certificateApi