import { createReducer } from "@reduxjs/toolkit";

export const getOrderReducer = createReducer(
  { orders: [] },
  {
    getOrderReq: (state) => {
      state.loading = true;
    },
    getOrderSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    getOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getOrderDetailsReq: (state) => {
      state.loading = true;
    },
    getOrderDetailsSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    getOrderDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearMsg:(state)=>{
      state.msg=null;
    },
    clearError:(state)=>{
      state.error=null;
    },
    
  }
);
