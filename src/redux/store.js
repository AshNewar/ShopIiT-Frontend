import {configureStore} from "@reduxjs/toolkit";
import {authReducer } from "./reducer/authreducer.js";
import { cartReducer, orderReducer } from "./reducer/cartReducer.js";
import { getOrderReducer } from "./reducer/orderReducer.js";
import { adminReducer } from "./reducer/adminReducer.js";


const store=configureStore({
    reducer:{
        auth:authReducer,
        cart:cartReducer,
        order:orderReducer,
        orders:getOrderReducer,
        admin:adminReducer
    },
})
export default store;

export const server2="https://shopit-el7u.onrender.com/newar";
