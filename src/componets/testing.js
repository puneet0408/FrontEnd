import React from "react";


let axios = require('axios');

const Testing  = () => {

    let data = JSON.stringify({
        "response":{
            "razorpay_order_id":"order_KNNFx7vom7L5pl",
            "razorpay_payment_id":"pay_KNfsdhfsd",
            "razorpay_signature":"vsbdfjbsf"
        }
    });

    var config = {
        method: "post",
        url: "https://touristbackend.herokuapp.com/api/payment/verfiy",
        headers: {
          "Content-Type": "application/json",
        },
    data:data
      };

    const test = ()=>{
           axios(config).then(function(response){
            console.log(JSON.stringify(response.data));
           })
           .catch(function (error) {
          console.log(error);
          });
    }

     return(
        <div>
            <div  onClick={test} >
                testing
            </div>
        </div>
     )
} 

export default Testing;