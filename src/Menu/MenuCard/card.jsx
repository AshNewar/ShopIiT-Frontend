

import "./card.css";
const Card = ({itemNo,name,price,source,handler}) => {
  
  return (
    <div className='card'>
    <div className='cardimg'>
        <img src={source}/>
    </div>
    <div className='cardcontain'>
        <p>{name}</p>
        <p>Price:₹{price}</p>
    </div>
    <button className='addtocart' onClick={()=>handler(itemNo)}>Add to Cart</button>
      
    </div>
  )
}

export default Card
