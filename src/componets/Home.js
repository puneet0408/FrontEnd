//import { useContext, useEffect } from "react";
import Card from "../componets/small_components/Card.js";
//import { apiContext } from "../ContextApi/ContextProvider.js";
import img1 from "../static/images/1.webp";
import Service from "./small_components/service.js";
import "./home.css";
import Banner from "./small_components/Topbanner.js";
import Gallary from "./small_components/gallary";
// let main_destination = [
//   {
//     description:  "MechlodeGanj",
//     key:1
//   },
//   {
//     description:  "Bhagsu Nag",
//     key:2
//   },
//   {
//     description:  "BrjeshWari Temple",
//     key:3
//   },
//   {
//     description:  "Naddi",
//     key:4
//   },
// ];
let products = [
  {
    packageName: "Him Darshan",
     id: "1",
    price: "5600",
    link: img1,
    main_destination: 'MechlodeGanj',
    description:"Read more"
  },
  {
    packageName: "Shimla Kuffri",
    id: "2",
    price: "6600",
    link: img1,
    main_destination: "Bhagsu Nag",
    description:"Read more"
  },
  {
    packageName: "Kullu Manali",
    id: "3",
    price: "7600",
    link: img1,
    main_destination: "BrjeshWari Temple",
    description:"Read more"
  },
  {
    packageName: "Dharmshala",
    id: "4",
    price: "8000",
    link: img1,
    main_destination:  "Naddi",
    description:"Read more"
  },
  {
    packageName: "Darjling Bharmor",
    id: "5",
    price: "2600",
    link: img1,
    main_destination: "kangra",
    description:"Read more"
  },
];

function temp(product) {
  return (
    <Card {...product} />
    // <Card
    //   // id={product.id}
    //   // price={product.price}
    //   // link={product.link}
    //   // main_destination={product.main_destination}
    //   // packageName={product.packageName}
    //   // description="Read more"
    // ></Card>
  );
}

let Home = () => {
  // const { cart, setCart } = useContext(apiContext);
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
