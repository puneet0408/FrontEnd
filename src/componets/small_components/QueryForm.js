import{ useState } from "react";
import "../../style/QureyForm.css";

export default function QureyForm() {
  const [FormData, setFormData] = useState({
    userName: "",
    phoneNo: "",
    userEmail: "",
    PickUp:"",
    drop:""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(FormData);
  }

  return (
    <div className="Query-form" >
 
          <h1 className="QuickQuery" >Quick Inquiry</h1>
          
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        name="userName"
        className="formInput"
        placeholder="userName"
        onChange={handleChange}
        value={FormData.firstName}
      />
      <input
        type="text"
        name="phoneNo"
        placeholder="phoneNo"
        className="formInput"
        onChange={handleChange}
        value={FormData.phoneNo}
      />
      <input
        type="email"
        name="userEmail"
        placeholder="email"
        className="formInput"
        onChange={handleChange}
        value={FormData.userEmail}
      />
 
      <input
        type="text"
        name="pickup"
        placeholder="PickUp"
        className="formInput"
        onChange={handleChange}
        value={FormData.PickUp}
      />
      <input
        type="text"
        name="drop"
        placeholder="Drop"
        className="formInput"
        onChange={handleChange}
        value={FormData.drop}
      />
      
     
      <button className="SubmitQuery" >submit</button>
    </form>
    </div>
  );
}
