import { useContext, useState } from "react";
import { useNavigate ,Route} from "react-router-dom";
import axios from "axios"
import { apiContext } from "../../ContextApi/ContextProvider";
import "./Card.css";
import { baseUrl } from "../../BackendApi/auth"
import Payment from "../Payment";
let Card = (props) => {
  const navigate = useNavigate();
  let [cartadd, setCartadd] = useState(false);
  let [memberCount, setMemberCount] = useState(1);
  let [ammount,setAmmount] = useState(-1);
  let [orderId,setOrderId] = useState(-1);
  let [pay,setPay] = useState(false);
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
    //get data from local storage
    let data =
    {
      id: localStorage.getItem("id"),
      Package: props._id,
      name: "default",
      member: 1

    }
    //config request for create transection
    let config = {
      method: 'post',
      url: baseUrl + '/package/buypackage',
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      data: data
    };

    axios(config)
      .then(function (response) {
        //get ready for order creation
        let data1 =
        {
          id: data.id,
          ammount: response.data.cost,
          transId: response.data._id
        }

        //configuring request to create order
        let config = {
          method: 'post',
          url: baseUrl + '/order/create',
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
          data: data1
        };

        //make requesst to create order

        axios(config)
          .then(function (response) {
            let pass = 
            {
              ammount:response.data.cost,
              orderId:response.data.orderId
            }
            setAmmount(response.data.cost);
            setOrderId(response.data.orderId);
            setPay(true);
          })
          .catch(function (error) {
            console.log(error);
          });


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
          <h6 className="packagePrice">{props.price} </h6>
          <button onClick={logedin ? buypackage : goToSignUpPage} className="buypackage">book Now</button>
          <button className="addtoCartpackage" onClick={cartManupulation}>
            {!cartadd ? "Add to Cart" : "Remove from cart"}
          </button>

          <div className="readMore">
            <button key={props.id} onClick={handlePage} className="readMoreBtn">
              Read More
            </button>
            {pay?<Payment ammount={ammount} orderId={orderId} />:""}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
