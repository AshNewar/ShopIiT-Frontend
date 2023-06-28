import { Link } from "react-router-dom";
import "./order.css"
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
import { useEffect } from "react";
import { adminOrderRequest, adminUpdateRequest } from "../../../redux/action/admin";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { toast } from "react-hot-toast";

const Orders = () => {
  const statusUpdater=(id)=>{
    dispatch(adminUpdateRequest(id));
  }
  
  const dispatch = useDispatch();

  const { loading, orders,msg,error } = useSelector((state) => state.admin);

  useEffect(() => {
    if(msg){
      toast.success(msg);
      dispatch({type:"clearMsg"});
    }
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});
    }
    dispatch(adminOrderRequest());
  }, [dispatch,msg,error]);
 

  return (
    <section className="tableClass">
    {loading ? <Loader/> :
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders && orders.map((i) => (
              <tr key={i._id}>
                <td className="orderid">#{i._id}</td>
                <td>{i.orderStatus}</td>
                <td>
                    {i.orderItems.Burger.quantity +
                      i.orderItems.vegBurger.quantity +
                      i.orderItems.Fries.quantity}
                  </td>
                <td>₹{i.totalAmount}</td>
                <td>{i.paymentMethod}</td>
                <td>
                  <Link to={`/order/${i._id}`}>
                    <AiOutlineEye />
                  </Link>
                  <button onClick={()=>statusUpdater(i._id)}>
                      <GiArmoredBoomerang />
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    }
    </section>
  );
};

export default Orders;