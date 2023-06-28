import { createReducer } from "@reduxjs/toolkit";
const intial={
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        Burger: {
          quantity: 0,
          price: 200,
        },
        vegBurger: {
          quantity: 0,
          price: 500,
        },
        Fries: {
          quantity: 0,
          price: 800,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},

  }
export const cartReducer=createReducer(intial,{
    burgerincre:(state)=>{
        state.cartItems.Burger.quantity+=1;
    },
    vegburgerincre:(state)=>{
        state.cartItems.vegBurger.quantity+=1;
    },
    friesincre:(state)=>{
        state.cartItems.Fries.quantity+=1;
    },
    burgerdecre:(state)=>{
        state.cartItems.Burger.quantity-=1;
    },
    vegburgerdecre:(state)=>{
        state.cartItems.vegBurger.quantity-=1;
    },
    friesdecre:(state)=>{
        state.cartItems.Fries.quantity-=1;
    },
    calculatePrice: (state) => {
        state.subTotal =
          state.cartItems.Burger.price *
            state.cartItems.Burger.quantity +
          state.cartItems.vegBurger.price *
            state.cartItems.vegBurger.quantity +
          state.cartItems.Fries.price *
            state.cartItems.Fries.quantity;
    
        state.tax = state.subTotal * 0.08;
        state.shippingCharges = state.subTotal > 1000 ? 0 : 100;
        state.total = state.subTotal + state.tax + state.shippingCharges;
      },
      emptystate:(state)=>{
        state.cartItems.Burger.quantity=0;
        state.cartItems.vegBurger.quantity=0;
        state.cartItems.Fries.quantity=0;
        state.subTotal=0;
        state.tax=0;
        state.shippingCharges=0;
        state.total=0;


      },  
      addShippingInfo: (state, action) => {
        state.shippingInfo = {
          hNo: action.payload.hNo,
          city: action.payload.city,
          state: action.payload.state,
          country: action.payload.country,
          pinCode: action.payload.pinCode,
          phoneNo: action.payload.phoneNo,
        };
      }
}
) ;

export const orderReducer=createReducer({},{
  createOrderReq:(state)=>{
    state.loading=true;
  },
  createOrderSuccess:(state,action)=>{
    console.log("success");
    state.loading=false;
    state.msg=action.payload;
  },
  createOrderFail:(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  },
  paymentReq:(state)=>{
    state.loading=true;
  },
  paymentSuccess:(state,action)=>{
    console.log("success");
    state.loading=false;
    state.msg=action.payload;
  },
  paymentFail:(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  },
  clearMsg:(state)=>{
    state.msg=null;
  },
  clearError:(state)=>{
    state.error=null;
  },
  
})