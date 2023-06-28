import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/action/action";
import Loader from "../admin/Loader";

const Profile = () => {
  const dispatch=useDispatch();
  const {loading ,user} =useSelector((state)=>state.auth);

const logoutHandler=()=>{
  dispatch(logout());

}
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="profile">
    {
      loading ?<Loader/>
      :<main className="profile2">
        <motion.img  className="profileImg" src="mba.png" alt="User" {...options} />
        <motion.h4 {...options} transition={{ delay: 0.3 }} className="proName">
         {user.name}
        </motion.h4>
        <motion.div {...options} transition={{ delay: 0.5 }}>
        {
          user.role==="admin" && <Link
            to="/dashboard"
            className="profilebutton"
          >
            <MdDashboard /> Dashboard
          </Link>
        }
          
        </motion.div>
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        >
          <Link to="/myorders" className="profilebutton">Orders</Link>
        </motion.div>

        <motion.button
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}

          className="shipbutton"
          onClick={logoutHandler}
        >
          Logout
        </motion.button>
      </main>
    }
      
    </section>
  );
};

export default Profile;