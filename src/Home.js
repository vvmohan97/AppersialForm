import { Avatar, Box, Button, Card, Container, Divider, FormControl, FormGroup, FormLabel, Grid, Input, InputLabel, Item, Menu, MenuItem, Popover, Select, TextareaAutosize, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ScoreSystem } from "./components/ScoreSystem";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import PopupState, { bindTrigger, bindPopover, bindMenu } from 'material-ui-popup-state';
import logo from './skein_logo1.png';
import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";


export function Home() {
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

  const [average,setAverage]=useState(0)

  const [selfRating , setselfRating] = useState([
    {t_id:1, id:1 ,name: 'self_rating' , value:0},
    {t_id:2, id:2 ,name: 'self_rating' , value:0},
    {t_id:3, id:3 ,name: 'self_rating' , value:0},
    {t_id:4, id:4 ,name: 'self_rating' , value:0},
    {t_id:5, id:5 ,name: 'self_rating' , value:0},
    {t_id:6, id:6 ,name: 'self_rating' , value:0},
    {t_id:7, id:7 ,name: 'self_rating' , value:0},
    {t_id:8, id:8 ,name: 'self_rating' , value:0},
    {t_id:9, id:9 ,name: 'self_rating' , value:0},
    {t_id:10, id:10 ,name: 'self_rating' , value:0},
    {t_id:11, id:11 ,name: 'self_rating' , value:0},
  ]);

  const [comment , setComment] = useState([
    {t_id:1 ,id:1 ,name: 'self_comment' , value:'' , validate:validateComment},
    {t_id:2, id:2 ,name: 'self_comment' , value:'',validate:validateComment},
    {t_id:3 ,id:3 ,name: 'self_comment' , value:'',validate:validateComment},
    {t_id:4 ,id:4 ,name: 'self_comment' , value:'',validate:validateComment},
    {t_id:5 ,id:5 ,name: 'self_comment' , value:'',validate:validateComment},
    {t_id:6, id:6 ,name: 'self_comment' , value:'',validate:validateComment},
    {t_id:7 ,id:7 ,name: 'self_comment' , value:'',validate:validateComment},
    {t_id:8, id:8 ,name: 'self_comment' , value:'',validate:validateComment},
    {t_id:9, id:9 ,name: 'self_comment' , value:'',validate:validateComment},
    {t_id:10 ,id:10 ,name: 'self_comment' , value:'',validate:validateComment},
    {t_id:11, id:11 ,name: 'self_comment' , value:'',validate:validateComment},
  ]);

  const handleselfRating = (id,value) =>{
    setselfRating(selfRating.map( (data)=> {
        if(data.id === id){
          return{...data , value}
        }
        return data;
    } ))
  }

  const handleComment = (id,value) =>{
    setComment(comment.map( (data)=> {
        if(data.id === id){
          const error = data.validate(value);
          return{...data , value,error}
        }
        return data;
    } ))
  }

  function validateComment(name){


    if(!name){
      return "comment is required"
    }
    return "";
  }
  const handleLogout =      (e) => {
    e.preventDefault();
    setLogout(e.target.value)
    localStorage.removeItem("email")
    localStorage.removeItem("photo")
    localStorage.removeItem("name")

    navigates("/")
    window.location.reload()
    console.log(logout);
 }
const localEmail=localStorage.getItem('email')
const payload ={
  username:name,
  manager_name :manager,
  role_id:roleId,
  designation:designation,
  department:'department',
  joining_date:'joining',
  review_period:'2023'
}

  // useEffect(() => {

  //   if (!localStorage.getItem("email"))
  //     navigates('/')
  // }, [])

  // const validate={
  //       "name":name,
  //       "designation":designation,
  //       'joining': joining,
  //       'department':department,
  //       'manager':manager
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment,"comment");
    console.log(selfRating,"selfRating");
    const errors = {};
    console.log('justifyrating',justifyrating)
    if (!name) {
      errors.name = "*Requried"

    }
    if (!designation) {
      errors.designation = "*Requried";
    }
    
    if (!joining) {
      errors.joining = "*Requried";
    }
    if (!department) {
      errors.department = "*Requried"
    }
    if (!manager) {
      errors.manager = '*Requried'
    }
    if (!justifyrating) {
      errors.justifyrating = "*Requried"
    }
    if (!selfrating) {
      errors.selfrating = "*Requried"
    }
    if (!selfaspiration) {
      errors.selfaspiration = "*Requried"
    }
    if (!teamlead) {
      errors.teamlead = "*Requried"
    }
    if(!roleId){
      errors.roleId ="*Requried"
    }

    setErrors(errors);


     axios.put('http://demo.emeetify.com:5052/appraisel/users/FormDetails?email='+ localEmail,payload)
     .then((response)=>{
      console.log("putApi working")
      console.log(response.data)
     }).catch("error")

     axios.post(`http://demo.emeetify.com:5052/appraisel/users/AddCommentemail=${localEmail}&&type=employee`
     ,{selfRating , comment}
     ).then((response)=>{
      console.log(response.data)
     }).catch("error")
     
  }

