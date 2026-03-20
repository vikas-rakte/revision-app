import { createSlice } from "@reduxjs/toolkit";

type counter = { count : number };

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count : 0 },
    reducers: {
        increment: (state : counter ) => {
          state.count++;
        },
        decrement: (state : counter ) => {
          if(state.count > 0){
            state.count--
          }
        }
    }
})

export default counterSlice;
