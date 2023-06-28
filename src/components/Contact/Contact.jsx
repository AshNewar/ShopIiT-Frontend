import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {motion} from "framer-motion";

import "./contact.css";

const Contact = () => {

  const option = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: "0",
      opacity: 1,
    },
  };
  const option2 = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: "0",
      opacity: 1,
    },
  };



  return (
    <div className='contact '>
      <motion.h2 {...option}>Contact Us</motion.h2>
      <motion.p {...option} transition={{delay:.1}}>Any Question Or Remarks? Just Write A Message</motion.p>
      <div className='contactPage'>
        <motion.div {...option} transition={{delay:.3}} className='contact1'>
          <h3>Contact Information</h3>
          <div className='contactdetails'>
            <p>
              <BsFillTelephoneFill /> +91-9394857874
            </p>
            <p>
              <MdEmail /> ashnewar12@gmail.com
            </p>
            <p>
              <MdLocationPin /> IIT Kanpur,UttarPradesh
            </p>
          </div>
          <div className='contacticons'>
            <AiFillInstagram size='2rem' />
            <AiFillFacebook size='2rem' />
            <AiFillTwitterCircle size='2rem' />
          </div>
        </motion.div>
        <motion.form {...option} transition={{delay:.3}} className='contact2' action="https://formspree.io/f/xwkdenqd"
  method="POST">
          <div className="input">
            <label>Name</label>
            <input className='inputcontact' name="Name" type='text' required />
          </div>
          <div className="input">
            <label>Phone No.</label>
            <input className='inputcontact' name="PhoneNo"type='text' required/>
          </div>
          <div className="input">
            <label>Message</label>
            <textarea  name="Name" className='inputcontact' type='text' required/>
          </div>
          <motion.button {...option2} transition={{delay:.5}} type="submit" className="contactsent">Send Message</motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
