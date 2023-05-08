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
import { async } from "@firebase/util";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Loader } from "./Loader";

export function ManagerNew() {
  const [selectedDate, handleDateChange] = useState(null);
  const [year, setYear] = useState()
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("")
  const [joining, setJoining] = useState("")
  const [department, setDepartment] = useState("")
  const [manager, setManager] = useState("")
  const [selfrating, setSelfrating] = useState([{}]);
  const [justifyrating, setJustifyrating] = useState("")
  const [selfaspiration, setSelfaspiration] = useState("")
  const [teamlead, setTeamlead] = useState("")
  const [errors, setErrors] = useState("")
const [popmsg,setPopmsg]=useState(false)
  const [value, setValue] = useState("")
  const [logout, setLogout] = useState(true)
  const navigates = useNavigate();
  const [average, setAverage] = useState(0);
  const [ratingg, setRating] = useState(0)

  const [fetchedData, setFetchedData] = useState()
  const [list, setList] = useState()
  const [feedback, setFeedback] = useState();
  const [post, setPost] = useState(null)
  //validation Starts here
  const [formData,setFormData]=useState({
   
  managerRating1:0,
  managerRating2:0,
  managerRating3:0,
  managerRating4:0,
  managerRating5:0,
  managerRating6:0,
  managerRating7:0,
  managerRating8:0,
  managerRating9:0,
  managerRating10:0,
managerRating11:0,
    managerFedback:"",
  
  })
  // manager comment starts here
  const [managerRating1, setManagerRating1] = useState(0);
  const [managerRating2, setManagerRating2] = useState(0);
  const [managerRating3, setManagerRating3] = useState(0);
  const [managerRating4, setManagerRating4] = useState(0);
  const [managerRating5, setManagerRating5] = useState(0);
  const [managerRating6, setManagerRating6] = useState(0);
  const [managerRating7, setManagerRating7] = useState(0);
  const [managerRating8, setManagerRating8] = useState(0);
  const [managerRating9, setManagerRating9] = useState(0);
  const [managerRating10, setManagerRating10] = useState(0);
  const [managerRating11, setManagerRating11] = useState(0);


  const [managerComment1, setManagerComment1] = useState();
  const [managerComment2, setManagerComment2] = useState();
  const [managerComment3, setManagerComment3] = useState();
  const [managerComment4, setManagerComment4] = useState();
  const [managerComment5, setManagerComment5] = useState();
  const [managerComment6, setManagerComment6] = useState();
  const [managerComment7, setManagerComment7] = useState();
  const [managerComment8, setManagerComment8] = useState();
  const [managerComment9, setManagerComment9] = useState();
  const [managerComment10, setManagerComment10] = useState();
  const [managerComment11, setManagerComment11] = useState();

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

    

       if(name === 'managerRating1' && !formData.managerRating1){
      formIsValid = false;
      errors['managerRating1'] = 'Please select Rating';
    }else{
      delete errors['managerRating1'];
    }
    if(name === 'managerComment1' && !formData.managerComment1){
      formIsValid = false;
      errors['managerComment1'] = 'Please enter comments';
    }else{
      delete errors['managerComment1'];
    }
    if(name === 'managerRating2' && !formData.managerRating2){
      formIsValid = false;
      errors['managerRating2'] = 'Please select Rating';
    }else{
      delete errors['managerRating2'];
    }
    if(name === 'managerComment2' && !formData.managerComment2){
      formIsValid = false;
      errors['managerComment2'] = 'Please enter comments';
    }else{
      delete errors['managerComment2'];
    }
    if(name === 'managerRating3' && !formData.managerRating3){
      formIsValid = false;
      errors['managerRating3'] = 'Please select Rating';
    }else{
      delete errors['managerRating3'];
    }
    if(name === 'managerComment3' && !formData.managerComment3){
      formIsValid = false;
      errors['managerComment3'] = 'Please enter comments';
    }else{
      delete errors['managerComment3'];
    }
    if(name === 'managerRating4' && !formData.managerRating4){
      formIsValid = false;
      errors['managerRating4'] = 'Please select Rating';
    }else{
      delete errors['managerRating4'];
    }
    if(name === 'managerComment4' && !formData.managerComment4){
      formIsValid = false;
      errors['managerComment4'] = 'Please enter comments';
    }else{
      delete errors['managerComment4'];
    }
    if(name === 'managerRating5' && !formData.managerRating5){
      formIsValid = false;
      errors['managerRating5'] = 'Please select Rating';
    }else{
      delete errors['managerRating5'];
    }
    if(name === 'managerComment5' && !formData.managerComment5){
      formIsValid = false;
      errors['managerComment5'] = 'Please enter comments';
    }else{
      delete errors['managerComment5'];
    }
    if(name === 'managerRating6' && !formData.managerRating6){
      formIsValid = false;
      errors['managerRating6'] = 'Please select Rating';
    }else{
      delete errors['managerRating6'];
    }
    if(name === 'managerComment6' && !formData.managerRating6){
      formIsValid = false;
      errors['managerComment6'] = 'Please enter comments';
    }else{
      delete errors['managerComment6'];
    }
    if(name === 'managerRating7' && !formData.managerRating7){
      formIsValid = false;
      errors['managerRating7'] = 'Please select Rating';
    }else{
      delete errors['managerRating7'];
    }
    if(name === 'managerComment7' && !formData.managerComment7){
      formIsValid = false;
      errors['managerComment7'] = 'Please enter comments';
    }else{
      delete errors['managerComment7'];
    }
    if(name === 'managerRating8' && !formData.managerRating8){
      formIsValid = false;
      errors['managerRating8'] = 'Please select Rating';
    }else{
      delete errors['managerRating8'];
    }
    if(name === 'managerComment8' && !formData.managerRating8){
      formIsValid = false;
      errors['managerComment8'] = 'Please enter comments';
    }else{
      delete errors['managerComment8'];
    }
    if(name === 'managerRating9' && !formData.managerRating9){
      formIsValid = false;
      errors['managerRating9'] = 'Please select Rating';
    }else{
      delete errors['managerRating9'];
    }
    if(name === 'managerComment9' && !formData.managerComment9){
      formIsValid = false;
      errors['managerComment9'] = 'Please enter comments';
    }else{
      delete errors['managerComment9'];
    }
    if(name === 'managerRating10' && !formData.managerRating10){
      formIsValid = false;
      errors['managerRating10'] = 'Please select Rating';
    }else{
      delete errors['managerRating10'];
    }
    if(name === 'managerComment10' && !formData.managerComment10){
      formIsValid = false;
      errors['managerComment10'] = 'Please enter comments';
    }else{
      delete errors['managerComment10'];
    }
    if(name === 'managerRating11' && !formData.managerRating11){
      formIsValid = false;
      errors['managerRating11'] = 'Please select Rating';
    }else{
      delete errors['managerRating11'];
    }
    if(name === 'managerComment11' && !formData.managerComment11){
      formIsValid = false;
      errors['managerComment11'] = 'Please enter comments';
    }else{
      delete errors['managerComment11'];
    }
    if(name === 'managerfeedback' && !formData.managerfeedback){
      formIsValid = false;
      errors['managerfeedback'] = 'Please enter comments';
    }else{
      delete errors['managerfeedback'];
    }
  }

  const [formErrors,setFormErrors]=useState({
    name:"",
    designation:"",
    department:"",
    managerName:"",
    
    selfaspiration:"",
  })

  const commentpayload = [
    {
      t_id: 1,
      manager_rating: formData.managerRating1,
      manager_comment: formData.managerComment1
    },
    {
      t_id: 2,
      manager_rating: formData.managerRating2,
      manager_comment: formData.managerComment2
    },
    {
      t_id: 3,
      manager_rating: formData.managerRating3,
      manager_comment: formData.managerComment3
    },
    {
      t_id: 4,
      manager_rating: formData.managerRating4,
      manager_comment: formData.managerComment4
    },
    {
      t_id: 5,
      manager_rating: formData.managerRating5,
      manager_comment: formData.managerComment5
    },
    {
      t_id: 6,
      manager_rating: formData.managerRating6,
      manager_comment: formData.managerComment6
    },

    {
      t_id: 7,
      manager_rating: formData.managerRating7,
      manager_comment: formData.managerComment7
    },

    {
      t_id: 8,
      manager_rating: formData.managerRating8,
      manager_comment: formData.managerComment8
    },
    {
      t_id: 9,
      manager_rating: formData.managerRating9,
      manager_comment: formData.managerComment9
    },
    {
      t_id: 10,
      manager_rating: formData.managerRating10,
      manager_comment: formData.managerComment10
    },
    {
      t_id: 11,
      manager_rating: formData.managerRating11,
      manager_comment: formData.managerComment11
    },

  ]






  const managerFeedback = {
    manager_feedback: formData.managerFedback

  }
  const selectedemail = localStorage.getItem("selected")

  useEffect(() => {

    let total = (parseInt(formData.managerRating1) + parseInt(formData.managerRating2) + parseInt(formData.managerRating3) + parseInt(formData.managerRating4) + parseInt(formData.managerRating5) +
      parseInt(formData.managerRating6) + parseInt(formData.managerRating7) + parseInt(formData.managerRating8) + parseInt(formData.managerRating9) + parseInt(formData.managerRating10) + parseInt(formData.managerRating11))
    console.log(typeof (parseFloat(total)), "par");
    console.log(total, "tot");
    let avg = total / 11;
    console.log(avg, "avg");
    setAverage(avg.toFixed(2))
  }, [formData.managerRating1, formData.managerRating2, formData.managerRating3, formData.managerRating4, formData.managerRating5, formData.managerRating6, formData.managerRating7, formData.managerRating8, formData.managerRating9, formData.managerRating10, formData.managerRating11])
  // console.log(average,"avg");
  // console.log(managerRating1,"///");
  useEffect(() => {
    axios.get(`http://demo.emeetify.com:5052/appraisel/users/Consolidate?email=${selectedemail}`)
      .then((response) => {
        console.log(response.data.data, "sucess");
        setFetchedData(response.data.data)
        // setPost(response.data.data)
      }).catch(("error"))

    axios.get(`http://demo.emeetify.com:5052/appraisel/users/userNames?email=${selectedemail}`)
      .then((response) => {
        console.log(response.data.data);
        setList(response.data.data)
        setPost(response.data.data)
      }).catch("error")

    axios.get(`http://demo.emeetify.com:5052/appraisel/users/userComments?email=${selectedemail}`)
      .then((response) => {
        console.log(response.data.data[0].self_aspirations, "feedback");
        setFeedback(response.data.data)
        setPost(response.data.data)
      }).catch("error")
  }, [selectedemail])
  // console.log(fetchedData,"fetch")
  // console.log(list[0]?);
  // console.log(feedback[0].employee_self_rating,'fee');
  //console.log(post,"post");



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

    const errors = {};
    let formIsValid = true;

   
       if(!formData.managerRating1){
      formIsValid=false;
      errors['managerRating1']="Please select Rating"
    }
    if(!formData.managerComment1){
      formIsValid=false;
      errors['managerComment1']="Please enter comments"
    }
    if(!formData.managerRating2){
      formIsValid=false;
      errors['managerRating2']="Please select Rating"
    }
    if(!formData.managerComment2){
      formIsValid=false;
      errors['managerComment2']="Please enter comments"
    }
    if(!formData.managerRating3){
      formIsValid=false;
      errors['managerRating3']="Please select Rating"
    }
    if(!formData.managerComment3){
      formIsValid=false;
      errors['managerComment3']="Please enter comments"
    }
    if(!formData.managerRating4){
      formIsValid=false;
      errors['managerRating4']="Please select Rating"
    }
    if(!formData.managerComment4){
      formIsValid=false;
      errors['managerComment4']="Please enter comments"
    }
    if(!formData.managerRating5){
      formIsValid=false;
      errors['managerRating5']="Please select Rating"
    }
    if(!formData.managerComment5){
      formIsValid=false;
      errors['managerComment5']="Please enter comments"
    }
    if(!formData.managerRating6){
      formIsValid=false;
      errors['managerRating6']="Please select Rating"
    }
    if(!formData.managerComment6){
      formIsValid=false;
      errors['managerComment6']="Please enter comments"
    }
    if(!formData.managerRating7){
      formIsValid=false;
      errors['managerRating7']="Please select Rating"
    }
    if(!formData.managerComment7){
      formIsValid=false;
      errors['managerComment7']="Please enter comments"
    }
    if(!formData.managerRating8){
      formIsValid=false;
      errors['managerRating8']="Please select Rating"
    }
    if(!formData.managerComment8){
      formIsValid=false;
      errors['managerComment8']="Please enter comments"
    }
    if(!formData.managerRating9){
      formIsValid=false;
      errors['managerRating9']="Please select Rating"
    }
    if(!formData.managerComment9){
      formIsValid=false;
      errors['managerComment9']="Please enter comments"
    }
    if(!formData.managerRating10){
      formIsValid=false;
      errors['managerRating10']="Please select Rating"
    }
    if(!formData.managerComment10){
      formIsValid=false;
      errors['managerComment10']="Please enter comments"
    }
    if(!formData.managerRating11){
      formIsValid=false;
      errors['managerRating11']="Please select Rating"
    }
    if(!formData.managerComment11){
      formIsValid=false;
      errors['managerComment11']="Please enter comments"
    }
    if(!formData.managerfeedback){
      formIsValid=false;
      errors['managerfeedback']="please enter comments"
    }
   

    setFormErrors(errors);


    
  

  
  
    axios.post(`http://demo.emeetify.com:5052/appraisel/users/AddComment?email=${selectedemail}&&type=manager`,
      commentpayload

    ).then((response) => {
      console.log(response.data, "comment")
      if(response.data.status === true){
        setPopmsg(true);
        toast("Details submitted successfully")
      }
      else{
        setPopmsg(false);
        toast("All fields are mandatory")
      }
    })
      .catch("error")

    // axios.post(`http://demo.emeetify.com:5052/appraisel/users/userFeedback?email=${selectedemail}&type=manager`
    //   , { managerFeedback }
    // ).then((response) => {
    //   console.log(response.data)
    // }).catch("error")

  }




  const [deatil, setDeatil] = useState([]);

  useEffect(() => {
    console.log("working");
    axios.get("http://demo.emeetify.com:5052/appraisel/users/getDetails")
      .then(response => {
        setDeatil(response.data.data)
        // console.log(deatil)
      })
      .catch(e => { console.log("e", e) })

  }, [])

  return (

    <>
      {

        post == null ?
        <Loader/>
          // <Backdrop
          //   sx={{ color: 'blue', zIndex: (theme) => theme.zIndex.drawer + 1 }}


          // >
          //   <CircularProgress color="success" />
          // </Backdrop>
          : <>

            <ToastContainer />


            <Grid container style={{ top: '0', background: 'grey', height: '60px', textAlign: 'center', position: 'fixed', zIndex: '1000' }}>
              <Grid item xs={2}>
                <div style={{ marginTop: '5px' }}>
                  <img style={{}} src={logo} alt="no image" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ marginTop: '15px', fontSize: '22px', marginLeft: '120px' }}>Performance Appraisal Form</div>
              </Grid>
              <Grid item xs={4}>
                <div style={{ marginTop: '15px', float: 'right', marginRight: '150px' }}>
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
                <Card style={{
                  marginTop: '80px', height: '500px', width: '90vw',
                  boxShadow: '0px 12px 15px 10px #ccc'

                }}>

                  <Typography variant="h6" sx={{ textAlign: 'center', fontFamily: 'roboto', marginTop: '50px' }}>
                    Employee Details</Typography>
                  <Divider sx={{ width: '100%', marginTop: '20px' }} />

                  <div>
                    <Grid container spacing={1}>
                      <Grid item lg={6}>

                        <TextField variant="outlined"
                          label="" sx={{ width: '260px', marginLeft: '230px', marginTop: 7 }}
                          name="name"
                          value={list[0]?.username}
                        ></TextField>

                      </Grid>
                      <Grid item lg={6}>
                        <TextField
                          sx={{ width: '260px', marginLeft: '80px', marginTop: 7 }}
                          select // tell TextField to render select
                          label="Designation"
                          value={list[0].designation}

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

                      </Grid>
                      <Grid item lg={6}>
                        <LocalizationProvider
                          dateAdapter={AdapterDayjs}>
                          <Stack>
                            <DatePicker
                              label="Joining Date"
                              inputFormat="MM/DD/YYYY"
                              disabled
                              renderInput={(params) =>
                                <TextField {...params} sx={{ marginTop: 7, marginLeft: '230px', width: '260px' }} />}
                              // value={list[0].joining_date}
                            />
                          </Stack>
                        </LocalizationProvider>

                      </Grid>
                      <Grid item lg={6}>
                        <TextField
                          sx={{ width: '260px', marginLeft: '80px', marginTop: 7 }}
                          select // tell TextField to render select
                          label="Department"
                          value={list[0].department}
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

                      </Grid>
                      <Grid item lg={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Stack spacing={3}>
                            <DesktopDatePicker
                              label="Apperaisal period"
                              inputFormat="YYYY"
                              disabled

                              renderInput={(params) => <TextField {...params} sx={{ width: '260px', marginLeft: '230px', marginTop: 5 }} />}

                            />
                          </Stack>
                        </LocalizationProvider>
                      </Grid>
                      <Grid item lg={6}>
                        <TextField
                          sx={{ width: '260px', marginLeft: '80px', marginTop: 5 }}
                          select // tell TextField to render select
                          label="Manager Name"
                          value={list[0]?.manager_name}

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

                      </Grid>


                    </Grid>
                  </div>
                </Card>
                <div>
                  <ScoreSystem />
                </div>

                <Card style={{ height: 'auto', width: '90vw', marginTop: '30px' }}>
                  <Typography sx={{ textAlign: 'center', fontFamily: "roboto", fontSize: "35px" }}>
                    KRA-Technical Aspects</Typography>
                  <Grid>
                    <Stack style={{ marginTop: '40px' }}>
                      <Typography style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        KRA:1. Learning Skills, Self-Learning / Adopting to new technologies
                      </Typography>
                      <Typography style={{ border: '1px solid blue', padding: '15px', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                        Your ability to self-learn and apply new technologies, protocols,
                        libraries, or even languages as needed.\,How good you are at learning
                        technical things.\,Example: Pace of learning, comprehension of the concept
                      </Typography>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Self Rating</InputLabel>
                          
                        </Stack>

                        <Select name='self_Rating'
                          value={list[0]?.comments[0]?.self_rating}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '300px' }}>
                        <Stack direction='row'>
                          <InputLabel>Justify Your Comment</InputLabel>
                       
                        </Stack>
                        <TextField name='selfComment1'
                          value={list[0]?.comments[0]?.self_comment}
                        />
                      </Stack>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Rating</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>

                        <Select 
                         name="managerRating1"
                         value={formData.managerRating1}
                         onChange={handleInputChange}
                         onBlur={handleInputBlur}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                        {formErrors.managerRating1 && !formData.managerRating1 && <Grid sx={{ marginLeft: "-10px", marginTop: "10px", color: "red" }}>{formErrors.managerRating1}</Grid>}

                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField  
                        name="managerComment1"
                        value={formData.managerComment1}
                         onChange={handleInputChange}
                         onBlur={handleInputBlur}
                         ></TextField>
                      </Stack>

                    </Stack>
                    {formErrors.managerComment1 && !formData.managerComment1 && <Grid sx={{ marginLeft: "650px", marginTop: "5px", color: "red" }}>{formErrors.managerComment1}</Grid>}


                  </Grid>
                  <Grid>
                    <Stack style={{ marginTop: '40px' }}>
                      <Typography style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        KRA:2.Problem Solving Skills and Technological Understanding</Typography>
                      <Typography style={{ border: '1px solid blue', padding: '15px', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                        Your ability to complete the task in a timely manner and ability to plan
                        how to complete the assigned task, as well as your accuracy in presenting
                        the results.\, Ability to see new “thing” in a wider perspective, for
                        example how a small library fit into a large project or product, Finding
                        better ways to achieve your projects goals, Understanding the specifications
                        for the “thing” you are about to implement
                      </Typography>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Self Rating</InputLabel>
                         
                        </Stack>

                        <Select
                          value={list[0]?.comments[1]?.self_rating}
                        >
                          <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '300px' }}>
                        <Stack direction='row'>
                          <InputLabel>Justify Your Comment</InputLabel>
                          
                        </Stack>
                        <TextField value={list[0]?.comments[1]?.self_comment}></TextField>
                      </Stack>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Rating</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>

                        <Select
                             name="managerRating2"
                             value={formData.managerRating2}
                             onChange={handleInputChange}
                             onBlur={handleInputBlur}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                        {formErrors.managerRating2 && !formData.managerRating2 && <Grid sx={{ marginLeft: "-10px", marginTop: "10px", color: "red" }}>{formErrors.managerRating2}</Grid>}

                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField 
                              name="managerComment2"
                              value={formData.managerComment2}
                               onChange={handleInputChange}
                               onBlur={handleInputBlur}></TextField>
                      </Stack>
                    </Stack>
                    {formErrors.managerComment2&& !formData.managerComment2 && <Grid sx={{ marginLeft: "650px", marginTop: "5px", color: "red" }}>{formErrors.managerComment2}</Grid>}

                  </Grid>
                  <Grid>
                    <Stack style={{ marginTop: '40px' }}>
                      <Typography style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        KRA:3. Analytical Thinking</Typography>
                      <Typography style={{ border: '1px solid blue', padding: '15px', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                        How practical when you design the architecture or plan the solution of
                        the “thing” prior to coding it, Proactive in ensuring that the
                        application does its job without wasting CPU, memory,
                        or other resources. How good are you at troubleshooting?
                      </Typography>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Self Rating</InputLabel>
                          
                        </Stack>

                        <Select
                          value={list[0]?.comments[2]?.self_rating}
                        >
                          <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '300px' }}>
                        <Stack direction='row'>
                          <InputLabel>Justify Your Comment</InputLabel>
                         
                        </Stack>
                        <TextField value={list[0]?.comments[2]?.self_comment} ></TextField>
                      </Stack>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Rating</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>

                        <Select
                         name="managerRating3"
                         value={formData.managerRating3}
                         onChange={handleInputChange}
                         onBlur={handleInputBlur}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                        {formErrors.managerRating3 && !formData.managerRating3 && <Grid sx={{ marginLeft: "-10px", marginTop: "10px", color: "red" }}>{formErrors.managerRating3}</Grid>}

                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField       name="managerComment3"
                        value={formData.managerComment3}
                         onChange={handleInputChange}
                         onBlur={handleInputBlur}></TextField>
                      </Stack>
                    </Stack>
                    {formErrors.managerComment3 && !formData.managerComment3 && <Grid sx={{ marginLeft: "650px", marginTop: "5px", color: "red" }}>{formErrors.managerComment3}</Grid>}

                  </Grid>
                  <Grid>
                    <Stack style={{ marginTop: '40px' }}>
                      <Typography style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        KRA:4. Coding / Testing Skills</Typography>

                      <Typography style={{ border: '1px solid blue', padding: '15px', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', marginTop: '20px' }} >
                        Have you considered the following items when coding?
                        <br />1. Code that can be tested
                        <br />2. Code that is clean and reusable
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



                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Self Rating</InputLabel>
                         
                        </Stack>

                        <Select
                          value={list[0]?.comments[3]?.self_rating}
                        >
                          <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '300px' }}>
                        <Stack direction='row'>
                          <InputLabel>Justify Your Comment</InputLabel>
                         
                        </Stack>
                        <TextField value={list[0]?.comments[3]?.self_comment} ></TextField>
                      </Stack>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Rating</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>

                        <Select
                             name="managerRating4"
                             value={formData.managerRating4}
                             onChange={handleInputChange}
                             onBlur={handleInputBlur}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                        {formErrors.managerRating4 && !formData.managerRating4 && <Grid sx={{ marginLeft: "-10px", marginTop: "10px", color: "red" }}>{formErrors.managerRating4}</Grid>}

                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField       name="managerComment4"
                        value={formData.managerComment4}
                         onChange={handleInputChange}
                         onBlur={handleInputBlur}></TextField>
                      </Stack>
                    </Stack>
                    {formErrors.managerComment4 && !formData.managerComment4 && <Grid sx={{ marginLeft: "650px", marginTop: "5px", color: "red" }}>{formErrors.managerComment4}</Grid>}

                  </Grid>
                  <Grid>
                    <Stack style={{ marginTop: '40px' }}>
                      <Typography style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        KRA:5. Client handling and Technical Contribution Skills</Typography>
                      <Typography style={{ border: '1px solid blue', padding: '15px', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                        1. Your ability to handle client meetings and requirement changes during client calls.\,
                        2. Ability to provide valuable inputs during scoping and solution architecting discussions for Project solutions
                      </Typography>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Self Rating</InputLabel>
                         
                        </Stack>

                        <Select
                          value={list[0]?.comments[4]?.self_rating}
                        >
                          <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '300px' }}>
                        <Stack direction='row'>
                          <InputLabel>Justify Your Comment</InputLabel>
                     
                        </Stack>
                        <TextField value={list[0]?.comments[4]?.self_comment}></TextField>
                      </Stack>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Rating</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>

                        <Select
                          name="managerRating5"
                          value={formData.managerRating5}
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                        {formErrors.managerRating5 && !formData.managerRating5 && <Grid sx={{ marginLeft: "-10px", marginTop: "10px", color: "red" }}>{formErrors.managerRating5}</Grid>}

                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField       name="managerComment5"
                        value={formData.managerComment5}
                         onChange={handleInputChange}
                         onBlur={handleInputBlur}></TextField>
                      </Stack>
                    </Stack>
                    {formErrors.managerComment5 && !formData.managerComment5 && <Grid sx={{ marginLeft: "650px", marginTop: "5px", color: "red" }}>{formErrors.managerComment5}</Grid>}

                  </Grid>
                  <Grid>
                    <Stack style={{ marginTop: '40px' }}>
                      <Typography style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        KRA:6. Communications skills</Typography>
                      <Typography style={{ border: '1px solid blue', padding: '15px', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                        Clarity in your reporting and communication, ability to clearly
                        articulate and comprehend. Effective listening abilities, Oral
                        and written communication skills that are effective
                      </Typography>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Self Rating</InputLabel>
                       
                        </Stack>

                        <Select
                          value={list[0]?.comments[5]?.self_rating}
                        >
                          <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '300px' }}>
                        <Stack direction='row'>
                          <InputLabel>Justify Your Comment</InputLabel>
                         
                        </Stack>
                        <TextField value={list[0]?.comments[5]?.self_comment} ></TextField>
                      </Stack>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Rating</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>

                        <Select
                             name="managerRating6"
                             value={formData.managerRating6}
                             onChange={handleInputChange}
                             onBlur={handleInputBlur}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                        {formErrors.managerRating6 && !formData.managerRating6 && <Grid sx={{ marginLeft: "-10px", marginTop: "10px", color: "red" }}>{formErrors.managerRating6}</Grid>}

                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField       name="managerComment6"
                        value={formData.managerComment6}
                         onChange={handleInputChange}
                         onBlur={handleInputBlur}></TextField>
                      </Stack>
                    </Stack>
                    {formErrors.managerComment6 && !formData.managerComment6 && <Grid sx={{ marginLeft: "650px", marginTop: "5px", color: "red" }}>{formErrors.managerComment6}</Grid>}

                  </Grid>
                  <Grid>
                    <Stack style={{ marginTop: '40px' }}>
                      <Typography style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        KRA:7. Punctuality in office</Typography>
                      <Typography style={{ border: '1px solid blue', padding: '15px', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                        Being punctual can help you follow your own schedule by allowing
                        you to complete all of your work during work hours;
                        How would you rate yourself bein punctual at work?
                      </Typography>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Self Rating</InputLabel>
                        </Stack>

                        <Select
                          value={list[0]?.comments[6]?.self_rating}
                        >
                          <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '300px' }}>
                        <Stack direction='row'>
                          <InputLabel>Justify Your Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField value={list[0]?.comments[6]?.self_comment}></TextField>
                      </Stack>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Rating</InputLabel>
                        </Stack>

                        <Select
                            name="managerRating7"
                            value={formData.managerRating7}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                        {formErrors.managerRating7 && !formData.managerRating7 && <Grid sx={{ marginLeft: "-10px", marginTop: "10px", color: "red" }}>{formErrors.managerRating7}</Grid>}

                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField       name="managerComment7"
                        value={formData.managerComment7}
                         onChange={handleInputChange}
                         onBlur={handleInputBlur}></TextField>
                      </Stack>
                    </Stack>
                    {formErrors.managerComment7 && !formData.managerComment7 && <Grid sx={{ marginLeft: "650px", marginTop: "5px", color: "red" }}>{formErrors.managerComment7}</Grid>}

                  </Grid>

                  <Grid>
                    <Stack style={{ marginTop: '40px' }}>
                      <Typography style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        KRA:8. Following office attire</Typography>
                      <Typography style={{ border: '1px solid blue', padding: '15px', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                        The major reason why dressing in proper business attire is important for every business
                        professional is because it presents a visual image and sends a message that the
                        employees are professional. How good are in following office attire?
                      </Typography>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Self Rating</InputLabel>
                       
                        </Stack>

                        <Select
                          value={list[0]?.comments[7]?.self_rating}
                        >
                          <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '300px' }}>
                        <Stack direction='row'>
                          <InputLabel>Justify Your Comment</InputLabel>
                          
                        </Stack>
                        <TextField value={list[0]?.comments[7]?.self_comment} ></TextField>
                      </Stack>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Rating</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>

                        <Select
                            name="managerRating8"
                            value={formData.managerRating8}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                        {formErrors.managerRating8 && !formData.managerRating8 && <Grid sx={{ marginLeft: "-10px", marginTop: "10px", color: "red" }}>{formErrors.managerRating8}</Grid>}

                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField 
                              name="managerComment8"
                              value={formData.managerComment8}
                               onChange={handleInputChange}
                               onBlur={handleInputBlur}></TextField>
                      </Stack>
                    </Stack>
                    {formErrors.managerComment8 && !formData.managerComment8 && <Grid sx={{ marginLeft: "650px", marginTop: "5px", color: "red" }}>{formErrors.managerComment8}</Grid>}

                  </Grid>
                  <Grid>
                    <Stack style={{ marginTop: '40px' }}>
                      <Typography style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        KRA:9.Team Work</Typography>
                      <Typography style={{ border: '1px solid blue', padding: '15px', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                        Assisting colleagues with work-related
                        activities Good rapport within and outside of the team
                        helps promote positive thinking.
                      </Typography>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Self Rating</InputLabel>
                         
                        </Stack>

                        <Select
                          value={list[0]?.comments[8]?.self_rating}
                        >
                          <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '300px' }}>
                        <Stack direction='row'>
                          <InputLabel>Justify Your Comment</InputLabel>
                          
                        </Stack>
                        <TextField value={list[0]?.comments[8]?.self_comment}
                        ></TextField>
                      </Stack>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Rating</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>

                        <Select
                           name="managerRating9"
                           value={formData.managerRating9}
                           onChange={handleInputChange}
                           onBlur={handleInputBlur}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                        {formErrors.managerRating9 && !formData.managerRating9 && <Grid sx={{ marginLeft: "-10px", marginTop: "10px", color: "red" }}>{formErrors.managerRating9}</Grid>}

                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField       name="managerComment9"
                        value={formData.managerComment9}
                         onChange={handleInputChange}
                         onBlur={handleInputBlur}></TextField>
                      </Stack>
                    </Stack>
                    {formErrors.managerComment9 && !formData.managerComment9 && <Grid sx={{ marginLeft: "650px", marginTop: "5px", color: "red" }}>{formErrors.managerComment9}</Grid>}

                  </Grid>

                  <Grid>
                    <Stack style={{ marginTop: '40px' }}>
                      <Typography style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        KRA:10.Initiative Contribution to the Organization</Typography>
                      <Typography style={{ border: '1px solid blue', padding: '15px', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                        Being open to learning new skills, Participation in company-sponsored activities
                      </Typography>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Self Rating</InputLabel>
                        
                        </Stack>

                        <Select
                          value={list[0]?.comments[9]?.self_rating}

                        >
                          <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '300px' }}>
                        <Stack direction='row'>
                          <InputLabel>Justify Your Comment</InputLabel>
                        
                        </Stack>
                        <TextField value={list[0]?.comments[9]?.self_comment}></TextField>
                      </Stack>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Rating</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>

                        <Select
                             name="managerRating10"
                             value={formData.managerRating10}
                             onChange={handleInputChange}
                             onBlur={handleInputBlur}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                        {formErrors.managerRating10 && !formData.managerRating10 && <Grid sx={{ marginLeft: "-10px", marginTop: "10px", color: "red" }}>{formErrors.managerRating10}</Grid>}

                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField       name="managerComment10"
                        value={formData.managerComment10}
                         onChange={handleInputChange}
                         onBlur={handleInputBlur}></TextField>
                      </Stack>
                    </Stack>
                    {formErrors.managerComment10 && !formData.managerComment10 && <Grid sx={{ marginLeft: "650px", marginTop: "5px", color: "red" }}>{formErrors.managerComment10}</Grid>}

                  </Grid>

                  <Grid>
                    <Stack style={{ marginTop: '40px' }}>
                      <Typography style={{ marginLeft: '20px', fontWeight: 'bold' }}>
                        KRA:11.Working towards Organizations interest</Typography>
                      <Typography style={{ border: '1px solid blue', padding: '15px', borderRadius: '15px', marginLeft: '20px', marginRight: '20px', marginTop: '20px' }}>
                        Working within the SLA
                        (Service Level Agreement) and GRC (Governance, Risk Management,
                        and Compliance) policies of the company
                      </Typography>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Self Rating</InputLabel>
                         
                        </Stack>

                        <Select
                          value={list[0]?.comments[10]?.self_rating}
                        >
                          <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '300px' }}>
                        <Stack direction='row'>
                          <InputLabel>Justify Your Comment</InputLabel>
                          
                        </Stack>
                        <TextField value={list[0]?.comments[10]?.self_comment}></TextField>
                      </Stack>
                    </Stack>
                    <Stack direction='row' style={{ marginTop: '40px' }}>
                      <Stack style={{ marginLeft: '220px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Rating</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>

                        <Select
                           name="managerRating11"
                           value={formData.managerRating11}
                           onChange={handleInputChange}
                           onBlur={handleInputBlur}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                        {formErrors.managerRating11 && !formData.managerRating11 && <Grid sx={{ marginLeft: "-10px", marginTop: "10px", color: "red" }}>{formErrors.managerRating11}</Grid>}

                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField       name="managerComment11"
                        value={formData.managerComment11}
                         onChange={handleInputChange}
                         onBlur={handleInputBlur}></TextField>
                      </Stack>
                    </Stack>
                    {formErrors.managerComment11 && !formData.managerComment11 && <Grid sx={{ marginLeft: "650px", marginTop: "5px", color: "red" }}>{formErrors.managerComment11}</Grid>}

                  </Grid>

                  <Divider sx={{ width: '100%', marginTop: '20px' }} />
                  <Grid container spacing={1}>
                    <Grid item sx={{ marginTop: "50px", marginLeft: "180px" }}>
                      <Typography sx={{ fontSize: '20px' }}>Employee Average Rating <span style={{ color: 'red' }}>*</span></Typography>
                      <Card style={{ height: '30px', width: '60px', marginTop: '20px', marginLeft: '50px', textAlign: 'center' }}

                      > {fetchedData?.employee_self_rating}</Card>
                      {/* <TextareaAutosize sx={{ marginTop: '10px', }} minRows={5} 
              ></TextareaAutosize> */}

                    </Grid>


                    <Grid item sx={{ marginTop: "50px", marginLeft: "220px" }}>
                      <Typography sx={{ fontSize: '20px' }}>Self Aspirations  <span style={{ color: 'red' }}>*</span></Typography>
                      <TextareaAutosize sx={{ marginTop: '10px' }} minRows={5} >{ feedback[0]?.self_aspirations}</TextareaAutosize>

                    </Grid>

                  </Grid>
                  <Grid container sx={{ marginTop: '50px' }}>
                    <Grid item xs={4} sx={{ marginLeft: '180px' }}>
                      <Typography sx={{ fontSize: '20px' }}>Manager's Average Rating<span style={{ color: 'red' }}>*</span></Typography>
                      <Card style={{ height: '30px', width: '60px', marginTop: '20px', marginLeft: '50px', textAlign: 'center' }} >{average}</Card>
                    </Grid>
                    <Grid item xs={4} sx={{ marginLeft: "100px" }}>
                      <Typography sx={{ fontSize: '20px' }}>Manager's Feedback<span style={{ color: 'red' }}>*</span></Typography>
                      <TextareaAutosize minRows={4} value={formData.managerfeedback}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      name="managerfeedback"
                      ></TextareaAutosize>
                    </Grid>
                    {formErrors.managerfeedback && !formData.managerfeedback && <Grid sx={{ marginLeft: "650px", marginTop: "5px", color: "red" }}>{formErrors.managerfeedback}</Grid>}

                  </Grid>



                  <Divider sx={{ width: '100%', marginTop: "15px" }} />
                  <div style={{ marginLeft: '450px', marginBottom: '20px' }}>
                    <Button type="submit" variant="contained" onClick={handleSubmit} sx={{
                      width: "230px", backgroundColor: "green",
                      marginTop: "40px"
                    }} > Submit</Button>
                  </div>

                </Card>

              </form>

            </Container>





















          </>}

    </>

  );
}