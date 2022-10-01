import { createContext, useState } from "react";
export const apiContext = createContext();

export const StateProvider = ({children})=>{
    const[logedin, setLogedin] = useState(false);
    
    const [cart,setCart] = useState([]);
   return<apiContext.Provider 
    value={{logedin, setLogedin,cart,setCart}}
    >
    {children}
    </apiContext.Provider>
   
}
