import { useState } from "react";
import "./Card.css"
let Card = (props) => {
    let [cart, setCart] = useState(false);
    let [memberCount,setMemberCount] = useState(1);
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
    const cartManupulation = (event) => 
    {
        setCart(!cart);
    }
    return (
        <div >
            <div className="card">
                <img className="image" src={props.link} />
                <div className="description">{props.description}</div>
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
                    <button className="addtoCart" onClick={cartManupulation}>{!cart?"Add to Cart":"Remove from cart"}</button>
                </div>
            </div>
        </div>);
};
export default Card;