console.log(selfRating,"sss");

console.log(ratingg,"rr");
 
useEffect((data) => {
  let total = 0;
  let count = 0;
  console.log(selfRating.length,"self")
  for(var i = 0; i<selfRating.length;i++){
    total = parseInt(total) + parseInt(selfRating[i].value);
    count++;
    console.log(total === NaN ? 0:  (total),"total")
    // console.log(typeof(parseFloat(selfRating[i].value)),"type");
    // console.log(typeof(total),"type");
  }
  let avg = parseInt(total) / selfRating.length;
  console.log(avg,"avg")
  setAverage(avg.toFixed(2))
 
}, [ratingg,average]);

console.log(average,"vvv");
  useEffect(() => {
    console.log("working");
    axios.get("http://demo.emeetify.com:5052/appraisel/users/getDetails")
      .then(response => {
        setDeatil(response.data.data)
      })
      .catch(e => { console.log("e", e) })
 
  },[])



return (
    <>
  <ToastContainer/>
 
 {/* <Grid container>
  <Grid item spacing={2} sx={{backgroundColor:"black" }}>
<h1>skein</h1>

  </Grid>
  <Grid item spacing={2} sx={{backgroundColor:"black"}}>

  </Grid>
  <Grid item spacing={2} sx={{backgroundColor:"black" }}>

  </Grid>
 </Grid> */}

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

 <Container >
  <form onSubmit={handleSubmit}>
  <Card style={{marginTop:'80px',height:'550px',width:'90vw',
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
                onChange={(e) => { setName(e.target.value) }}
              ></TextField>
              {
                errors.name && <Grid sx={{ marginLeft: "240px", marginTop: "3px", color: "red" }}>{errors.name}</Grid>
              }
            </Grid>
            <Grid item lg={6}>
              <TextField
                sx={{ width: '260px',marginLeft:'80px', marginTop: 7 }}
                select // tell TextField to render select
                label="Designation"
                onChange={(e) => setDesignation(e.target.value)}
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
              {
                errors.designation && <Grid sx={{ marginLeft: "70px", color: "red" }}>*Requried</Grid>
              }
            </Grid>
            <Grid item lg={6}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}>
                <Stack>
                  <DatePicker
                    label="Joining Date"
                    inputFormat="MM/DD/YYYY"

                    renderInput={(params) =>
                      <TextField {...params} sx={{ marginTop: 7, marginLeft:'230px', width: '260px' }} />}
                    onChange={(e) => {

                      console.log(e)
                    }}
                  />
                </Stack>
              </LocalizationProvider>
              {
                errors.manager && <Grid sx={{ marginLeft: "240px", marginTop: "3px", color: "red" }}>*Requried</Grid>
              }
            </Grid>
            <Grid item lg={6}>
              <TextField
                sx={{ width: '260px',marginLeft:'80px', marginTop: 7 }}
                select // tell TextField to render select
                label="Department"
                onChange={(e) => { setDepartment(e.target.value) }}
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
              {
                errors.department && <Grid sx={{ marginLeft: "70px", color: "red" }}>*Requried</Grid>
              }
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
                onChange={(e) => { setManager(e.target.value) }}
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
              {
                errors.manager && <Grid sx={{ marginLeft: "70px", color: "red" }}>*Requried</Grid>
              }
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
                <MenuItem key={2} value="2">
                2
                </MenuItem>
              
              </TextField>
              {
                errors.manager && <Grid sx={{ marginLeft: "70px", color: "red" }}>*Requried</Grid>
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
                {
                deatil !== undefined && deatil.map((d) => {
                  return (
                    <>
                      <Box sx={{ marginTop: "10px" }}

                        width={"70vw"} >

                        <Typography>
                          {
                            <Typography sx={{ fontFamily: "roboto", fontSize: '18px', marginTop: '15px', marginLeft: '30px',fontWeight:'bold'}} key={d.id}>
                              KRA:{d.kra}</Typography>
                          }
                        </Typography>
                        <Box sx={{ marginLeft: '40px', marginTop: '20px', padding: '30px', outline: "inset", outlineColor: "blue" }}>
                          <Typography key={d.id}>{d.measures}
                          </Typography>
                        </Box>

                        <Box sx={{ marginTop: "40px", marginLeft: '40px' }}
                        >
                          <Grid container spacing={1}>
                            <Grid item sx={{marginLeft:'80px'}}>
                            {selfRating.map( (data) =>{
                              return(
                          
                                <div key={data.id }>
                                  {d.t_id === data.id ? 
                                  <>
                                    <Typography sx={{ fontSize: '16px' }}>
                              Self Rating<span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <Select sx={{ backgroundColor: 'white', marginTop: "10px", width: "150px" }}

                              onChange={(e) => {
                                // setValue(e.target.value)
                                // setSelfrating(e.target.value)
                                handleselfRating(data.id , e.target.value)
                                console.log(typeof(parseInt(e.target.value)),"hhh")
                                setRating([data.id],parseInt(e.target.value))

                                // selfRating[data.id] =setRating(parseInt(e.target.value));
                              }}
                              value={data.value}

                            >
                              <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                              <MenuItem key={5} value="5">5</MenuItem>
                              <MenuItem key={4} value="4">4</MenuItem>
                              <MenuItem key={3} value="3">3</MenuItem>
                              <MenuItem key={2} value="2">2</MenuItem>
                              <MenuItem key={1} value="1">1</MenuItem>
                            </Select>
                                  </>
                                : ""}
                                
                              </div>
                              )
                               
                              })}
                             
                            </Grid>
                            <Grid item sx={{ marginLeft: '290px', marginTop: '0px' }}>
                              {
                                comment.map((data) =>{
                                  return(
                                    <div>
                                        {d.t_id === data.id ? 
                                        
                                        <>
                                          <Typography sx={{ fontSize: '16px' }}>Justify your Rating<label style={{ color: 'red' }}>*</label></Typography>
                              <TextareaAutosize sx={{ marginTop: '10px', }} minRows={6} cols={30}
                                onChange={(e) => handleComment(data.id , e.target.value)}></TextareaAutosize>
                                {data.error && <p>{data.error}</p>}
                                        </>
                                        : ""}
                                    </div>
                                  )
                                })
                              }
                              
                            </Grid>
                           

                          </Grid>
                        </Box>
                      </Box>
                  </>
                  );

                }
                
                
                )
              }
               

<Divider  sx={{ width: '100%' ,marginTop:'20px'}} />
              <Grid container spacing={1}>
                <Grid item sx={{ marginTop: "50px",marginLeft:"105px" ,marginTop:'20px'}}>
                  <Typography sx={{ fontSize: '20px' }}>Employee Average Rating <span style={{ color: 'red' }}>*</span></Typography>
                 <Card style={{height:'30px',width:'60px',marginTop:'20px',marginLeft:'50px',textAlign:'center'}}>
                  {average}
                 </Card>
        
                </Grid>
            
                <Grid item sx={{ marginTop: "20px", marginLeft: "210px" }}>
                  <Typography sx={{ fontSize: '20px' }}>Self Aspirations  <span style={{ color: 'red' }}>*</span></Typography>
                  <TextareaAutosize sx={{ marginTop: '10px' }} minRows={5} onChange={(e) => { setTeamlead(e.target.value) }}></TextareaAutosize>

                </Grid>
                {
                  errors.teamlead && <Grid sx={{ marginTop: "150px", marginLeft: "-150px", color: "red" }}>*Requried</Grid>
                }
                   </Grid>
             
           
              <Divider  sx={{ width: '100%', marginTop: "15px" }} />
              <div style={{marginLeft:'450px',marginBottom:'20px'}}>
              <Button type="submit" variant="contained" onClick={handleSubmit} sx={{
                width: "230px", backgroundColor: "green",
                 marginTop: "40px"
              }} > Submit</Button>
              </div>
             
  </Card>
  
  </form>
 
 </Container>



      
      














  


    </>);
}