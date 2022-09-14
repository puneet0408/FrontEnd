import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/react'
import axios from "axios"
import {useNavigate}   from "react-router-dom"

function Singup() {
    
    const history = useNavigate()
    const toast = useToast()
    const [show, setShowpasword] = useState(false)
    const [showcnf, setShowcnfPassword] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [cnfpassword, setCnfPassword] = useState()
    const [pic, setPicture] = useState()
    const [load, setLoad] = useState(false)

    const handlePassword = () => {
        setShowpasword(!show)
    }
    const handleCnfPassword = () => {
        setShowcnfPassword(!showcnf)
    }
    const setPostDetail = (pics) => {
        setLoad(true)
        if (pics === undefined) {
            toast({
                title: 'wait image uploading.',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom"
                
            })
            return
        }

        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const imgdata = new FormData();
            imgdata.append("file", pics)

            imgdata.append("upload_preset", 'my-chat-app')
            imgdata.append("cloud_name", "dnvjszlao")

            fetch("https://api.cloudinary.com/v1_1/dnvjszlao/image/upload", {
                method: "post",
                body: imgdata
            }).then(res => res.json())
                .then((data) => {
                    setPicture(data.secure_url)
                    setLoad(false)
                    console.log(data.secure_url);
                })
        }
        else {
            toast({
                title: 'please select image',
                status: 'warning',
                duration: 9000,
                isClosable: true,
                position: "bottom"
            })
        }
    }

    const handelSignup = async () => {

        setLoad(true)
        if(!email || !password || !name || !cnfpassword)
        {
            toast({
                title: 'please fill all the field',
                status: 'warning',
                duration: 9000,
                isClosable: true,
                position: "bottom"
            })
            setLoad(false)
            return
        }
        if(password !== cnfpassword)
        {
            toast({
                title: 'Password do not match',
                status: 'warning',
                duration: 9000,
                isClosable: true,
                position: "bottom"
            })
            setLoad(false)
            return
        }

        try {
           
            const userSigned = await axios({
                method: "post",
                url: "http://localhost:5000/api/user",
                data :{name, email, password, pic},
                headers:{
                    "content-type":"application/json"
                }
            })
            toast({
                title: 'registartion Succesfull',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: "bottom"
            })

            localStorage.setItem('userInfo', JSON.stringify(userSigned.data))
            setLoad(false)
            history('/chats')
        } catch (error) {
            console.log(error);
            if(error)
            {
            
                toast({
                    title: 'erro occured',
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
        <VStack spacing="5px" color="black" style = {{width:"20rem"}} >
            <FormControl id='first-name' isRequired>
                <FormLabel marginLeft="5px">Name</FormLabel>
                <InputGroup>
                    <Input
                        placeholder='Enter Your name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </InputGroup>
            </FormControl>
            <FormControl id='first-name' isRequired>
                <FormLabel marginLeft="5px">Email</FormLabel>
                <InputGroup>
                    <Input
                        placeholder='Enter Your Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputGroup>
            </FormControl>
            <FormControl id='first-name' isRequired>
                <FormLabel marginLeft="5px">Passowrd</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button width="5rem" h='1.75rem' size="sm" onClick={handlePassword} >
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='first-name' isRequired>
                <FormLabel marginLeft="5px">Passowrd</FormLabel>
                <InputGroup>
                    <Input
                        type={showcnf ? "text" : "password"}
                        placeholder='Confirm Password'
                        onChange={(e) => setCnfPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button width="5rem" h='1.75rem' size="sm" onClick={handleCnfPassword} >
                            {showcnf ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='pic' isRequired>
                <FormLabel marginLeft="5px">Upload your picture</FormLabel>
                <InputGroup>
                    <Input
                        type="file"
                        p={1.5}
                        accept="image/*"
                        onChange={(e) => setPostDetail(e.target.files[0])}
                    />
                </InputGroup>
            </FormControl>
            <Button
                onClick={handelSignup}
                width="100%"
                m="10px"
                style={{ marginTop: "15px" }}
                isLoading = {load}
                >
                SignUp
            </Button>

        </VStack>
    )
}

export default Singup