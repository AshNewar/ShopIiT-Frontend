import { createReducer } from "@reduxjs/toolkit";


export const adminReducer=createReducer({orders:[],users:[]},{
    getAdminReq:(state)=>{
        state.loading=true;
        
    },
    getAdminSuccess:(state,action)=>{
        state.loading=false;
        state.totalUser=action.payload.totalUser;
        state.totalIncome=action.payload.totalIncome;
        state.orderCount=action.payload.orderCount;
        
    },
    getAdminFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
        
    },
    getAdminUserSuccess:(state,action)=>{
        state.loading=false;
        state.users=action.payload;
        
    },
    getAdminUserFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
        
    },
    getAdminOrderSuccess:(state,action)=>{
        state.loading=false;
        state.orders=action.payload;
    },
    getAdminOrderFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
        
    },
    updateAdminSuccess:(state,action)=>{
        state.loading=false;
        state.msg=action.payload;
    },
    updateAdminFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
        
    },
    clearMsg:(state)=>{
        state.msg=null
    },
    clearError:(state)=>{
        state.error=null
    }
})