import { useState } from "react";
import { useNavigate } from "react-router-dom";

//import { apiContext } from "../../ContextApi/ContextProvider";
import "./Card.css";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
let Card = (props) => {
  const navigate = useNavigate();
  // let [cartadd, setCartadd] = useState(false);
  // let [memberCount, setMemberCount] = useState(1);
  // let { cart, setCart } = useContext(apiContext);
 // let {logedin,setLogedin} = useContext(apiContext);
  //Function to increase and decrese member count
  // const add = () => {
  //   setMemberCount(memberCount + 1);
  // };
  // const rem = () => {
  //   if (memberCount !== 1) {
  //     setMemberCount(memberCount - 1);
  //   }
  // };
  //Add and remove from Cart
  // const cartManupulation = () => {
  //   // console.log(cartadd);
  //   if (!cartadd) {
  //     setCart([...cart, { id: props.id, count: memberCount }]);
  //     setCartadd(!cartadd);
  //   } else {
  //     let newcart = cart.filter((ele) => {
  //       return ele.id !== props.id;
  //     });
  //     setCart(newcart);
  //     setCartadd(!cartadd);
  //   }
  // };

  const handlePage = () => {
    navigate(`/cardetails`, { state: { props } });
  };
  

  // const goToSignUpPage=()=>{
  //   navigate("/singin")
  // }

  // let buypackage = () => 
  // {
  //   console.log("Buy Package");
  // }

 
  return (
    <div onClick={handlePage} >
      <div className="packagecard">
 
        <img className="packageimage" alt="link" src={props.link} />
        <div className="card__text">
        <div className="name_div" >
        <FontAwesomeIcon className="starIcon" icon={faStar} />
        <p className="cardName">{props.package_name}</p>
        </div>
        
          {/* <p className="card_destination">{props.package_desription}</p> */}
          <h6 className="packagePrice">{props.price} / person </h6>
          {/* <div className="member_count">
            <button
              className="min sign"
              onClick={(e) => {
                e.stopPropagation();
                rem();
              }}
            >
              -
            </button>
            <p>Member: {memberCount}</p>
            <button
              className="add sign "
              onClick={(e) => {
                e.stopPropagation();
                add();
              }}
            >
              +
            </button>
          </div> */}
         
            {/* <button onClick={logedin?buypackage:goToSignUpPage}  className="buypackage">book Now</button>
            <button className="addtoCartpackage" onClick={cartManupulation}>
              {!cartadd ? "Add to Cart" : "Remove from cart"}
            </button>
          
          <div className="readMore">
            <button key={props.id}  className="readMoreBtn">
              Read More
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Card;
