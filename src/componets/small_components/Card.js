import { useContext, useEffect, useState } from "react";
import { apiContext } from "../../ContextApi/ContextProvider";
import "./Card.css"
let Card = (props) => {
    let [cartadd, setCartadd] = useState(false);
    let [memberCount,setMemberCount] = useState(1);
    let {cart,setCart} = useContext(apiContext);
    //Function to increase and decrese member count
    const add =(event) => 
    {
        setMemberCount(memberCount+1);
    }
    const rem = (event) => 
    {
        if(memberCount!=1)
        {
            setMemberCount(memberCount-1);
        }
    }
    //Add and remove from Cart
    const cartManupulation = (event) => 
    {
        // console.log(cartadd);
        if(!cartadd)
        {
            
            setCart([...cart,{id:props.id,count:memberCount}]);
            setCartadd(!cartadd);
        }
        else
        {
            let newcart=cart.filter(ele => {return ele.id!=props.id});
            setCart(newcart);
            setCartadd(!cartadd);
        }
        
        
    }
    console.log(cart);
    return (
        <div >
            <div className="card">
                <div className="xx">
                <img className="image" src={props.link} />
                <div className="description">{props.description}</div>
                </div>
                <div className="card__text">
                    <h2 className="name">{props.packageName}</h2>
                    <h4 className="main_destination">
                        {
                            props.main_destination.map((data) => {
                                return (
                                    <span>{`${data},`} </span>
                                )
                            })
                        }
                    </h4>
                    <h2 className="price">{props.price} Per person </h2>
                    <div className="member-count">
                        <button className="min" onClick={rem}>-</button>
                        <p>Member: {memberCount}</p>
                        <button className="add" onClick={add}>+</button>
                    </div>
                    <button className="buyButton">Buy Now</button>
                    <button className="addtoCart" onClick={cartManupulation}>{!cartadd?"Add to Cart":"Remove from cart"}</button>
                </div>
            </div>
        </div>);
};
export default Card;