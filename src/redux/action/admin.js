import axios from "axios";
import { server2 } from "../store";

export const adminRequest = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminReq" });
    const { data } = await axios.get(`${server2}/admin/stats`, {
      withCredentials: true,
    });

    dispatch({ type: "getAdminSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getAdminFail", payload: error.response.data.msg });
    console.log(error);
  }
};

export const adminUserRequest = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminReq" });
    const { data } = await axios.get(`${server2}/admin/users`, {
      withCredentials: true,
    });

    dispatch({ type: "getAdminUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "getAdminUserFail", payload: error.response.data.msg });
    console.log(error);
  }
};

export const adminOrderRequest = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminReq" });
    const { data } = await axios.get(`${server2}/admin/orders`, {
      withCredentials: true,
    });

    dispatch({ type: "getAdminOrderSuccess", payload: data.orders });
  } catch (error) {
    dispatch({ type: "getAdminOrderFail", payload: error.response.data.msg });
    console.log(error);
  }
};

export const adminUpdateRequest = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getAdminReq" });
    const { data } = await axios.get(`${server2}/admin/order/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: "updateAdminSuccess", payload: data.msg });
  } catch (error) {
    dispatch({ type: "updateAdminFail", payload: error.response.data.msg });
    console.log(error);
  }
};
