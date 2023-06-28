import { useNavigate } from "react-router-dom";
import "./confirm.css";
const Success = () => {
  const navigate=useNavigate();
  const buttonClick=()=>{
    navigate("/myorders");

  }


  return (
    <div className='confirmOrder'>
    <h1>ORDER CONFIRMED</h1>
    <p>Thank You For Shopping</p>
    <button className='shipbutton' onClick={buttonClick}>Check Status</button>
      
    </div>
  )
}

export default Success
