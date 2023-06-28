import { server2 } from "../store.js";
import axios from "axios";

export const paymentVerify =
  (razorpay_payment_id, razorpay_order_id, razorpay_signature, orderdetails) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "paymentReq",
      });
      console.log(orderdetails);
      const { data } = await axios.post(
        `${server2}/paymentVerify`,
        {
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
          orderDetails:orderdetails,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);

      dispatch({
        type: "paymentSuccess",
        payload: data.msg,
      });
    } catch (error) {
      dispatch({
        type: "paymentFail",
        payload: error.response.data.msg,
      });
    }
  };
