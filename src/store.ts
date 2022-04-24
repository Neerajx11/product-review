import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const reducer = ()=>12;

const store = configureStore({
  reducer: {
    one: reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//use them instead of usual useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>() 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store