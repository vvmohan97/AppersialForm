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

  const commentpayload = [
    {
      t_id: 1,
      manager_rating: managerRating1,
      manager_comment: managerComment1
    },
    {
      t_id: 2,
      manager_rating: managerRating2,
      manager_comment: managerComment2
    },
    {
      t_id: 3,
      manager_rating: managerRating3,
      manager_comment: managerComment3
    },
    {
      t_id: 4,
      manager_rating: managerRating4,
      manager_comment: managerComment4
    },
    {
      t_id: 5,
      manager_rating: managerRating5,
      manager_comment: managerComment5
    },
    {
      t_id: 6,
      manager_rating: managerRating6,
      manager_comment: managerComment6
    },

    {
      t_id: 7,
      manager_rating: managerRating7,
      manager_comment: managerComment7
    },

    {
      t_id: 8,
      manager_rating: managerRating8,
      manager_comment: managerComment8
    },
    {
      t_id: 9,
      manager_rating: managerRating9,
      manager_comment: managerComment9
    },
    {
      t_id: 10,
      manager_rating: managerRating10,
      manager_comment: managerComment10
    },
    {
      t_id: 11,
      manager_rating: managerRating11,
      manager_comment: managerComment11
    },

  ]






  const self_aspiration = {
    self_aspiration: "selfaspiration"

  }
  const selectedemail = localStorage.getItem("selected")

  useEffect(() => {

    let total = (parseInt(managerRating1) + parseInt(managerRating2) + parseInt(managerRating3) + parseInt(managerRating4) + parseInt(managerRating5) +
      parseInt(managerRating6) + parseInt(managerRating7) + parseInt(managerRating8) + parseInt(managerRating9) + parseInt(managerRating10) + parseInt(managerRating11))
    console.log(typeof (parseFloat(total)), "par");
    console.log(total, "tot");
    let avg = total / 11;
    console.log(avg, "avg");
    setAverage(avg.toFixed(2))
  }, [managerRating1, managerRating2, managerRating3, managerRating4, managerRating5, managerRating6, managerRating7, managerRating8, managerRating9, managerRating10, managerRating11])
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


    setErrors(errors);
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

    axios.post(`http://demo.emeetify.com:5052/appraisel/users/userFeedback?email=${selectedemail}&type=employee`
      , { self_aspiration }
    ).then((response) => {
      console.log(response.data)
    }).catch("error")

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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          onChange={(e) => {
                            setManagerRating1(e.target.value)
                            console.log(e.target.value, "vvv")
                          }}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField onChange={(e) => { setManagerComment1(e.target.value) }}></TextField>
                      </Stack>
                    </Stack>

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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          onChange={(e) => { setManagerRating2(e.target.value) }}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField onChange={(e) => { setManagerComment2(e.target.value) }}></TextField>
                      </Stack>
                    </Stack>

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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          onChange={(e) => { setManagerRating3(e.target.value) }}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField onChange={(e) => { setManagerComment3(e.target.value) }}></TextField>
                      </Stack>
                    </Stack>

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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          onChange={(e) => { setManagerRating4(e.target.value) }}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField onChange={(e) => { setManagerComment4(e.target.value) }}></TextField>
                      </Stack>
                    </Stack>

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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          onChange={(e) => { setManagerRating5(e.target.value) }}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField onChange={(e) => { setManagerComment5(e.target.value) }}></TextField>
                      </Stack>
                    </Stack>

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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          onChange={(e) => { setManagerRating6(e.target.value) }}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField onChange={(e) => { setManagerComment6(e.target.value) }}></TextField>
                      </Stack>
                    </Stack>

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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>

                        <Select
                          onChange={(e) => { setManagerRating7(e.target.value) }}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField onChange={(e) => { setManagerComment7(e.target.value) }}></TextField>
                      </Stack>
                    </Stack>

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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          onChange={(e) => { setManagerRating8(e.target.value) }}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField onChange={(e) => { setManagerComment8(e.target.value) }}></TextField>
                      </Stack>
                    </Stack>

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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          onChange={(e) => { setManagerRating9(e.target.value) }}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField onChange={(e) => { setManagerComment9(e.target.value) }}></TextField>
                      </Stack>
                    </Stack>
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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          onChange={(e) => { setManagerRating10(e.target.value) }}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField onChange={(e) => { setManagerComment10(e.target.value) }}></TextField>
                      </Stack>
                    </Stack>

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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
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
                          onChange={(e) => { setManagerRating11(e.target.value) }}
                        >
                          <MenuItem key={5} value="5">5</MenuItem>
                          <MenuItem key={4} value="4">4</MenuItem>
                          <MenuItem key={3} value="3">3</MenuItem>
                          <MenuItem key={2} value="2">2</MenuItem>
                          <MenuItem key={1} value="1">1</MenuItem>
                        </Select>
                      </Stack>
                      <Stack style={{ marginLeft: '260px' }}>
                        <Stack direction='row'>
                          <InputLabel>Manager Comment</InputLabel>
                          <InputLabel style={{ color: 'red' }}>*</InputLabel>
                        </Stack>
                        <TextField onChange={(e) => { setManagerComment11(e.target.value) }}></TextField>
                      </Stack>
                    </Stack>

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
                      <TextareaAutosize minRows={4}  ></TextareaAutosize>
                    </Grid>
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