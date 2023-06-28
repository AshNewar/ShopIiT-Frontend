import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import "./order.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../../redux/action/myOrder";
import Loader from "../Loader.jsx";
import { toast } from "react-hot-toast";

const MyOrders = () => {
  const dispatch = useDispatch();
  const { orders,loading,error } = useSelector((state) => state.orders);

  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});
    }
    dispatch(getMyOrders());
  }, [dispatch,error]);

  return (
    <section className='tableClass'>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Status</th>
                <th>Item Qty</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>User</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((i) => (
                <tr key={i._id}>
                  <td className="orderid">{i._id}</td>
                  <td>{i.orderStatus}</td>
                  <td>
                    {i.orderItems.Burger.quantity +
                      i.orderItems.vegBurger.quantity +
                      i.orderItems.Fries.quantity}
                  </td>
                  <td>₹{i.totalAmount}</td>
                  <td>{i.paymentMethod}</td>
                  <td>{i.user.name}</td>
                  <td>
                    <Link to={`/order/${i._id}`}>
                      <AiOutlineEye />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      )}
    </section>
  );
};

export default MyOrders;
