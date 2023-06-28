import { createReducer} from "@reduxjs/toolkit";



export const authReducer=createReducer({},{
    loadRequest:(state)=>{
        state.loading=true;
    },
    loadUserSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload;
    },
    loadUserFail:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload;
    },
    logoutRequest:(state)=>{
        state.loading=true;
    },
    logoutSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.msg=action.payload
        state.user=null;
    },
    logoutFail:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.error=action.payload;
    },
    clearError:(state)=>{
        state.error=null;
    },
    clearMsg:(state)=>{
        state.msg=null;
    }

})