import { server2 } from "../store.js";
import axios from "axios";
import { paymentVerify } from "./payment.js";

export const createOrder =
  (
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "createOrderReq",
      });
      const { data } = await axios.post(
        `${server2}/createorder`,
        {
          shippingInfo,
          orderItems,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "createOrderSuccess",
        payload: data.msg,
      });
    } catch (error) {
      dispatch({
        type: "createOrderFail",
        payload: error.response.data.msg,
      });
    }
  };

export const createOrderOnline =
  (
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount
  ) =>
  async (dispatch) => {
    try {
      const { data:{msg,orderdetails,receipt}} = await axios.post(
        `${server2}/createorderonline`,
        {
          shippingInfo,
          orderItems,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const options = {
        key: "rzp_test_7d1r9O9wzbuVVI", // Enter the Key ID generated from the Dashboard
        amount: receipt.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "MBABURGER", //your business name
        description: "Test Transaction For Burger",
        order_id: receipt.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response){
            const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=response;
            dispatch(paymentVerify(razorpay_payment_id,razorpay_order_id,razorpay_signature,orderdetails));
        },
        theme: {
            color: "#0d0d0d"
        }
    };
    var razorpay = new window.Razorpay(options);
    razorpay.open();
    
      
    } catch (error) {
      dispatch({
        type: "createOrderFail",
        payload: error.response.data.msg,
      });
    }
  };
