import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "../componets/small_components/Card.js";
import img1 from "../static/images/1.webp";
import Service from "./small_components/service.js";
import "./home.css";
import Loading from "./small_components/loading" 
import Banner from "./small_components/Topbanner.js";
import Gallary from "./small_components/gallary";



function temp(product) {
  return (
    <Card {...product} />
  );
}
 
let Home = () => {

  const [loading, setloading] =useState(true);
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
      setloading(false);
      // for(let i=0;i<products.length;i++)
      // {
      //   setProucts([...products,products[i].link=img1])
      // }
      })
      .catch(function (error) {
        setloading(false);
        console.log(error);
      });
  }, []);

  if(loading){
    return(
      <main>
<Loading/>
      </main>
    )
  }

  return (
    <main>
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
    </main>
  );
};
export default Home;
