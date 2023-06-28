import Card from './MenuCard/card'
import "./menu.css";
import {motion} from "framer-motion";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

const Menu = () => {
  const dispatch=useDispatch();
  function addToCart(item){
    switch (item) {
      case 1:
        dispatch({ type: "burgerincre" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "vegburgerincre" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");

        break;
      case 3:
        dispatch({ type: "friesincre" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });

        break;
    }}
  
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
  const optiony = {
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
    <div className='menu section_padding'>
    <motion.h1 {...optiony} transition={{delay:.5}}>Menu</motion.h1>
    <motion.div {...option} className='menuList2 section_padding'>
      
    <Card
    itemNo={1}
      name="Japanese Chai"
      price={500}
      source="chai.webp"
      handler={addToCart}
      />
      <Card
      itemNo={2}
      name="Chinese Chai"
      price={500}
      source="chai.webp"
      handler={addToCart}
      />
      <Card
      itemNo={3}
      name="Japanese Chai"
      price={500}
      source="chai.webp"
      handler={addToCart}
      />
    </motion.div>
    </div>
  )
}

export default Menu
