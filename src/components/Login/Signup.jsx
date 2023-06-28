import { Link} from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";


const Signup = () => {
    const [name,setName]=useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword]= useState("");

    
  return (
    <div className="body">
    <section className="loginpage">
                <div className="head">
                    <h1 id="logo">CUPS!</h1>
                    <h1 id="login">SignUp</h1>
                </div>
                <div id="l_des">Welcome to the Family</div>
                <form >
                <div className="inp_name">
                        <div className="name_placeholder">Name</div>
                        <input type="text" name="name" value={name} className="username" 
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    </div>
                    <div className="inp_name">
                        <div className="name_placeholder">Email</div>
                        <input type="email"  name="email" value={email} required className="username"
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="inp_name" id="pass_inp_name">
                        <div><span className="name_placeholder">Password</span></div>
                        <input type="password"  name="password" value={password} required className="username"
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                   
                    <div className="bottom">
                        <Link className="mem" to={"/login"}>Already a Member?</Link>
                        <button  type="submit" className="continue">Create</button>
                    </div>
                </form>
                <div className='googlelogin'>OR</div>
        <div className='googlelogin continue'>
          <div className='googlespan'>
            <BsGoogle size={23} />
             <p id="googletext"> SignUp with Google</p>
          </div>
        </div>
            </section> 
    </div>
  )
}

export default Signup
