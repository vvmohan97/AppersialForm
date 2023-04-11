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


export function Manager() {
  const [selectedDate, handleDateChange] = useState(null);
  const [year, setYear] = useState()
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("")
  const [joining, setJoining] = useState("")
  const [department, setDepartment] = useState("")
  const [manager, setManager] = useState("")
  const [selfrating, setSelfrating] = useState([{}]);
  const [justifyrating, setJustifyrating] = useState("")
//   const [managerrating, setManagerrating] = useState("")
  const [selfaspiration, setSelfaspiration] = useState("")
  const [teamlead, setTeamlead] = useState("")
  const [errors, setErrors] = useState("")

  const [value, setValue] = useState("")
  const [logout, setLogout] = useState(true)
  const navigates = useNavigate();
const [average,setAverage]=useState(0);
const [ratingg,setRating]=useState(0)

const [fetchedData,setFetchedData]= useState()
    const [managerRating,setManagerRating]=useState([
        {t_id:1,id:1,name:'manager_rating',value:0},
        {t_id:2,id:2,name:'manager_rating',value:0},
        {t_id:3,id:3,name:'manager_rating',value:0},
        {t_id:4, id:4 ,name:'manager_rating' , value:0},
    {t_id:5, id:5 ,name: 'manager_rating' , value:0},
    {t_id:6, id:6 ,name: 'manager_rating' , value:0},
    {t_id:7, id:7 ,name: 'manager_rating' , value:0},
    {t_id:8, id:8 ,name: 'manager_rating' , value:0},
    {t_id:9, id:9 ,name: 'manager_rating' , value:0},
    {t_id:10, id:10 ,name: 'manager_rating' , value:0},
    {t_id:11, id:11 ,name: 'manager_rating' , value:0}
    
    ]);

  const [managercomment , setManagercomment] = useState([
    {t_id:1 ,id:1 ,name: 'manager_comment' , value:'' , validate:validateComment},
    {t_id:2, id:2 ,name: 'manager_comment' , value:'',validate:validateComment},
    {t_id:3 ,id:3 ,name: 'manager_comment' , value:'',validate:validateComment},
    {t_id:4 ,id:4 ,name: 'manager_comment' , value:'',validate:validateComment},
    {t_id:5 ,id:5 ,name: 'manager_comment' , value:'',validate:validateComment},
    {t_id:6, id:6 ,name: 'manager_comment' , value:'',validate:validateComment},
    {t_id:7 ,id:7 ,name: 'manager_comment' , value:'',validate:validateComment},
    {t_id:8, id:8 ,name: 'manager_comment' , value:'',validate:validateComment},
    {t_id:9, id:9 ,name: 'manager_comment' , value:'',validate:validateComment},
    {t_id:10 ,id:10 ,name: 'manager_comment' , value:'',validate:validateComment},
    {t_id:11, id:11 ,name: 'manager_comment' , value:'',validate:validateComment},
  ]);

  const self_aspiration={    self_aspiration : "selfaspiration"
    
  }
  const selectedemail = localStorage.getItem("selected")



useEffect(()=>{
          axios.get(`http://demo.emeetify.com:5052/appraisel/users/Consolidate?email=${selectedemail}`)
          .then((response)=>{
            console.log(response.data,"sucess");
            setFetchedData(response.data.data)
          }).catch(("error"))
},[selectedemail])
console.log(fetchedData,"fetch")
const handlemanagercomment=(id,value)=>{
    setManagercomment(managercomment.map((data)=>{
        if(data.id ===id){
            const error =data.validate(value);
            return{...data,value,error}
        }
        return data;
    }))
}
console.log(managercomment);
function validateComment(name){
    if(!name){
        return "comment is requried"
    }
    return "";
}

const handlemanagerRating=(id,value)=>{
    setManagerRating(managerRating.map((data)=>{
        if(data.id === id){
            return{...data,value}
            console.log(data)
        }
        return data;
    }))
}
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
    console.log(managerRating,"mng");
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
    axios.post(`http://demo.emeetify.com:5052/appraisel/users/AddComment?email=${selectedemail}&&type=employee`
    
    ,{managerRating,managercomment}).then((response)=>{
        console.log(response.data)
    })
    .catch("error")

    axios.post(`http://demo.emeetify.com:5052/appraisel/users/userFeedback?email=${selectedemail}&type=employee` 
    ,{self_aspiration}
    ).then((response)=>{    
        console.log(response.data)
    }).catch("error")

  }

  useEffect(()=>{
    let total =0;
    let count = 0;
    console.log(managerRating.length,"manager rating");
    for(var i=0;i<managerRating.length;i++){
        total = parseInt(total)+parseInt(managerRating[i].value);
        console.log(total,"total");
        count++;
        console.log(total === NaN ? 0:(total),"total")
    }
    console.log(total)
    let avg=parseInt(total)/ managerRating.length;
    console.log(avg,"avg")
    setAverage(avg.toFixed(2))
  },[managerRating])
   
