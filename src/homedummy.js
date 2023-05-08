import { Avatar, Box, Button, Card, Container, Divider, FormControl, FormGroup, FormLabel, Grid, Input, InputLabel, Item, Menu, MenuItem, Popover, Select, TextareaAutosize, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ScoreSystem } from "./components/ScoreSystem";
import Stack from "@mui/material/Stack";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import PopupState, { bindTrigger, bindPopover, bindMenu } from 'material-ui-popup-state';
import logo from './skein_logo1.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { DatePickerToolbar } from "@mui/x-date-pickers/DatePicker/DatePickerToolbar";
import { DateTimePickerToolbar } from "@mui/x-date-pickers/DateTimePicker/DateTimePickerToolbar";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export function Homedummy() {


const [popmsg,setPopmsg] =useState(false)
const [nameError,setNameError]=useState("")
  const [selectedDate, handleDateChange] = useState(null);
  const [year, setYear] = useState()
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("")
  const [joining, setJoining] = useState("")
  const [department, setDepartment] = useState("")
  const [manager, setManager] = useState("")
  const [selfrating, setSelfrating] = useState([{}]);
  const [justifyrating, setJustifyrating] = useState("")
  const [managerrating, setManagerrating] = useState("")
  const [managercomments, setManagercomments] = useState("")
  const [selfaspiration, setSelfaspiration] = useState("")
  const [teamlead, setTeamlead] = useState("")
  const [roleId,setRoleId]=useState('')
  const [errors, setErrors] = useState("")

  const [value, setValue] = useState("")
  const [logout, setLogout] = useState(true)
  const navigates = useNavigate();
  const [deatil, setDeatil] = useState([]);
  const [ratingg, setRating] = useState(0);

  const [average,setAverage]=useState(0);

/* self rating usestates */

const [selfRating1 , setSelfRating1 ] = useState(0);
const [selfRating2 , setSelfRating2 ] = useState(0);
const [selfRating3 , setSelfRating3 ] = useState(0);
const [selfRating4 , setSelfRating4 ] = useState(0);
const [selfRating5 , setSelfRating5 ] = useState(0);
const [selfRating6 , setSelfRating6 ] = useState(0);
const [selfRating7 , setSelfRating7 ] = useState(0);
const [selfRating8 , setSelfRating8 ] = useState(0);
const [selfRating9, setSelfRating9 ] = useState(0);
const [selfRating10, setSelfRating10 ] = useState(0);
const [selfRating11 , setSelfRating11 ] = useState(0);

const [selfComment1,setSelfComment1]=useState();
const [selfComment2,setSelfComment2]=useState();
const [selfComment3,setSelfComment3]=useState();
const [selfComment4,setSelfComment4]=useState();
const [selfComment5,setSelfComment5]=useState();
const [selfComment6,setSelfComment6]=useState();
const [selfComment7,setSelfComment7]=useState();
const [selfComment8,setSelfComment8]=useState();
const [selfComment9,setSelfComment9]=useState();
const [selfComment10,setSelfComment10]=useState();
const [selfComment11,setSelfComment11]=useState();
// Error handling starts here
const [formData,setFormData]=useState({
  name:"",
  designation:"",
  department:"",
  managerName:"",
  selfRating1:0,
  selfRating2:0,
  selfRating3:0,
  selfRating4:0,
  selfRating5:0,
  selfRating6:0,
  selfRating7:0,
  selfRating8:0,
  selfRating9:0,
  selfRating10:0,
selfRating11:0,
  selfaspiration:"",

})
const [formErrors,setFormErrors]=useState({
  name:"",
  designation:"",
  department:"",
  managerName:"",
  
  selfaspiration:"",
})

// Error handling ends here

//  console.log(formData.selfComment1,"data");

useEffect(()=>{
    
   

  let total = (parseInt(formData.selfRating1)+parseInt(formData.selfRating2)+parseInt(formData.selfRating3)+parseInt(formData.selfRating4)+parseInt(formData.selfRating5)+
  parseInt(formData.selfRating6)+parseInt(formData.selfRating7)+parseInt(formData.selfRating8)+parseInt(formData.selfRating9)+parseInt(formData.selfRating10)+parseInt(formData.selfRating11))
  let avg = total/11;
  setAverage(avg.toFixed(2))
},[formData.selfRating1,formData.selfRating2,formData.selfRating3,formData.selfRating4,formData.selfRating5,formData.selfRating6,formData.selfRating7,selfRating8,formData.selfRating9,formData.selfRating10,formData.selfRating11])
/* self rating usestates */
const selfAspirationpayload ={
    'self_aspirations':formData.selfaspiration
}
const commentpayload = [
    {
        t_id:1,
        self_rating:formData.selfRating1,
        self_comment:formData.selfComment1,
    },
    {
        t_id:2,
        self_rating:formData.selfRating2,
        self_comment:formData.selfComment2
    },
    {
        t_id:3,
        self_rating:formData.selfRating3,
        self_comment:formData.selfComment3
    },
    {
        t_id:4,
        self_rating:formData.selfRating4,
        self_comment:formData.selfComment4
    },
     {
        t_id:5,
        self_rating:formData.selfRating5,
        self_comment:formData.selfComment5
    },
     {
        t_id:6,
        self_rating:formData.selfRating6,
        self_comment:formData.selfComment6
    },
    {
        t_id:7,
        self_rating:formData.selfRating7,
        self_comment:formData.selfComment7
    },

     {
        t_id:8,
        self_rating:formData.selfRating8,
        self_comment:formData.selfComment8
    },
    {
        t_id:9,
        self_rating:formData.selfRating9,
        self_comment:formData.selfComment9
    },
    {
        t_id:10,
        self_rating:formData.selfRating10,
        self_comment:formData.selfComment10
    },
    {
        t_id:11,
        self_rating:formData.selfRating11,
        self_comment:formData.selfComment11
    },
   
]



  const handleLogout =      (e) => {
    e.preventDefault();
    setLogout(e.target.value)
    // localStorage.removeItem("email")
    // localStorage.removeItem("photo")
    // localStorage.removeItem("name")

    navigates("/")
    window.localStorage.clear();
 }
const localEmail=localStorage.getItem('email')
const payload ={
  username:formData.name,
  manager_name :formData.managerName,
  role_id:roleId,
  designation:formData.designation,
  department:formData.department,
 
  review_period:'2023'
}

useEffect(()=>{
    if(!localStorage.getItem('token')){
        navigates("/")
    }else{
        navigates("/homevalid")
    }
},[])
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    let formIsValid = true;

    if(!formData.name){
      formIsValid = false;
      errors['name'] = "please enter your name";
    }
    if(!formData.designation){
      formIsValid =false;
      errors['designation']="Please enter your designation"
    }
        if(!formData.department){
      formIsValid =false;
      errors['department']="Please enter your department"
    }
    if(!formData.managerName){
      formIsValid=false;
      errors['managerName']="Please select your Manager"
    }
       if(!formData.selfRating1){
      formIsValid=false;
      errors['selfRating1']="Please select Rating"
    }
    if(!formData.selfComment1){
      formIsValid=false;
      errors['selfComment1']="Please enter comments"
    }
    if(!formData.selfRating2){
      formIsValid=false;
      errors['selfRating2']="Please select Rating"
    }
    if(!formData.selfComment2){
      formIsValid=false;
      errors['selfComment2']="Please enter comments"
    }
    if(!formData.selfRating3){
      formIsValid=false;
      errors['selfRating3']="Please select Rating"
    }
    if(!formData.selfComment3){
      formIsValid=false;
      errors['selfComment3']="Please enter comments"
    }
    if(!formData.selfRating4){
      formIsValid=false;
      errors['selfRating4']="Please select Rating"
    }
    if(!formData.selfComment4){
      formIsValid=false;
      errors['selfComment4']="Please enter comments"
    }
    if(!formData.selfRating5){
      formIsValid=false;
      errors['selfRating5']="Please select Rating"
    }
    if(!formData.selfComment5){
      formIsValid=false;
      errors['selfComment5']="Please enter comments"
    }
    if(!formData.selfRating6){
      formIsValid=false;
      errors['selfRating6']="Please select Rating"
    }
    if(!formData.selfComment6){
      formIsValid=false;
      errors['selfComment6']="Please enter comments"
    }
    if(!formData.selfRating7){
      formIsValid=false;
      errors['selfRating7']="Please select Rating"
    }
    if(!formData.selfComment7){
      formIsValid=false;
      errors['selfComment7']="Please enter comments"
    }
    if(!formData.selfRating8){
      formIsValid=false;
      errors['selfRating8']="Please select Rating"
    }
    if(!formData.selfComment8){
      formIsValid=false;
      errors['selfComment8']="Please enter comments"
    }
    if(!formData.selfRating9){
      formIsValid=false;
      errors['selfRating9']="Please select Rating"
    }
    if(!formData.selfComment9){
      formIsValid=false;
      errors['selfComment9']="Please enter comments"
    }
    if(!formData.selfRating10){
      formIsValid=false;
      errors['selfRating10']="Please select Rating"
    }
    if(!formData.selfComment10){
      formIsValid=false;
      errors['selfComment10']="Please enter comments"
    }
    if(!formData.selfRating11){
      formIsValid=false;
      errors['selfRating11']="Please select Rating"
    }
    if(!formData.selfComment11){
      formIsValid=false;
      errors['selfComment11']="Please enter comments"
    }
    if(!formData.selfaspiration){
      formIsValid=false;
      errors['selfaspiration']="please enter comments"
    }
   

    setFormErrors(errors);


    
    if (!justifyrating) {
      errors.justifyrating = "*Requried"
    }

    if (!teamlead) {
      errors.teamlead = "*Requried"
    }
    if(!roleId){
      errors.roleId ="*Requried"
    }
  
    setErrors(errors);


      axios.put(`http://demo.emeetify.com:5052/appraisel/users/FormDetails?email=${localEmail}`,payload)
      .then((response)=>{
       console.log("")
       if(payload !== ""){
         setPopmsg(true);
         toast("Details submitted successfullyyyyy")
       }
       else{
         setPopmsg(false);
         toast("All fields are mandatory")
       }
      }).catch((e)=>console.log("error",e))
 

    
     axios.post(`http://demo.emeetify.com:5052/appraisel/users/AddComment?email=${localEmail}&&type=employee`
     ,commentpayload
     ).then((response)=>{
      console.log("")
     }).catch((e)=>console.log("error",e))
     
     axios.put(`http://demo.emeetify.com:5052/appraisel/users/userFeedback?email=${localEmail}&type=employee`,selfAspirationpayload)
     .then((response)=>{console.log("");}).catch("error")
    }

  const handleInputChange=(e)=>{
    const {name,value} = e.target;
     
    setFormData({
      ...formData,
      [name]:value,
    });
  }

  const handleInputBlur = (e)=>{
    const {name} = e.target;
    let errors = {...formErrors};
    let formIsValid = true;

    if(name === 'name' && !formData.name){
      formIsValid = false;
      errors['name'] = 'Please enter ur name';
    }else{
      delete errors['name'];
    }

     if(name === 'designation' && !formData.designation){
      formIsValid = false;
      errors['designation'] = 'Please enter ur name';
    }else{
      delete errors['designation'];
    }

     if(name === 'department' && !formData.department){
      formIsValid = false;
      errors['department'] = 'Please enter ur name';
    }else{
      delete errors['department'];
    }
    if(name === 'managerName' && !formData.department){
      formIsValid = false;
      errors['managerName'] = 'Please select your manager';
    }else{
      delete errors['managerName'];
    }
       if(name === 'selfRating1' && !formData.selfRating1){
      formIsValid = false;
      errors['selfRating1'] = 'Please select Rating';
    }else{
      delete errors['selfRating1'];
    }
    if(name === 'selfComment1' && !formData.selfComment1){
      formIsValid = false;
      errors['selfComment1'] = 'Please enter comments';
    }else{
      delete errors['selfComment1'];
    }
    if(name === 'selfRating2' && !formData.selfRating2){
      formIsValid = false;
      errors['selfRating2'] = 'Please select Rating';
    }else{
      delete errors['selfRating2'];
    }
    if(name === 'selfComment2' && !formData.selfComment2){
      formIsValid = false;
      errors['selfComment2'] = 'Please enter comments';
    }else{
      delete errors['selfComment2'];
    }
    if(name === 'selfRating3' && !formData.selfRating3){
      formIsValid = false;
      errors['selfRating3'] = 'Please select Rating';
    }else{
      delete errors['selfRating3'];
    }
    if(name === 'selfComment3' && !formData.selfComment3){
      formIsValid = false;
      errors['selfComment3'] = 'Please enter comments';
    }else{
      delete errors['selfComment3'];
    }
    if(name === 'selfRating4' && !formData.selfRating4){
      formIsValid = false;
      errors['selfRating4'] = 'Please select Rating';
    }else{
      delete errors['selfRating4'];
    }
    if(name === 'selfComment4' && !formData.selfComment4){
      formIsValid = false;
      errors['selfComment4'] = 'Please enter comments';
    }else{
      delete errors['selfComment4'];
    }
    if(name === 'selfRating5' && !formData.selfRating5){
      formIsValid = false;
      errors['selfRating5'] = 'Please select Rating';
    }else{
      delete errors['selfRating5'];
    }
    if(name === 'selfComment5' && !formData.selfComment5){
      formIsValid = false;
      errors['selfComment5'] = 'Please enter comments';
    }else{
      delete errors['selfComment5'];
    }
    if(name === 'selfRating6' && !formData.selfRating6){
      formIsValid = false;
      errors['selfRating6'] = 'Please select Rating';
    }else{
      delete errors['selfRating6'];
    }
    if(name === 'selfComment6' && !formData.selfRating6){
      formIsValid = false;
      errors['selfComment6'] = 'Please enter comments';
    }else{
      delete errors['selfComment6'];
    }
    if(name === 'selfRating7' && !formData.selfRating7){
      formIsValid = false;
      errors['selfRating7'] = 'Please select Rating';
    }else{
      delete errors['selfRating7'];
    }
    if(name === 'selfComment7' && !formData.selfComment7){
      formIsValid = false;
      errors['selfComment7'] = 'Please enter comments';
    }else{
      delete errors['selfComment7'];
    }
    if(name === 'selfRating8' && !formData.selfRating8){
      formIsValid = false;
      errors['selfRating8'] = 'Please select Rating';
    }else{
      delete errors['selfRating8'];
    }
    if(name === 'selfComment8' && !formData.selfRating8){
      formIsValid = false;
      errors['selfComment8'] = 'Please enter comments';
    }else{
      delete errors['selfComment8'];
    }
    if(name === 'selfRating9' && !formData.selfRating9){
      formIsValid = false;
      errors['selfRating9'] = 'Please select Rating';
    }else{
      delete errors['selfRating9'];
    }
    if(name === 'selfComment9' && !formData.selfComment9){
      formIsValid = false;
      errors['selfComment9'] = 'Please enter comments';
    }else{
      delete errors['selfComment9'];
    }
    if(name === 'selfRating10' && !formData.selfRating10){
      formIsValid = false;
      errors['selfRating10'] = 'Please select Rating';
    }else{
      delete errors['selfRating10'];
    }
    if(name === 'selfComment10' && !formData.selfComment10){
      formIsValid = false;
      errors['selfComment10'] = 'Please enter comments';
    }else{
      delete errors['selfComment10'];
    }
    if(name === 'selfRating11' && !formData.selfRating11){
      formIsValid = false;
      errors['selfRating11'] = 'Please select Rating';
    }else{
      delete errors['selfRating11'];
    }
    if(name === 'selfComment11' && !formData.selfComment11){
      formIsValid = false;
      errors['selfComment11'] = 'Please enter comments';
    }else{
      delete errors['selfComment11'];
    }
    if(name === 'selfaspiration' && !formData.selfaspiration){
      formIsValid = false;
      errors['selfaspiration'] = 'Please enter comments';
    }else{
      delete errors['selfaspiration'];
    }
  }

 
