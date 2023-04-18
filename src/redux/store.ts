import { configureStore } from '@reduxjs/toolkit'

import { authApi } from '../services/Auth'
import { userApi } from '../services/User'
import {termApi} from "../services/term"
import { certificateApi } from '../services/Certificate'
export const store:any = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [termApi.reducerPath]: termApi.reducer,
    [certificateApi.reducerPath]: certificateApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>{ 
    return  getDefaultMiddleware().concat(authApi.middleware , userApi.middleware, termApi.middleware , certificateApi.middleware)
  }

})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch