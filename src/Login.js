import {Box, TextField, Button, Typography, Grid} from '@mui/material';

import {useNavigate} from 'react-router-dom' 
import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import {GoogleButton} from 'react-google-button'
//import LockSharpIcon from '@mui/icons-material/LockSharp';
import { auth,provider} from "./components/Config";
import  {signInWithPopup} from "firebase/auth";
import { Home } from './Home';
import axios from 'axios';
import loginlogo  from './loginlogo1.png'
import {ToastContainer,toast}  from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function Login(){

    const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [errors,setErrors]=useState("");
const navigate=useNavigate()
    const [value,setValue]=useState("")
    const handleClick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
            console.log(data)
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
            localStorage.setItem("photo",data.user.photoURL)
            localStorage.setItem('name',data.user.displayName)
            navigate("/home")
     })
    }

const handleSubmit=(e)=>{

    e.preventDefault();

    axios.post('http://demo.emeetify.com:5052/appraisel/users/adminLogin' ,{email:email , password:password}).then((response)=>{
        console.log("login",response.data.status)

        if(response.data.status!== false){
            console.log("login sucecss")
            navigate("/manager");
        }
        else{
            console.log("failed")
            toast(" login credentials mismatch");

        }
        // navigate("/home")
        // localStorage.setItem("email",email)
        // if(response.data)

    }).catch("error")
    
    const errors={};

    if(!email){
        errors.email=("*Email Requried")
    }
    

    if(!password){
        errors.password=("*Password Requried");
    }
    setErrors(errors)

    






    // if(email==LoginDeatils[0].email && password==LoginDeatils[0].password){
    //     console.log("workingLogin");
    //     localStorage.setItem("email",email)
    //     navigate("/home");
    //     toast.success("login Successfull")
      
        
    // }
  
    
    // else{
    //     console.log("signup mismatched")
    //     toast.error(" login credentials mismatch");
    // }
   
}
const LoginDeatils=[{
    email:"admin@gmail.com",password:"Admin@123"},
    ]


    return(
        <div>
            <ToastContainer/>
        <Grid container>        
         <Grid item >
            <Box sx={{marginTop:"10px"}}>
            <h1 className='heading-appraisal'>Appraisal form 2023</h1>
            <img className='loginimg' src={loginlogo}/>

        </Box>
        </Grid>
        <Grid item xs={5}>
         <form onSubmit={handleSubmit}>
           
                <Box display="flex" 
                flexDirection={'column'} 
                maxWidth={400} 
                alignItems={"center"}
                 justifyContent={'center'}
                 margin={'auto'} 
                 marginTop={5}
                 padding={5}
                 
                 borderRadius={5}
                 boxShadow={'5px 5px 30px #ccc'}
                //  sx={{":hover":{
                //     boxShadow:'10px 10px 10px #ccc'
                //  }}}
                 >
                    <Typography  variant="h2" padding={2}
                     textAlign={'center'} >Login</Typography>
                 
                <TextField 
                type={'email'} 
                variant="filled" 
                placeholder='Email'
                margin='normal'
                name='email'
                onChange={(e)=>setEmail(e.target.value)}
                >
                </TextField>
                     {
                        errors.email && <Typography sx={{color:"red"}}>{errors.email}</Typography>
                     }

        
               
                    <TextField 
                    type={'password'} 
                    variant="filled" 
                    placeholder='Password'
                    margin='normal'
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    
                    ></TextField>
                {
                    errors.password && <Typography sx={{color:"red"}}>{errors.password}</Typography>
                }
                    <Button
                    
                    sx={{marginTop:1, marginRight:10 }}
                    
                    >forgot my password</Button>
                    <Button type='submit'
                    variant='contained'
                    color='primary'
                    sx={{marginTop:3 , borderRadius:3}}
                    // onClick={handleSubmit}
                    >Login</Button>
                    <Typography>or</Typography>
                    {/* {value?<Home/>:
                    <Button sx={{backgroundColor:"#FCEE21"}} onClick={handleClick}>Signup with Google</Button>
                } */}
              {value?<Home/>: 
                <GoogleButton onClick={handleClick}>Signup with google</GoogleButton>  
            }
                </Box>

            
                </form>
         </Grid>

        
        </Grid>
        </div>
    );

}