import { configureStore } from '@reduxjs/toolkit'
import applicationReducer from '../features/application/applicationSlice'


export const store = configureStore({
  reducer: {
    user:applicationReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;