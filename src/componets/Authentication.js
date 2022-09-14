import React, { useEffect, useState } from 'react'
import Singin from "./Singin"
import Singup from "./Singup"
// import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, color, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import axios from 'axios'
const style = {
  box: {
    boxShadow: "5px 3px 4px 2px #ccc",
    color: "black",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    backgroundColor: "white",
    width: "100%",
    margin: "40px 0 15px 0",
    borderRadius: "10px",
    borderWidth: "1px"
  },
  mainBox: {
    boxShadow: "5px 3px 4px 2px #ccc",
    color: "black",
    padding: "10px",
    backgroundColor: "white",
    width: "100%",
    margin: "40px 0 15px 0",
    borderRadius: "10px",
    borderWidth: "1px"
  },
  text: {
    fontWeight: "700",
    fontSize: "20px",


  },
  card: {
    backgroundColor: "#fff"
  }
}
function Authentication() {
  const [show, shetShow] = useState(false)

  return (
    <div>
      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
      <div>
          {
            show?<Singin/>:<Singup/>
          }
      </div>
    </div>
  )
}

export default Authentication