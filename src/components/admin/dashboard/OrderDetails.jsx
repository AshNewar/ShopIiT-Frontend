import { useDispatch, useSelector } from "react-redux";
import "./order.css";
import { useEffect } from "react";
import { getMyOrderDetails } from "../../../redux/action/myOrder";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../Loader";
const OrderDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(getMyOrderDetails(params.id));
  }, [params.id, dispatch, error]);

  return (
    <section className='orderDetails'>
      {loading || order==undefined? (
        <Loader />
      ) : (
        <main className='ordermain'>
          <h1 className='detailheader2'>Order Details</h1>
          <div>
            <h1>Shipping</h1>
            <p>
              <b>Address : </b>
              {order.shippingInfo.hNo} {order.shippingInfo.city}{" "}
              {order.shippingInfo.country} {order.shippingInfo.state}
            </p>
          </div>
          <div>
            <h1>Contact</h1>
            <p>
              <b>Name : </b>
              {order.user.name}
            </p>
            <p>
              <b>Phone : </b>
              {order.shippingInfo.phoneNo}
            </p>
          </div>

          <div>
            <h1>Status</h1>
            <p>
              <b>Order Status : </b>
              {order.orderStatus}
            </p>
            <p>
              <b>Placed At : </b>
              {order.createdAt.split("T")[0]}
            </p>
            <p>
              <b>Delivered At :</b>
              {order.deliveredAt ? order.deliveredAt.split("T")[0] : " NA"}
            </p>
          </div>

          <div>
            <h1>Payment</h1>
            <p>
              <b>Payment Method : </b>
              {order.paymentMethod}
            </p>
            <p>
              <b>Payment Reference :  </b>{order.paymentMethod==="Online" ? order.paymentInfo : " NA"}
            </p>
            <p>
              <b>Paid At : </b>
              {order.paymentMethod==="Online" ? order.paidAt.split("T")[0] : " NA"}
            </p>
          </div>

          <div >
            <h1>Amount</h1>
            <p>
              <b>Items Total :</b>₹{order.itemsPrice}
            </p>
            <p>
              <b>Shipping Charges</b>₹{order.shippingCharges}
            </p>
            <p>
              <b>Tax</b>₹{order.taxPrice}
            </p>
            <p>
              <b>Total Amount</b>₹{order.totalAmount}
            </p>
          </div>

          <article className="itemList">
            <h1 >Ordered Items</h1>
            <div className="itemsDetails">
              <h4>Burger</h4>
              <div>
                <span>{order.orderItems.Burger.quantity}</span> x{" "}
                <span>{order.orderItems.Burger.price}</span>
              </div>
            </div>
            <div className="itemsDetails">
              <h4>VegBurger</h4>
              <div>
                <span>{order.orderItems.vegBurger.quantity}</span> x{" "}
                <span>{order.orderItems.vegBurger.price}</span>
              </div>
            </div>
            <div className="itemsDetails">
              <h4>Fries</h4>
              <div>
                <span>{order.orderItems.Fries.quantity}</span> x{" "}
                <span>{order.orderItems.Fries.price}</span>
              </div>
            </div>

            <div className="itemsDetails">
              <h4
                style={{
                  fontWeight: 800,
                }}
              >
                Sub Total
              </h4>
              <div
                style={{
                  fontWeight: 800,
                }}
              >
                ₹{order.itemsPrice}
              </div>
            </div>
          </article>
        </main>
      )}
    </section>
  );
};

export default OrderDetails;
