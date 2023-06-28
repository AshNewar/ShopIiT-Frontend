import { useEffect, useState } from "react";
import "./confirm.css";
import { createOrder, createOrderOnline } from "../../redux/action/order";
import { useDispatch, useSelector } from "react-redux";
import {toast} from  "react-hot-toast";
import {useNavigate} from "react-router-dom";



const ConfirmOrder = () => {
  const [paymentMethod, setMethod] = useState("");
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const navigate= useNavigate();




  const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } =
    useSelector((state) => state.cart);
   
  const {msg,error}=useSelector((state)=>state.order);

  const methodHandler = (e) => {
    e.preventDefault();
    setDisable(true);
    if (paymentMethod === "COD") {
     
      dispatch(
        createOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          subTotal,
          tax,
          shippingCharges,
          total
        )
      );
    } 
    else{
      dispatch(createOrderOnline(
        shippingInfo,
          cartItems,
          paymentMethod,
          subTotal,
          tax,
          shippingCharges,
          total

      ))
    }
  };

  useEffect(()=>{
    if(msg){
      toast.success(msg);
      dispatch({
        type:"clearMsg"
      })
      dispatch({
        type:"emptystate"
      })
      navigate("/success");
    }
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});
    }
    setDisable(false);


  },[dispatch,navigate,error,msg]);
  return (
    <section className='confirmOrder'>
      <main className='confirmOrder2'>
        <h1>Confirm Order</h1>

        <form className='confirmform' onSubmit={methodHandler}>
          <div className='confirm'>
            <label className='shiplabel'>Cash On Delivery</label>
            <input
              type='radio'
              name='payment'
              required
              onChange={() => setMethod("COD")}
            />
          </div>
          <div className='confirm'>
            <label className='shiplabel'>Online</label>
            <input
              type='radio'
              name='payment'
              required
              onChange={() => setMethod("Online")}
            />
          </div>

          <button disabled={disable} className='shipbutton' type='submit'>
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
