import { IoFastFoodOutline } from "react-icons/io5";
import "./dashboard/dash.css";


const Loader = () => {
  
  return (
    <div className="loader">
      <IoFastFoodOutline size="3rem"/>
        <p><b>Loading...</b></p>
    
    </div>
  );
};

export default Loader;