useEffect((data) => {
  let total = 0;
  let count = 0;
 
}, [ratingg,average]);

  useEffect(() => {
    axios.get("http://demo.emeetify.com:5052/appraisel/users/getDetails")
      .then(response => {
        setDeatil(response.data.data)
      })
      .catch(e => { console.log("e", e) })
 
  },[])



return (
    <>
  <ToastContainer/>
 <Grid container style={{top:'0',background:'grey',height:'60px',textAlign:'center',position:'fixed',zIndex:'1000'}}>
  <Grid item xs={2}>
    <div style={{marginTop:'5px'}}>
      <img style={{}} src={logo}/>
    </div>
  </Grid>
  <Grid item xs={6}>
    <div style={{marginTop:'15px',fontSize:'24px',fontWeight:'bold',fontFamily:'Times New',marginLeft:'120px'}}>
    Performance Appraisal Form</div>
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

 <Container >
  <form onSubmit={handleSubmit}>
  <Card style={{marginTop:'80px',height:'630px',width:'90vw',
    boxShadow:'0px 12px 15px 10px #ccc'
   
}}>
  <Typography variant="h6" sx={{ textAlign: 'center', fontFamily: 'roboto' ,marginTop:'50px'}}>
          Employee Details</Typography>
            
            <div>
            <Grid container spacing={1}>
            <Grid item lg={6}>

              <TextField variant="outlined"
                label="Name of Employee" sx={{ width: '260px', marginLeft:'230px', marginTop: 7 }}
                name="name"
                onChange={handleInputChange}
                value={formData.name}
                onBlur={handleInputBlur}
              />
              {formErrors.name && !formData.name && <Grid sx={{ marginLeft: "240px", marginTop: "3px", color: "red" }}>{formErrors.name}</Grid>}
               {/* {
                errors.name && <Grid >{errors.name}</Grid>
              }  */}
            </Grid>
            <Grid item lg={6}>
              <TextField
                sx={{ width: '260px',marginLeft:'80px', marginTop: 7 }}
                select // tell TextField to render select
                label="Designation"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              >
                <MenuItem key={1} value="Associate Trainee">
                  Associate Trainee
                </MenuItem>
                <MenuItem key={2} value="Software Developer">
                  Software Developer
                </MenuItem>
                <MenuItem key={2} value="Software Tester">
                  Software Tester
                </MenuItem>

              </TextField>
              {formErrors.designation && !formData.designation && <Grid sx={{ marginLeft: "100px", marginTop: "3px", color: "red" }}>{formErrors.designation}</Grid>}

              {/* {
                formErrors.designation && !formData.designation &&<Grid sx={{ marginLeft: "90px", color: "red" }}>*Requried</Grid>
              } */}
            </Grid>
            <Grid item lg={6}>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
              </Stack>
    </LocalizationProvider> */}

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                <DesktopDatePicker 
                    label="Joining Date"
                    inputFormat="DD/MM/ YYYY"

                    renderInput={(params) => <TextField {...params} type="date" sx={{ width: '260px', marginLeft:'230px', marginTop: 5 }} />}
                    onChange={(e) => {
                      setJoining(e)
                    }
                    }
                />
                
                </Stack>
              </LocalizationProvider>
              {
                errors.joining && <Grid sx={{ marginLeft: "240px", marginTop: "3px", color: "red" }}>*Requried</Grid>
              }
            </Grid>
            <Grid item lg={6}>
              <TextField
                sx={{ width: '260px',marginLeft:'80px', marginTop: 7 }}
                select // tell TextField to render select
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              >
                <MenuItem key={1} value="Development">
                  Development
                </MenuItem>
                <MenuItem key={2} value="Testing">
                  Testing
                </MenuItem>
                <MenuItem key={2} value="Sales & Operations">
                  Sales & Operations
                </MenuItem>
                <MenuItem key={2} value="Business Operations">
                  Business Operations
                </MenuItem>
              </TextField>
              {formErrors.department
               && !formData.department && <Grid sx={{ marginLeft: "100px", marginTop: "3px", color: "red" }}>{formErrors.department}</Grid>}


              {/* {
                errors.department && <Grid sx={{ marginLeft: "90px", color: "red" }}>*Requried</Grid>
              } */}
            </Grid>
            <Grid item lg={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                <DesktopDatePicker
                    label="Apperaisal period"
                    inputFormat="YYYY"

                    renderInput={(params) => <TextField {...params} sx={{ width: '260px', marginLeft:'230px', marginTop: 5 }} />}
                    onChange={(e) => {
                      setYear(e)
                    }
                    }
                />
                </Stack>
              </LocalizationProvider>
            </Grid>
            <Grid item lg={6}>
              <TextField
                sx={{ width: '260px',marginLeft:'80px', marginTop: 5 }}
                select // tell TextField to render select
                label="Manager Name"
                name='managerName'
                value={formData.managerName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              >
                    <MenuItem value="Rajamanickam R">
                                  Rajamanickam R
                                </MenuItem>
                                <MenuItem value="Ramesh Babu E">
                                  Ramesh Babu E
                                </MenuItem>
                                <MenuItem value="Santhana Gopal S">
                                  Santhana Gopal S
                                </MenuItem>

              </TextField>
              {formErrors.managerName && !formData.managerName && <Grid sx={{   marginTop: "3px", marginLeft:"100px", color: "red" }}>{formErrors.managerName}</Grid>}

            </Grid>
            <Grid item lg={6}>
              <TextField
                sx={{ width: '260px',marginLeft:'230px', marginTop: 5 }}
                select // tell TextField to render select
                label="RoleId"
                onChange={(e) => { setRoleId(e.target.value) }}

              >
                <MenuItem key={1} value="1">
                1
                </MenuItem>
                <MenuItem key={2} disabled value="2">
                2
                </MenuItem>
              
              </TextField>
              {
                errors.roleId && <Grid sx={{ marginLeft: "250px", color: "red" }}>*Requried</Grid>
              }
            </Grid>
        
 </Grid>
            </div>
  </Card>
  <div>
    <ScoreSystem/>
  </div>

  <Card style={{height:'auto',width:'90vw',marginTop:'30px'}}>
  <Typography sx={{ textAlign: 'center', fontFamily: "roboto", fontSize: "35px"}}>
                KRA-Technical Aspects</Typography>
                <Grid>
                        <Stack style={{marginTop:'40px'}}> 
                            <Typography style={{marginLeft:'20px',fontWeight:'bold'}}>
                            KRA:1. Learning Skills, Self-Learning / Adopting to new technologies
                            </Typography>
                            <Typography style={{border:'1px solid blue',padding:'15px',borderRadius:'15px',marginLeft:'20px',marginRight:'20px',marginTop:'20px'}}>
                            Your ability to self-learn and apply new technologies, protocols, 
                            libraries, or even languages as needed.\,How good you are at learning 
                            technical things.\,Example: Pace of learning, comprehension of the concept
                            </Typography>
                        </Stack>  
                        <Stack direction='row' style={{marginTop:'40px'}}>
                            <Stack style={{marginLeft:'220px'}}>
                                <Stack direction='row'> 
                                <InputLabel>Self Rating</InputLabel>
                                <InputLabel style={{color:'red'}}>*</InputLabel>
                                </Stack>
                                
                                <Select name="selfRating1"
                                     value={formData.selfComment1}
                                     onChange={handleInputChange}
                                     onBlur={handleInputBlur}
                                >
                                    <MenuItem key={5} value="5">5</MenuItem>
                                    <MenuItem key={4} value="4">4</MenuItem>
                                    <MenuItem key={3} value="3">3</MenuItem>
                                    <MenuItem key={2} value="2">2</MenuItem>
                                    <MenuItem key={1} value="1">1</MenuItem>
                                </Select>

                            </Stack>
                            {formErrors.selfRating1 && !formData.selfRating1 && <Grid sx={{ marginLeft: "-90px", marginTop: "90px", color: "red" }}>{formErrors.selfRating1}</Grid>}

                            <Stack  style={{marginLeft:'300px'}}> 
                            <Stack direction='row'>
                                 <InputLabel>Justify Your Comment</InputLabel>
                                 <InputLabel style={{color:'red'}}>*</InputLabel>
                            </Stack>
                               <TextField name='selfComment1'

                                    value={formData.selfComment1}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}/>

                               </Stack>
                        </Stack>
               {formErrors.selfComment1 && !formData.selfComment1 && <Grid sx={{ marginLeft: "700px",marginTop:"20px",color: "red" }}>{formErrors.selfComment1}</Grid>}
   
                </Grid>
                <Grid>
                        <Stack style={{marginTop:'40px'}}> 
                            <Typography style={{marginLeft:'20px',fontWeight:'bold'}}>
                            KRA:2.Problem Solving Skills and Technological Understanding</Typography>
                            <Typography style={{border:'1px solid blue',padding:'15px',borderRadius:'15px',marginLeft:'20px',marginRight:'20px',marginTop:'20px'}}>
                            Your ability to complete the task in a timely manner and ability to plan
                             how to complete the assigned task, as well as your accuracy in presenting 
                             the results.\, Ability to see new “thing” in a wider perspective, for 
                             example how a small library fit into a large project or product, Finding
                              better ways to achieve your projects goals, Understanding the specifications 
                              for the “thing” you are about to implement
                            </Typography>
                        </Stack>
                        <Stack direction='row' style={{marginTop:'40px'}}>
                            <Stack style={{marginLeft:'220px'}}>
                                <Stack direction='row'> 
                                <InputLabel>Self Rating</InputLabel>
                                <InputLabel style={{color:'red'}}>*</InputLabel>
                                </Stack>
                                
                                <Select
                                    name='selfRating2'
                                    value={formData.selfRating2}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}                                >
                                    <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                                    <MenuItem key={5} value="5">5</MenuItem>
                                    <MenuItem key={4} value="4">4</MenuItem>
                                    <MenuItem key={3} value="3">3</MenuItem>
                                    <MenuItem key={2} value="2">2</MenuItem>
                                    <MenuItem key={1} value="1">1</MenuItem>
                                </Select>

                            </Stack>
                             {formErrors.selfRating2 && !formData.selfRating2 && <Grid sx={{ marginLeft: "-90px", marginTop: "90px", color: "red" }}>{formErrors.selfRating2}</Grid>}

                            <Stack  style={{marginLeft:'300px'}}> 
                            <Stack direction='row'>
                                 <InputLabel>Justify Your Comment</InputLabel>
                                 <InputLabel style={{color:'red'}}>*</InputLabel>
                            </Stack>
                               <TextField 
                                    name="selfComment2"
                                    value={formData.selfComment2}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                               ></TextField>

                               </Stack>

                        </Stack>
                              {formErrors.selfComment2 && !formData.selfComment2 && <Grid sx={{ marginLeft: "700px", marginTop: "20px", color: "red" }}>{formErrors.selfComment2}</Grid>}
                </Grid>
                <Grid>
                        <Stack style={{marginTop:'40px'}}> 
                            <Typography style={{marginLeft:'20px',fontWeight:'bold'}}>
                            KRA:3. Analytical Thinking</Typography>
                            <Typography style={{border:'1px solid blue',padding:'15px',borderRadius:'15px',marginLeft:'20px',marginRight:'20px',marginTop:'20px'}}>
                            How practical when you design the architecture or plan the solution of 
                            the “thing” prior to coding it, Proactive in ensuring that the
                             application does its job without wasting CPU, memory,
                                 or other resources. How good are you at troubleshooting?
                            </Typography>
                        </Stack>
                        <Stack direction='row' style={{marginTop:'40px'}}>
                            <Stack style={{marginLeft:'220px'}}>
                                <Stack direction='row'> 
                                <InputLabel>Self Rating</InputLabel>
                                <InputLabel style={{color:'red'}}>*</InputLabel>
                                </Stack>
                                
                                <Select
                             name='selfRating3'
                             value={formData.selfRating3}
                             onChange={handleInputChange}
                             onBlur={handleInputBlur}
                             
                                >
                                    <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                                    <MenuItem key={5} value="5">5</MenuItem>
                                    <MenuItem key={4} value="4">4</MenuItem>
                                    <MenuItem key={3} value="3">3</MenuItem>
                                    <MenuItem key={2} value="2">2</MenuItem>
                                    <MenuItem key={1} value="1">1</MenuItem>
                                </Select>
                           
                            </Stack>
                            {formErrors.selfRating3 && !formData.selfRating3 && <Grid sx={{ marginLeft: "-90px", marginTop: "90px", color: "red" }}>{formErrors.selfRating3}</Grid>}

                            <Stack  style={{marginLeft:'300px'}}> 
                            <Stack direction='row'>
                                 <InputLabel>Justify Your Comment</InputLabel>
                                 <InputLabel style={{color:'red'}}>*</InputLabel>
                            </Stack>
                               <TextField name='selfComment3'

                value={formData.selfComment3}
                onChange={handleInputChange}
                onBlur={handleInputBlur} ></TextField>
                             
                               </Stack>
                        </Stack>
                        {formErrors.selfComment3 && !formData.selfComment3 && <Grid sx={{ marginLeft: "700px", marginTop: "5px", color: "red" }}>{formErrors.selfComment3}</Grid>}
  
                </Grid>
                <Grid>
                        <Stack style={{marginTop:'40px'}}> 
                            <Typography style={{marginLeft:'20px',fontWeight:'bold'}}>
                            KRA:4. Coding / Testing Skills</Typography>
    
                         <Typography style={{border:'1px solid blue',padding:'15px',borderRadius:'15px',marginLeft:'20px',marginRight:'20px',marginTop:'20px'}} >
                            Have you considered the following items when coding?
                            <br />1. Code that can be tested
                            <br/>2. Code that is clean and reusable
                            <br />3. Code that is easy to maintain
                            <br />4. Code that can be read
                            <br />5. Code that is free of bugs
                            
                            <br />Have you considered the following while testing?
                            <br />1. Understand the business requirement / process
                            <br />2. Carry out appropriate planning (Preparing Test plans and Test cases)
                            <br />3. Actions taken to improve the software quality
                            <br />4. Tracking active defects
                            <br />5. Finding and implementing test automation where ever applicable to save time and effort
                            </Typography>
                                </Stack>
                            
                           
                            
                                <Stack direction='row' style={{marginTop:'40px'}}>
                            <Stack style={{marginLeft:'220px'}}>
                                <Stack direction='row'> 
                                <InputLabel>Self Rating</InputLabel>
                                <InputLabel style={{color:'red'}}>*</InputLabel>
                                </Stack>
                                
                                <Select
                             name='selfRating4'
                             value={formData.selfRating4}
                             onChange={handleInputChange}
                             onBlur={handleInputBlur}
                             
                                >
                                    <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                                    <MenuItem key={5} value="5">5</MenuItem>
                                    <MenuItem key={4} value="4">4</MenuItem>
                                    <MenuItem key={3} value="3">3</MenuItem>
                                    <MenuItem key={2} value="2">2</MenuItem>
                                    <MenuItem key={1} value="1">1</MenuItem>
                                </Select>
                           
                            </Stack>
                            {formErrors.selfRating4 && !formData.selfRating4 && <Grid sx={{ marginLeft: "-90px", marginTop: "90px", color: "red" }}>{formErrors.selfRating4}</Grid>}

                            <Stack  style={{marginLeft:'300px'}}> 
                            <Stack direction='row'>
                                 <InputLabel>Justify Your Comment</InputLabel>
                                 <InputLabel style={{color:'red'}}>*</InputLabel>
                            </Stack>
                               <TextField name='selfComment4'

                value={formData.selfComment4}
                onChange={handleInputChange}
                onBlur={handleInputBlur} ></TextField>
                             
                               </Stack>
                        </Stack>
                        {formErrors.selfComment4 && !formData.selfComment4 && <Grid sx={{  marginLeft: "700px", marginTop: "5px", color: "red" }}>{formErrors.selfComment4}</Grid>}

                    
                </Grid>
                <Grid>
                        <Stack style={{marginTop:'40px'}}> 
                            <Typography style={{marginLeft:'20px',fontWeight:'bold'}}>
                            KRA:5. Client handling and Technical Contribution Skills</Typography>
                            <Typography style={{border:'1px solid blue',padding:'15px',borderRadius:'15px',marginLeft:'20px',marginRight:'20px',marginTop:'20px'}}>
                            1. Your ability to handle client meetings and requirement changes during client calls.\,
                            2. Ability to provide valuable inputs during scoping and solution architecting discussions for Project solutions
                            </Typography>
                        </Stack>
                        <Stack direction='row' style={{marginTop:'40px'}}>
                            <Stack style={{marginLeft:'220px'}}>
                                <Stack direction='row'> 
                                <InputLabel>Self Rating</InputLabel>
                                <InputLabel style={{color:'red'}}>*</InputLabel>
                                </Stack>
                                
                                <Select
                             name='selfRating5'
                             value={formData.selfRating5}
                             onChange={handleInputChange}
                             onBlur={handleInputBlur}
                             
                                >
                                    <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                                    <MenuItem key={5} value="5">5</MenuItem>
                                    <MenuItem key={4} value="4">4</MenuItem>
                                    <MenuItem key={3} value="3">3</MenuItem>
                                    <MenuItem key={2} value="2">2</MenuItem>
                                    <MenuItem key={1} value="1">1</MenuItem>
                                </Select>
                           
                            </Stack>
                            {formErrors.selfRating5 && !formData.selfRating5 && <Grid sx={{ marginLeft: "-90px", marginTop: "90px", color: "red" }}>{formErrors.selfRating5}</Grid>}

                            <Stack  style={{marginLeft:'300px'}}> 
                            <Stack direction='row'>
                                 <InputLabel>Justify Your Comment</InputLabel>
                                 <InputLabel style={{color:'red'}}>*</InputLabel>
                            </Stack>
                               <TextField name='selfComment5'

                value={formData.selfComment5}
                onChange={handleInputChange}
                onBlur={handleInputBlur} ></TextField>
                             
                               </Stack>
                        </Stack>
                        {formErrors.selfComment5 && !formData.selfComment5 && <Grid sx={{ marginLeft: "700px", marginTop: "5px", color: "red" }}>{formErrors.selfComment5}</Grid>}

                    
                </Grid>
                <Grid>
                        <Stack style={{marginTop:'40px'}}> 
                            <Typography style={{marginLeft:'20px',fontWeight:'bold'}}>
                            KRA:6. Communications skills</Typography>
                            <Typography style={{border:'1px solid blue',padding:'15px',borderRadius:'15px',marginLeft:'20px',marginRight:'20px',marginTop:'20px'}}>
                            Clarity in your reporting and communication, ability to clearly 
                            articulate and comprehend. Effective listening abilities, Oral 
                            and written communication skills that are effective
                            </Typography>
                        </Stack>
                        <Stack direction='row' style={{marginTop:'40px'}}>
                            <Stack style={{marginLeft:'220px'}}>
                                <Stack direction='row'> 
                                <InputLabel>Self Rating</InputLabel>
                                <InputLabel style={{color:'red'}}>*</InputLabel>
                                </Stack>
                                
                                <Select
                             name='selfRating6'
                             value={formData.selfRating6}
                             onChange={handleInputChange}
                             onBlur={handleInputBlur}
                             
                                >
                                    <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                                    <MenuItem key={5} value="5">5</MenuItem>
                                    <MenuItem key={4} value="4">4</MenuItem>
                                    <MenuItem key={3} value="3">3</MenuItem>
                                    <MenuItem key={2} value="2">2</MenuItem>
                                    <MenuItem key={1} value="1">1</MenuItem>
                                </Select>
                           
                            </Stack>
                            {formErrors.selfRating6 && !formData.selfRating6 && <Grid sx={{ marginLeft: "-90px", marginTop: "90px", color: "red" }}>{formErrors.selfRating6}</Grid>}

                            <Stack  style={{marginLeft:'300px'}}> 
                            <Stack direction='row'>
                                 <InputLabel>Justify Your Comment</InputLabel>
                                 <InputLabel style={{color:'red'}}>*</InputLabel>
                            </Stack>
                               <TextField name='selfComment6'

                value={formData.selfComment6}
                onChange={handleInputChange}
                onBlur={handleInputBlur} ></TextField>
                             
                               </Stack>
                        </Stack>
                        {formErrors.selfComment6 && !formData.selfComment6 && <Grid sx={{  marginLeft: "700px", marginTop: "5px", color: "red" }}>{formErrors.selfComment6}</Grid>}

                    
                </Grid>
                <Grid>
                        <Stack style={{marginTop:'40px'}}> 
                            <Typography style={{marginLeft:'20px',fontWeight:'bold'}}>
                            KRA:7. Punctuality in office</Typography>
                            <Typography style={{border:'1px solid blue',padding:'15px',borderRadius:'15px',marginLeft:'20px',marginRight:'20px',marginTop:'20px'}}>
                            Being punctual can help you follow your own schedule by allowing
                             you to complete all of your work during work hours;
                              How would you rate yourself bein punctual at work?
                            </Typography>
                        </Stack>
                        <Stack direction='row' style={{marginTop:'40px'}}>
                            <Stack style={{marginLeft:'220px'}}>
                                <Stack direction='row'> 
                                <InputLabel>Self Rating</InputLabel>
                                <InputLabel style={{color:'red'}}>*</InputLabel>
                                </Stack>
                                
                                <Select
                             name='selfRating7'
                             value={formData.selfRating7}
                             onChange={handleInputChange}
                             onBlur={handleInputBlur}
                             
                                >
                                    <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                                    <MenuItem key={5} value="5">5</MenuItem>
                                    <MenuItem key={4} value="4">4</MenuItem>
                                    <MenuItem key={3} value="3">3</MenuItem>
                                    <MenuItem key={2} value="2">2</MenuItem>
                                    <MenuItem key={1} value="1">1</MenuItem>
                                </Select>
                           
                            </Stack>
                            {formErrors.selfRating7 && !formData.selfRating7 && <Grid sx={{ marginLeft: "-90px", marginTop: "90px", color: "red" }}>{formErrors.selfRating7}</Grid>}

                            <Stack  style={{marginLeft:'300px'}}> 
                            <Stack direction='row'>
                                 <InputLabel>Justify Your Comment</InputLabel>
                                 <InputLabel style={{color:'red'}}>*</InputLabel>
                            </Stack>
                               <TextField name='selfComment7'

                value={formData.selfComment7}
                onChange={handleInputChange}
                onBlur={handleInputBlur} ></TextField>
                             
                               </Stack>
                        </Stack>
                        {formErrors.selfComment7 && !formData.selfComment7 && <Grid sx={{  marginLeft: "700px", marginTop: "-20px", color: "red" }}>{formErrors.selfComment7}</Grid>}

                    
                </Grid>

                <Grid>
                        <Stack style={{marginTop:'40px'}}> 
                            <Typography style={{marginLeft:'20px',fontWeight:'bold'}}>
                            KRA:8. Following office attire</Typography>
                            <Typography style={{border:'1px solid blue',padding:'15px',borderRadius:'15px',marginLeft:'20px',marginRight:'20px',marginTop:'20px'}}>
                            The major reason why dressing in proper business attire is important for every business 
                            professional is because it presents a visual image and sends a message that the 
                            employees are professional. How good are in following office attire?
                            </Typography>
                        </Stack>
                        <Stack direction='row' style={{marginTop:'40px'}}>
                            <Stack style={{marginLeft:'220px'}}>
                                <Stack direction='row'> 
                                <InputLabel>Self Rating</InputLabel>
                                <InputLabel style={{color:'red'}}>*</InputLabel>
                                </Stack>
                                
                                <Select
                             name='selfRating8'
                             value={formData.selfRating8}
                             onChange={handleInputChange}
                             onBlur={handleInputBlur}
                             
                                >
                                    <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                                    <MenuItem key={5} value="5">5</MenuItem>
                                    <MenuItem key={4} value="4">4</MenuItem>
                                    <MenuItem key={3} value="3">3</MenuItem>
                                    <MenuItem key={2} value="2">2</MenuItem>
                                    <MenuItem key={1} value="1">1</MenuItem>
                                </Select>
                           
                            </Stack>
                            {formErrors.selfRating8 && !formData.selfRating8 && <Grid sx={{ marginLeft: "-90px", marginTop: "90px", color: "red" }}>{formErrors.selfRating8}</Grid>}

                            <Stack  style={{marginLeft:'300px'}}> 
                            <Stack direction='row'>
                                 <InputLabel>Justify Your Comment</InputLabel>
                                 <InputLabel style={{color:'red'}}>*</InputLabel>
                            </Stack>
                               <TextField name='selfComment8'

                value={formData.selfComment8}
                onChange={handleInputChange}
                onBlur={handleInputBlur} ></TextField>
                             
                               </Stack>
                        </Stack>
                        {formErrors.selfComment8 && !formData.selfComment8 && <Grid sx={{  marginLeft: "700px", marginTop: "5px", color: "red" }}>{formErrors.selfComment8}</Grid>}

                    
                </Grid>
                <Grid>
                        <Stack style={{marginTop:'40px'}}> 
                            <Typography style={{marginLeft:'20px',fontWeight:'bold'}}>
                            KRA:9.Team Work</Typography>
                            <Typography style={{border:'1px solid blue',padding:'15px',borderRadius:'15px',marginLeft:'20px',marginRight:'20px',marginTop:'20px'}}>
                            Assisting colleagues with work-related 
                            activities Good rapport within and outside of the team 
                            helps promote positive thinking.
                            </Typography>
                        </Stack>
                        <Stack direction='row' style={{marginTop:'40px'}}>
                            <Stack style={{marginLeft:'220px'}}>
                                <Stack direction='row'> 
                                <InputLabel>Self Rating</InputLabel>
                                <InputLabel style={{color:'red'}}>*</InputLabel>
                                </Stack>
                                
                                <Select
                             name='selfRating9'
                             value={formData.selfRating9}
                             onChange={handleInputChange}
                             onBlur={handleInputBlur}
                             
                                >
                                    <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                                    <MenuItem key={5} value="5">5</MenuItem>
                                    <MenuItem key={4} value="4">4</MenuItem>
                                    <MenuItem key={3} value="3">3</MenuItem>
                                    <MenuItem key={2} value="2">2</MenuItem>
                                    <MenuItem key={1} value="1">1</MenuItem>
                                </Select>
                           
                            </Stack>
                            {formErrors.selfRating9 && !formData.selfRating9 && <Grid sx={{ marginLeft: "-90px", marginTop: "90px", color: "red" }}>{formErrors.selfRating9}</Grid>}

                            <Stack  style={{marginLeft:'300px'}}> 
                            <Stack direction='row'>
                                 <InputLabel>Justify Your Comment</InputLabel>
                                 <InputLabel style={{color:'red'}}>*</InputLabel>
                            </Stack>
                               <TextField name='selfComment9'

                value={formData.selfComment9}
                onChange={handleInputChange}
                onBlur={handleInputBlur} ></TextField>
                             
                               </Stack>
                        </Stack>
                        {formErrors.selfComment9 && !formData.selfComment9 && <Grid sx={{  marginLeft: "700px", marginTop: "5px", color: "red" }}>{formErrors.selfComment9}</Grid>}

                    
                </Grid>

                


                <Grid>
                        <Stack style={{marginTop:'40px'}}> 
                            <Typography style={{marginLeft:'20px',fontWeight:'bold'}}>
                            KRA:10.Initiative Contribution to the Organization</Typography>
                            <Typography style={{border:'1px solid blue',padding:'15px',borderRadius:'15px',marginLeft:'20px',marginRight:'20px',marginTop:'20px'}}>
                            Being open to learning new skills, Participation in company-sponsored activities
                            </Typography>
                        </Stack>
                        <Stack direction='row' style={{marginTop:'40px'}}>
                            <Stack style={{marginLeft:'220px'}}>
                                <Stack direction='row'> 
                                <InputLabel>Self Rating</InputLabel>
                                <InputLabel style={{color:'red'}}>*</InputLabel>
                                </Stack>
                                
                                <Select
                             name='selfRating10'
                             value={formData.selfRating10}
                             onChange={handleInputChange}
                             onBlur={handleInputBlur}
                             
                                >
                                    <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                                    <MenuItem key={5} value="5">5</MenuItem>
                                    <MenuItem key={4} value="4">4</MenuItem>
                                    <MenuItem key={3} value="3">3</MenuItem>
                                    <MenuItem key={2} value="2">2</MenuItem>
                                    <MenuItem key={1} value="1">1</MenuItem>
                                </Select>
                           
                            </Stack>
                            {formErrors.selfRating10 && !formData.selfRating10 && <Grid sx={{ marginLeft: "-90px", marginTop: "90px", color: "red" }}>{formErrors.selfRating10}</Grid>}

                            <Stack  style={{marginLeft:'300px'}}> 
                            <Stack direction='row'>
                                 <InputLabel>Justify Your Comment</InputLabel>
                                 <InputLabel style={{color:'red'}}>*</InputLabel>
                            </Stack>
                               <TextField name='selfComment10'

                value={formData.selfComment10}
                onChange={handleInputChange}
                onBlur={handleInputBlur} ></TextField>
                             
                               </Stack>
                        </Stack>
                        {formErrors.selfComment10 && !formData.selfComment10 && <Grid sx={{  marginLeft: "700px", marginTop: "10px", color: "red" }}>{formErrors.selfComment10}</Grid>}

                      
                </Grid>

                <Grid>
                        <Stack style={{marginTop:'40px'}}> 
                            <Typography style={{marginLeft:'20px',fontWeight:'bold'}}>
                            KRA:11.Working towards Organizations interest</Typography>
                            <Typography style={{border:'1px solid blue',padding:'15px',borderRadius:'15px',marginLeft:'20px',marginRight:'20px',marginTop:'20px'}}>
                            Working within the SLA
                             (Service Level Agreement) and GRC (Governance, Risk Management, 
                             and Compliance) policies of the company                   
                            </Typography>
                        </Stack>
                        <Stack direction='row' style={{marginTop:'40px'}}>
                            <Stack style={{marginLeft:'220px'}}>
                                <Stack direction='row'> 
                                <InputLabel>Self Rating</InputLabel>
                                <InputLabel style={{color:'red'}}>*</InputLabel>
                                </Stack>
                                
                                <Select
                             name='selfRating11'
                             value={formData.selfRating11}
                             onChange={handleInputChange}
                             onBlur={handleInputBlur}
                             
                                >
                                    <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                                    <MenuItem key={5} value="5">5</MenuItem>
                                    <MenuItem key={4} value="4">4</MenuItem>
                                    <MenuItem key={3} value="3">3</MenuItem>
                                    <MenuItem key={2} value="2">2</MenuItem>
                                    <MenuItem key={1} value="1">1</MenuItem>
                                </Select>
                           
                            </Stack>
                            {formErrors.selfRating11 && !formData.selfRating11 && <Grid sx={{ marginLeft: "-90px", marginTop: "90px", color: "red" }}>{formErrors.selfRating11}</Grid>}

                            <Stack  style={{marginLeft:'300px'}}> 
                            <Stack direction='row'>
                                 <InputLabel>Justify Your Comment</InputLabel>
                                 <InputLabel style={{color:'red'}}>*</InputLabel>
                            </Stack>
                               <TextField name='selfComment11'

                value={formData.selfComment11}
                onChange={handleInputChange}
                onBlur={handleInputBlur} ></TextField>
                             
                               </Stack>
                        </Stack>
                        {formErrors.selfComment11 && !formData.selfComment11 && <Grid sx={{  marginLeft: "700px", marginTop: "5px", color: "red" }}>{formErrors.selfComment11}</Grid>}

                </Grid>
