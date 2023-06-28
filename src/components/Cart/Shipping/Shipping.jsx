import { Country, State } from "country-state-city";
import "./shipping.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";

const Shipping = () => {
  const { shippingInfo } = useSelector((state) => state.cart);

  const [hNo, setHNo] = useState(shippingInfo.hNo);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [country, setCountry] = useState(shippingInfo.Country);

  const dispatch=useDispatch();
  const navigate=useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    dispatch({
      type: "addShippingInfo",
      payload: {
        hNo,
        city,
        state,
        country,
        pinCode,
        phoneNo,
      },
    });
    const info={
      hNo,
      city,
      state,
      country,
      pinCode,
      phoneNo,
    }
    localStorage.setItem("shippingInfo",JSON.stringify(info));  
    navigate("/confirm");
    
  }

  function countryHandler(e) {
    setCountry(e.target.value);
  }
  return (
    <section className='shipping'>
      <main className='ship'>
        <h1>Shipping Details</h1>
        <form className='shipform' onSubmit={submitHandler}>
          <div className='shipbox'>
            <label className='shiplabel'>H.No.</label>
            <input
              className='shipinput'
              type='text'
              placeholder='Enter House No.'
              required

              onChange={(e) => setHNo(e.target.value)}
            />
          </div>
          <div className='shipbox'>
            <label className='shiplabel'>City</label>
            <input
              className='shipinput'
              type='text'
              placeholder='Enter City'
              required

              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className='shipbox'>
            <label className='shiplabel'>Country</label>

            <select onChange={countryHandler}>
              <option className='shipoption' value=''>
                Country
              </option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option
                    value={i.isoCode}
                    key={i.isoCode}
                    onClick={countryHandler}
                  >
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div className='shipbox'>
            <label className='shiplabel'>State</label>

            <select onChange={(e) => setState(e.target.value)}>
              <option value=''>State</option>
              {State &&
                State.getStatesOfCountry(country).map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div className='shipbox'>
            <label className='shiplabel'>Pin Code</label>
            <input
              className='shipinput'
              type='number'
              placeholder='Enter Pincode'
              required

              onChange={(e) => setPinCode(e.target.value)}
            />
          </div>
          <div className='shipbox'>
            <label className='shiplabel'>Phone No.</label>
            <input
              className='shipinput'
              type='number'
              placeholder='Enter Phone No.'
              required
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <button type='submit' className='shipbutton'>
            Confirm Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
