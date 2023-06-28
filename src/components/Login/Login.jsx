import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import {server2} from "../../redux/store.js";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler=()=>{
    window.open(`${server2}/googlelogin`,"_self");
  }

  return (
    <div className='body'>
      <section className='loginpage'>
        <div className='head'>
          <h1 id='logo'>CUPS!</h1>
          <h1 id='login'>Login</h1>
        </div>
        <div id='l_des'>Please enter your credentials here</div>
        <form>
          <div className='inp_name'>
            <div>
              <span className='name_placeholder'>Email</span>
            </div>
            <input
              type='email'
              name='email'
              value={email}
              required
              className='username'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className='inp_name' id='pass_inp_name'>
            <div>
              <span className='name_placeholder'>Password</span>
            </div>
            <input
              type='password'
              name='password'
              value={password}
              required
              className='username'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className='bottom'>
            <Link className='continue' to={"/signup"}>
              SignUp
            </Link>
            <button type='submit' className='continue'>
              Login now
            </button>
          </div>
        </form>
        <div className='googlelogin'>OR</div>
        <div className='googlelogin continue' onClick={loginHandler}>
          <div className='googlespan'>
            <BsGoogle size={23} />
             <p id="googletext"> Login with Google</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Login;