<Divider  sx={{ width: '100%' ,marginTop:'20px'}} />
              <Grid container spacing={1}>
                <Grid item sx={{ marginTop: "50px",marginLeft:"125px" ,marginTop:'20px'}}>
                  <Typography sx={{ fontSize: '20px' }}>Employee Average Rating <span style={{ color: 'red' }}>*</span></Typography>
                 <Card style={{height:'30px',width:'60px',marginTop:'20px',marginLeft:'90px',textAlign:'center'}}>
                  {average}
                 </Card>
        
                </Grid>
            
                <Grid item sx={{ marginTop: "20px", marginLeft: "280px" }}>
                  <Typography sx={{ fontSize: '20px' }}>Self Aspirations  <span style={{ color: 'red' }}>*</span></Typography>
                  <TextareaAutosize sx={{ marginTop: '10px' }} minRows={5} 
                  name="selfaspiration"
                  value={formData.selfaspiration}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  ></TextareaAutosize>

                </Grid>
                
                {formErrors.selfaspiration && !formData.selfaspiration && <Grid sx={{ marginLeft: "680px", marginTop: "0px", color: "red" }}>{formErrors.selfaspiration}</Grid>}
                   </Grid>
             
           
              <Divider  sx={{ width: '100%', marginTop: "15px" }} />
              <div style={{marginLeft:'450px',marginBottom:'20px'}}>
              <Button type="submit" variant="contained"  sx={{
                width: "230px", backgroundColor: "green",
                 marginTop: "40px"
              }} > Submit</Button>
             
              </div>
             
  </Card>
  
  </form>
 
 </Container>



      
      














  


    </>);
}