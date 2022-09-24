import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { apiContext } from "../../ContextApi/ContextProvider";
import "./Card.css";
let Card = (props) => {
  const navigate = useNavigate();
  let [cartadd, setCartadd] = useState(false);
  let [memberCount, setMemberCount] = useState(1);
  let { cart, setCart } = useContext(apiContext);
  let { logedin, setLogedin } = useContext(apiContext);
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
  const cartManupulation = () => {
    // console.log(cartadd);
    if (!cartadd) {
      setCart([...cart, { id: props.id, count: memberCount }]);
      setCartadd(!cartadd);
    } else {
      let newcart = cart.filter((ele) => {
        return ele.id !== props.id;
      });
      setCart(newcart);
      setCartadd(!cartadd);
    }
  };

  const handlePage = () => {
    navigate(`/cardetails`, { state: { props } });
  };

  const goToSignUpPage = () => {
    navigate("/singin")
  }

  let buypackage = () => {
    console.log("Buy Package");
    let data = 
    {
      id:localStorage.getItem("id"),
      Package:props._id,
      name:"default",
      member:1
    }
    let config = {
      method: 'post',
      url: 'https://touristbackend.herokuapp.com/api/package/buypackage',
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="packagecard">
        <img className="packageimage" alt="link" src={props.link} />
        <div className="card__text">
          <h3 className="cardName">{props.package_name}</h3>
          {/* <p className="card_destination">{props.package_desription}</p> */}
          <h6 className="packagePrice">{props.price} </h6>
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

          <button onClick={logedin ? buypackage : goToSignUpPage} className="buypackage">book Now</button>
          <button className="addtoCartpackage" onClick={cartManupulation}>
            {!cartadd ? "Add to Cart" : "Remove from cart"}
          </button>

          <div className="readMore">
            <button key={props.id} onClick={handlePage} className="readMoreBtn">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
