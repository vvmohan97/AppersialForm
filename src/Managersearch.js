import { Avatar, Button, Card, Grid, Menu, MenuItem, Select } from "@mui/material";
import axios from "axios";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from './skein_logo1.png';
import {ToastContainer,toast}  from 'react-toastify';





export function Managersearch(){




const [search,setSearch]=useState()
const navigate=useNavigate();
const [logout,setLogout]= useState()
const [searchList,setSearchList]=useState([])
const [searchValue , setSearchValue] = useState('');

// const handleChange=(e)=>{
//     setSearch(e.target);

// }
localStorage.setItem("selected", search)
const selectedEmail = localStorage.getItem("selected");
// console.log(selectedEmail,"search");
const handlesearchsubmit=(e)=>{
   


    if(selectedEmail !== undefined && selectedEmail === search){
      navigate("/managernew")
    }
   

}
useEffect(()=>{},[search,selectedEmail])

useEffect( () =>{
    axios.get('http://demo.emeetify.com:5052/appraisel/users/userList')
    .then((response)=>{
        console.log(response.data.data[0].email,"data");
        setSearchList(response?.data?.data)
        for(let i = 0 ; i<response.data.data.length ;i++){
            console.log(response.data.data[i].email,"one");
           
        }
    }).catch("error")
},[]);
const handleLogout = (e) => {
    e.preventDefault();
    setLogout(e.target.value)
    localStorage.removeItem("email")
    localStorage.removeItem("photo")
    localStorage.removeItem("name")

    navigate("/")
    window.location.reload()
    console.log(logout);
 }
    return(<>
<ToastContainer/>
    <div>
    <Grid container style={{top:'0',background:'grey',height:'60px',textAlign:'center',position:'fixed',zIndex:'1000'}}>
  <Grid item xs={2}>
    <div style={{marginTop:'5px'}}>
      <img style={{}} src={logo}/>
    </div>
  </Grid>
  <Grid item xs={6}>
    <div style={{marginTop:'15px',fontSize:'22px',marginLeft:'120px'}}>Performance Appraisal Form</div>
  </Grid>
   <Grid item xs={4}>
    <div style={{marginTop:'15px',float:'right',marginRight:'150px'}}>
    <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
    <React.Fragment>
          <Avatar alt={localStorage.getItem('name')} src={localStorage.getItem('photo')} {...bindTrigger(popupState)} />
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
    </React.Fragment>
              )}
            </PopupState>
    </div>
  </Grid>
 </Grid>
<Card style={{marginTop:"150px",marginLeft:"380px",height:"150px",width:"400px",alignItems:"center"}}> 
{/* <Select style={{width:"280px",marginTop:"50px",marginLeft:"20px"}} value={search} onChange={(e)=>{setSearch(e.target.value)}}>

   
    {searchList.map( (opt) =>{
        return(
            <MenuItem key={opt.user_id} value={opt.email}>{opt.email}</MenuItem>
        )
       
    })}


</Select> */}
<Select style={{width:"280px",marginTop:"50px",marginLeft:"20px"}} value={search}

 onChange={(e)=>{setSearch(e.target.value)}}>

   
{searchList.map( (opt) =>{
    return(
        <MenuItem key={opt.user_id} value={opt.email}>{opt.email}</MenuItem>
    )
   
})}


</Select>
<Button onClick={handlesearchsubmit}>Submit</Button>
</Card>

    </div>
   
    </>)
}