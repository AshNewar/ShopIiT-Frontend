import Menu from "../../Menu/Menu";
import "./Home.css";
import { motion } from "framer-motion";
const Home = () => {
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
    <>
    <div className='home section_padding'>
      <div className='hometext'>
        <motion.h2 {...option} className='text'>
          MBA
        </motion.h2>
        <motion.h1 {...option} transition={{ delay: ".2" }} className='text'>
          CHAIWALA
        </motion.h1>
        <motion.h3 {...option} transition={{ delay: ".3" }} className='text'>
          Feel The Taste
        </motion.h3>
        <motion.div {...option2} transition={{ delay: ".5" }}>
          <span className='explore'>Explore More</span>
        </motion.div>
      </div>
      <div className='imghome'>
        <img src='mba.png'></img>
      </div>
      
    </div>
    <div className=''>
        <Menu />
      </div>
    

    </>
    
  );
};

export default Home;
