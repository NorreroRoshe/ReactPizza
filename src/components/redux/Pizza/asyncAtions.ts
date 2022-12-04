
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizza, SeachPizzaParams } from './types';

export const fetchPizzas = createAsyncThunk<Pizza[], SeachPizzaParams>('pizza/fetchPizzasStatus', async (params) => {             //params: fetchPizzasArgs - можно так
  const { category, order, sortBy, search, currentPage } = params;
  const { data } = await axios.get<Pizza[]>(
    `https://6338275d132b46ee0beb384a.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return data;          //data as Pizza[] - можно так
});