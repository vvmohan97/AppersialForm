import { Avatar, Button, Card, Grid, Menu, MenuItem, Select } from "@mui/material";
import axios from "axios";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from './skein_logo1.png';






export function Managersearch(){




const [search,setSearch]=useState()
const navigates=useNavigate();
const [logout,setLogout]= useState()
const [searchList,setSearchList]=useState([])
const [searchValue , setSearchValue] = useState('');

// const handleChange=(e)=>{
//     setSearch(e.target);

// }
const selectedemail = localStorage.setItem("selected", search)
console.log(selectedemail);
const handlesearchsubmit=(e)=>{
    navigates("/manager")
    axios.get(`http://demo.emeetify.com:5052/appraisel/users/userNames?email=${selectedemail}`)
    .then((response)=>{
        console.log(response.data);
    }).catch("error")
    

}

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

    navigates("/")
    window.location.reload()
    console.log(logout);
 }
    return(<>

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
<Select style={{width:"280px",marginTop:"50px",marginLeft:"20px"}} value={search} onChange={(e)=>{setSearch(e.target.value)}}>

   
    {searchList.map( (opt) =>{
        return(
            <MenuItem key={opt.user_id} value={opt.email}>{opt.email}</MenuItem>
        )
       
    })}

    {/* <MenuItem key={1} value="1">
    1 
    </MenuItem>
    <MenuItem key={2} value="2">
    2
    </MenuItem> */}

</Select>
<Button onClick={handlesearchsubmit}>Submit</Button>
</Card>

    </div>
   
    </>)
}