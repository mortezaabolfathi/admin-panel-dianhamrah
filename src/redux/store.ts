import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/testSlice'
import { authApi } from '../services/Auth'
import { apiSlice } from '../services/User'

export const store:any = configureStore({
  reducer: {
    counter: counterReducer,
    [authApi.reducerPath]: authApi.reducer,
    [apiSlice.reducerPath]:apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>{ 
    return (
        getDefaultMiddleware().concat(authApi.middleware),
        getDefaultMiddleware().concat(apiSlice.middleware)
    )
  }

})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch