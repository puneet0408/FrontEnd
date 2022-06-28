import {useState} from 'react'
let Signup = () =>  
{
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
    return (
        <form onSubmit={handleSubmit}>
        <div className='form'>
      <input className='effect-1'
        type="text" 
        name="username" 
        placeholder="Enter your Name"
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      <div className="focus-border"></div>
      <input className='effect-1'
        type="email" 
        name="email" 
        placeholder="Enter your Email"
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      <div className="focus-border"></div>
      <input className='effect-1'
        type="tel" 
        name="phone" 
        placeholder="Enter Your Phone Number"
        value={inputs.phone || ""} 
        onChange={handleChange}
      />
      <div className="focus-border" ></div>
        </div>
    </form>
    );
};
export default Signup;