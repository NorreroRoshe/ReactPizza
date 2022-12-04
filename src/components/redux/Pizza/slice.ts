import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchPizzas } from './asyncAtions';
import { Pizza, PizzaSliceState, Status } from './types';

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,                        // loading | success | error
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    })

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    })

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    })
  }                                                          //а этот вариант подходит если ты уже юзаешь Typescript
  
//   extraReducers: {
//     [fetchPizzas.pending]: (state) => {
//       state.status = 'loading';
//       state.items = [];
//       // console.log('Идет отправка, подождите ...');
//     },
//     [fetchPizzas.fulfilled]: (state, action) => {
//       state.items = action.payload;
//       state.status = 'success';
//       // console.log(state, 'Все ок');
//     },
//     [fetchPizzas.rejected]: (state) => {
//       state.status = 'error';
//       state.items = [];
//       // console.log('Была ошибка ...');
//     },
//   },                                                 //Итог: этот вариант подходит если ты не юзаешь TypeScript, а юзаешь просто js/jsx


});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
