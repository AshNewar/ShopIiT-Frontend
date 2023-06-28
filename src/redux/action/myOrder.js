import axios from "axios";
import {server2} from "../store.js";



export const getMyOrders=()=>async(dispatch)=>{
    try {
        dispatch({type:"getOrderReq"})

        const {data}=await axios.get(`${server2}/myorder`,{
            withCredentials:true
        });
        dispatch({type:"getOrderSuccess",payload:data.order})
        
    } catch (error) {
        dispatch({type:"getOrderFail",payload:error.response.data.msg})
        
    }
}


export const getMyOrderDetails=(id)=>async(dispatch)=>{
    try {
        dispatch({type:"getOrderDetailsReq"})

        const {data}=await axios.get(`${server2}/order/${id}`,{
            withCredentials:true
        });
        dispatch({type:"getOrderDetailsSuccess",payload:data.order})
        
    } catch (error) {
        dispatch({type:"getOrderDetailsFail",payload:error.response.data.msg})
        
    }
}