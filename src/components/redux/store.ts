import { configureStore } from '@reduxjs/toolkit';
import filter from './Filter/slice';
import cart from './Cart/slice';
import pizza from './Pizza/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza
  },
});

export type RootState = ReturnType<typeof store.getState>; 

export type AppDisputch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDisputch>();