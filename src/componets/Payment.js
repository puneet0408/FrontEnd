import { useEffect } from "react";

let Payment = (props) => 
{
  console.log(props);
    const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
         document.body.appendChild(script);
       });
    };    
    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    });  
    const options = {
        key: "rzp_test_8qugw0DaMh84Fe",
        currency: "INR",
        amount: props.ammount,
        name: "Tourist",
        description: "Test Wallet Transaction",
        order_id: props.orderId,
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        prefill: {
          name: "Anirudh Jwala",
          email: "anirudh@gmail.com",
          contact: "9999999999",
        },
      };
    function pay()
    {
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();  
    }    
    return (
    <>
    <button onClick={pay}>Make Payment</button>
    </>);
}
export default Payment;