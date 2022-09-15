import React, { useEffect, useState } from 'react'
import Singin from "./Singin"
import Singup from "./Singup"
import "../style/Auth.css"
// import { ChevronDownIcon } from '@chakra-ui/icons'
import axios from 'axios'
function Authentication() {
  const [show, shetShow] = useState(true)

  return (
    <div className='auth '>
      <div className='authBody box '>
        <div className='authBodySwapButton'>
          <button  onClick={()=>shetShow(true)} className = {`${show?"":"activeSign"}`}>Login</button>
          <button onClick={()=>shetShow(false)} className = {`${show?"activeSign":""}`}>Register</button>
        </div>
        <div>
          {
            show ? <Singin /> : <Singup />
          }
        </div>
      </div>
    </div>
  )
}

export default Authentication