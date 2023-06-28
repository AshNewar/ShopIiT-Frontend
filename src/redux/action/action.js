import {server2} from "../store.js";
import axios from "axios";


export const loadUser=()=>async(dispatch)=>{
    try {
        dispatch({
            type:"loadRequest",
        });
        const {data} =await axios.get(`${server2}/me`,{
            withCredentials:true,
        });

        dispatch({
            type:"loadUserSuccess",
            payload:data.user,
        });

    } catch (error) {
        
        dispatch({
            type:"loadUserFail",
            payload:error.response.data.msg,
        });
    }
}

export const logout=()=>async(dispatch)=>{
    try {
        dispatch({
            type:"logoutRequest",
        });
        const {data} =await axios.get(`${server2}/logout`,{
            withCredentials:true,
        });


        dispatch({
            type:"logoutSuccess",
            payload:data.msg,
        });

    } catch (error) {
        
        dispatch({
            type:"logoutFail",
            payload:error.response.data.msg,
        });
    }
}