//   useEffect(() => {
//     console.log(justifyrating.length)
//     console.log(justifyrating)
//   }, [justifyrating])


  const [deatil, setDeatil] = useState([]);

  useEffect(() => {
    console.log("working");
    axios.get("http://demo.emeetify.com:5052/appraisel/users/getDetails")
      .then(response => {
        setDeatil(response.data.data)
        // console.log(deatil)
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
  <Card style={{marginTop:'80px',height:'500px',width:'90vw',
    boxShadow:'0px 12px 15px 10px #ccc'
   
}}>
  <Typography variant="h6" sx={{ textAlign: 'center', fontFamily: 'roboto' ,marginTop:'50px'}}>
          Employee Details</Typography>
  <Divider  sx={{ width: '100%' ,marginTop:'20px'}} />
    
            <div>
            <Grid container spacing={1}>
            <Grid item lg={6}>

              <TextField variant="outlined"
                label="Name of Employee" sx={{ width: '260px', marginLeft:'230px', marginTop: 7 }}
                name="name"
                disabled
              
              ></TextField>
            
            </Grid>
            <Grid item lg={6}>
              <TextField
                sx={{ width: '260px',marginLeft:'80px', marginTop: 7 }}
                select // tell TextField to render select
                label="Designation"
                disabled
               
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
                      <TextField {...params} sx={{ marginTop: 7, marginLeft:'230px', width: '260px' }} />}
                
                  />
                </Stack>
              </LocalizationProvider>
          
            </Grid>
            <Grid item lg={6}>
              <TextField
                sx={{ width: '260px',marginLeft:'80px', marginTop: 7 }}
                select // tell TextField to render select
                label="Department"
                disabled
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

                    renderInput={(params) => <TextField {...params} sx={{ width: '260px', marginLeft:'230px', marginTop: 5 }} />}
               
                />
                </Stack>
              </LocalizationProvider>
            </Grid>
            <Grid item lg={6}>
              <TextField
                sx={{ width: '260px',marginLeft:'80px', marginTop: 5 }}
                select // tell TextField to render select
                label="Manager Name"
                disabled
              
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
                            <Grid item sx={{marginLeft:'130px'}}>
                              <Typography sx={{ fontSize: '16px' }} disabled>
                                Self Rating<span style={{ color: 'red' }}>*</span>
                              </Typography>
                              <Select sx={{ backgroundColor: 'white', marginTop: "10px", width: "150px" }}
                                disabled
                              >
                                <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                                <MenuItem key={5} value="5">5</MenuItem>
                                <MenuItem key={4} value="4">4</MenuItem>
                                <MenuItem key={3} value="3"> 3</MenuItem>
                                <MenuItem key={2} value="2">2</MenuItem>
                                <MenuItem key={1} value="1">1</MenuItem>
                              </Select>
                            </Grid>
                           

                            <Grid item sx={{ marginLeft: '310px', marginTop: '0px' }}>
                              <Typography sx={{ fontSize: '16px' }} >Justify your Rating<label style={{ color: 'red' }}>*</label></Typography>
                              <TextareaAutosize sx={{ marginTop: '10px', }} minRows={6} cols={30} disabled
                               ></TextareaAutosize>
                            </Grid>
                            
                          
                           <Grid item sx={{ marginTop: "10px",marginLeft:'130px' }}>
                            {managerRating.map((data)=>{
                                return(
                                    <div key={data.id}>
                                    {d.t_id === data.id ?<>
                                        <Typography sx={{ fontSize: '16px' }}>
                                Manager Rating<span style={{ color: 'red' }}>*</span>
                              </Typography>
                              <Select sx={{ marginTop: "10px", width: "150px" }} 
                              onChange={(e)=>{
                                handlemanagerRating(data.id,e.target.value)
                                setRating([data.id],parseInt(e.target.value))

                            }}
                              >
                                <MenuItem key={0} defaultValue="select rating">select rating</MenuItem>
                                <MenuItem key={5} value="5">5</MenuItem>
                                <MenuItem key={4} value="4">4</MenuItem>
                                <MenuItem key={3} value="3">3</MenuItem>
                                <MenuItem key={2} value="2">2</MenuItem>
                                <MenuItem key={1} value="1">1</MenuItem>
                              </Select>
                                    </>: ""}
                                    </div>
                                )
                            })}
                            
                            </Grid>
                            <Grid item sx={{ marginLeft: '589px', marginTop: "-90px" }}>

                                {
                                    managercomment.map((data)=>{
                                        return(
                                            <div>
                                                {d.t_id === data.id ?
                                                
                                         <>
                                                  <Typography sx={{ fontSize: '16px' }} >Manager Comments<span style={{ color: 'red' }}>*</span></Typography>
                              <TextareaAutosize sx={{ marginTop: '10px', }}
                               minRows={6} cols={30}
                               onChange={(e)=>handlemanagercomment(data.id,e.target.value)}
                               ></TextareaAutosize>
                                   {data.error && <p>{data.error}</p>}
                                         </>   
                                          :""
                                            }

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

                })
              }
                
<Divider  sx={{ width: '100%' ,marginTop:'20px'}} />
              <Grid container spacing={1}>
                <Grid item sx={{ marginTop: "50px",marginLeft:"180px" }}>
                  <Typography sx={{ fontSize: '20px' }}>Employee Average Rating <span style={{ color: 'red' }}>*</span></Typography>
                  <Card style={{height:'30px',width:'60px',marginTop:'20px',marginLeft:'50px',textAlign:'center'}}
                  
                  > {fetchedData?.employee_self_rating}</Card>
                  {/* <TextareaAutosize sx={{ marginTop: '10px', }} minRows={5} 
              ></TextareaAutosize> */}
        
                </Grid>
              
               
                <Grid item sx={{ marginTop: "50px", marginLeft: "220px" }}>
                  <Typography sx={{ fontSize: '20px' }}>Self Aspirations  <span style={{ color: 'red' }}>*</span></Typography>
                  <TextareaAutosize sx={{ marginTop: '10px' }} minRows={5} onChange={(e)=>{setSelfaspiration(e.target.value)}}></TextareaAutosize>

                </Grid>
              
                   </Grid>
                   <Grid container sx={{marginTop:'50px'}}>
                <Grid item xs={4} sx={{marginLeft:'180px'}}>
                  <Typography sx={{ fontSize: '20px' }}>Manager's Average Rating<span style={{ color: 'red' }}>*</span></Typography>
                <Card style={{height:'30px',width:'60px',marginTop:'20px',marginLeft:'50px',textAlign:'center'}} >{fetchedData?.manager_consolidated_rating}</Card>
                </Grid>
                  <Grid item xs={4} sx={{marginLeft:"100px"}}>
                  <Typography sx={{ fontSize: '20px' }}>Manager's Feedback<span style={{ color: 'red' }}>*</span></Typography>
                  <TextareaAutosize minRows={4}  ></TextareaAutosize>
                </Grid>
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