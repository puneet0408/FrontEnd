import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import {useNavigate}   from "react-router-dom"

function Singin() {
    const history = useNavigate()
    const toast = useToast()
    const [show, setShowpasword] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [load, setLoad] = useState(false)

const handleLogin = async()=>{
    setLoad(true)
        if(!email || !password)
        {
            toast({
                title: 'please fill all the field',
                status: 'warning',
                duration: 9000,
                isClosable: true,
                position: "top"
            })
            setLoad(false)
            return
        }
       
        try {
           
            const userlogined = await axios({
                method: "post",
                url: "http://localhost:5000/api/user/login",
                data :{ email, password},
                headers:{
                    "content-type":"application/json"
                }
            })
            console.log(userlogined.data);
           if(userlogined.data)
           {
            toast({
                title: 'Login Succesfull',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: "top"
            })
            localStorage.setItem('userInfo', JSON.stringify(userlogined.data))
            setLoad(false)
            history('/chats')
           }
           if(!userlogined.data)
           {
            toast({
                title: "Wrong Password",
                status: 'warning',
                duration: 9000,
                isClosable: true,
                position: "top"
            })
           }

            
        } catch (error) {
    
            if(error)
            {
            
                toast({
                    title: error.name,
                    // description:error.responce.data.message,
                    status: 'warning',
                    duration: 9000,
                    isClosable: true,
                    position: "bottom"
                })
               
            }
            setLoad(false)
        }
}


    return (
        <VStack 
       
        spacing="5px" color="black" transition="all .5s ease">

            <FormControl id='first-name' isRequired>
                <FormLabel marginLeft="5px">Email</FormLabel>
                <InputGroup>
                    <Input
                    value={email}
                        placeholder='Enter Your Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputGroup>
            </FormControl>
            <FormControl id='first-name' isRequired>
                <FormLabel marginLeft="5px">Passowrd</FormLabel>
                <InputGroup>
                    <Input
                    value={password}
                        type={show ? "text" : "password"}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h='1.75rem' size="sm" width="5rem" onClick={() => setShowpasword(!show)} >
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                width="100%"
                colorScheme="blue"
                style={{ marginTop: "15px" }}
                onClick = {handleLogin}
                // isLoading = {load}
            >
                Login
            </Button>
            <Button
                variant="solid"
                width="100%"
                colorScheme="red"
                style={{ marginTop: "15px" }}
                onClick ={()=>{
                    setEmail("guest@gmail.com")
                    setPassword("guest@123")
                }}
            >
                Get Guest Credential
            </Button>
        </VStack>
    )
}

export default Singin