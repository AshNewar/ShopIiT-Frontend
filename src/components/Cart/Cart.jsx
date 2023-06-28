import { useEffect } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cartitem = ({ title, source, incre, decre, value }) => {
  return (
    <div className='cartitem'>
      <div className='cart1'>
        <img id='cartimg' src={source} alt='item' />
        <p>{title}</p>
      </div>
      <div className='cart2'>
        <p className='but' onClick={decre}>
          -
        </p>
        <input className='cartinp' type='number' readOnly value={value} />
        <p className='but' onClick={incre}>
          +
        </p>
      </div>
    </div>
  );
};

const Cart = () => {
  const {
    cartItems: {
      Burger: { quantity: Burger },
      vegBurger: { quantity: vegBurger },
      Fries: { quantity: Fries },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const inc = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "burgerincre" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "vegburgerincre" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "friesincre" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  const dec = (item) => {
    switch (item) {
      case 1:
        if (Burger === 0) break;
        dispatch({ type: "burgerdecre" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        if (vegBurger === 0) break;
        dispatch({ type: "vegburgerdecre" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if (Fries === 0) break;
        dispatch({ type: "friesdecre" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "burgerdecre" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({subTotal, tax, shippingCharges, total})
    );
  }, [cartItems,subTotal, tax, shippingCharges, total]);

  return (
    <div className='cart section_padding'>
      <Cartitem
        value={Burger}
        incre={() => inc(1)}
        decre={() => dec(1)}
        title='Burger'
        source='chai.webp'
      />
      <Cartitem
        value={Fries}
        incre={() => inc(3)}
        decre={() => dec(3)}
        title='Fries'
        source='chai.webp'
      />
      <Cartitem
        value={vegBurger}
        incre={() => inc(2)}
        decre={() => dec(2)}
        title='VegBurger'
        source='chai.webp'
      />
      <article>
        <div className='checkOut'>
          <h4>Sub Total</h4>
          <p>₹{subTotal}</p>
        </div>
        <div className='checkOut'>
          <h4>Tax</h4>
          <p>₹{tax}</p>
        </div>
        <div className='checkOut'>
          <h4>Shipping Charges</h4>
          <p>₹{shippingCharges}</p>
        </div>
        <div className='checkOut'>
          <h4>Total</h4>
          <p>₹{total}</p>
        </div>
        <div className='checkOutButton'>
          <Link id='checkbut' to='/shipping'>
            Checkout
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Cart;
