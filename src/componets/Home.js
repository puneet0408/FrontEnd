import {useState} from 'react'
import Card from "../componets/small_components/Card.js"
import img1 from "../static/images/1.webp"
import "./home.css"
let main_destination=["MechlodeGanj","Bhagsu Nag","BrjeshWari Temple","Naddi"];
let products=[
   {packageName:"Him Darshan",id:"1",price:"5600",link:img1,main_destination:main_destination},
   {packageName:"Shimla Kuffri",id:"2",price:"6600",link:img1,main_destination:main_destination},
   {packageName:"Kullu Manali", id:"3",price:"7600",link:img1,main_destination:main_destination},
   {packageName:"Dharmshala", id:"4",price:"8000",link:img1,main_destination:main_destination},
   {packageName:"Darjling Bharmor", id:"5",price:"2600",link:img1,main_destination:main_destination},
]
function temp(product)
{
   return  <Card id ={product.id} price={product.price} link={product.link} main_destination={product.main_destination} packageName={product.packageName} description="just checking "></Card>
}
let Home = () =>  
{
   return (<div>
  <div className="listed-packages">
   {products.map(temp)}
  </div>
   </div>
   );
};
export default Home;