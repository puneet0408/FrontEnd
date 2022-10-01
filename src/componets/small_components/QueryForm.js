import{ useState } from "react";
import "../../style/QureyForm.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



export default function QureyForm() {
  const [FormData, setFormData] = useState({
    name: "",
    number: "",
    email: ""
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
    event.target.reset();
    console.log(FormData);
    toast("Query submitted")
  }

  return (
    <div className="Query-form" >
 <div className="enqueryCont" >
          <h1 className="QuickQuery" >Quick Inquiry</h1>
          </div>
          
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        className="formInput"
        placeholder="name"
        onChange={handleChange}
        value={FormData.name}
        required
      />
      <input
        type="text"
        name="number"
        placeholder="mobile no"
        className="formInput"
        minlength="1" 
              maxlength="10"
        onChange={handleChange}
        value={FormData.number}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        className="formInput"
        onChange={handleChange}
        value={FormData.email}
        required
      /> 
      <button className="SubmitQuery" >submit</button>
    </form>
    <ToastContainer/>
    </div>
  );
}
