import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "../componets/small_components/Card.js";
//import { apiContext } from "../ContextApi/ContextProvider.js";
import img1 from "../static/images/1.webp";
import Service from "./small_components/service.js";
import "./home.css";
import Banner from "./small_components/Topbanner.js";
import Gallary from "./small_components/gallary";
function temp(product) {
  return (
    <Card {...product} />
  );
}
// let products = [
//   {
//     packageName: "Him Darshan",
//      id: "1",
//     price: "5600",
//     link: img1,
//     main_destination: 'MechlodeGanj',
//     description:"Read more"
//   },
//   {
//     packageName: "Shimla Kuffri",
//     id: "2",
//     price: "6600",
//     link: img1,
//     main_destination: "Bhagsu Nag",
//     description:"Read more"
//   },
//   {
//     packageName: "Kullu Manali",
//     id: "3",
//     price: "7600",
//     link: img1,
//     main_destination: "BrjeshWari Temple",
//     description:"Read more"
//   },
//   {
//     packageName: "Dharmshala",
//     id: "4",
//     price: "8000",
//     link: img1,
//     main_destination:  "Naddi",
//     description:"Read more"
//   },
//   {
//     packageName: "Darjling Bharmor",
//     id: "5",
//     price: "2600",
//     link: img1,
//     main_destination: "kangra",
//     description:"Read more"
//   },
// ];
let Home = () => {
  // const { cart, setCart } = useContext(apiContext);
  let [products,setProucts]=useState([]);
  useEffect(() => {
    //Fectching Products Data from Backend
    var config = {
      method: 'get',
      url: 'https://touristbackend.herokuapp.com/api/package/showallpackage',
      headers: {}
    };
  
    axios(config)
      .then(function (response) {
      setProucts(response.data);
      // for(let i=0;i<products.length;i++)
      // {
      //   setProucts([...products,products[i].link=img1])
      // }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="home-container">
      <Banner />
      {/* Top Packages currently Trending */}
      <div className="package-top">
        <h3>Top Trending Packages</h3>
      </div>
      <div className="listed-packages">{products.map(temp)}</div>

      {/* gallary page  */}
      <Gallary />
      {/* service page */}
      <Service />
    </div>
  );
};
export default Home;
