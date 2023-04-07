import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";

export function ScoreSystem(){
const title=[{  
    name:'OutStanding',score:5,},
    {name:'Exceeds Requirement',score:4},
    {name:'Meets Requirement',score:3},
    {name:'Need Improvement',score:2},
    {name:'Unsatisfactory',score:1}]

return(
    <>
        <TableContainer component={Paper}
            sx={{ marginTop:"70px"}}
        >
        <Table>
        <TableHead
         sx={{fontFamily:"Roboto", textAlign:"center",backgroundColor:'gray',marginTop:"auto"}} 
        >
        <TableRow sx={{width:'100%'}}>
             <TableCell align="center">
            Scoring System
            </TableCell>
            <TableCell>
            
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell sx={{fontFamily:"Roboto", borderRightStyle: "solid",
                borderRightColor: "white",
                display: "tableRowGroup",borderTopStyle: "solid",
                borderTopColor: "white"}}>Attribute</TableCell>
            <TableCell sx={{fontFamily:"Roboto",borderTopStyle: "solid",
                borderTopColor: "white" }}>Score</TableCell>
        </TableRow>
        </TableHead>
        <TableBody sx={{backgroundColor:"lightblue"}}>
    {        
        title.map((title,key)=>(
        <TableRow>
        <TableCell sx={{borderRightStyle: "solid",
        borderRightColor: "white",
        borderTopStyle: "solid",
        borderTopColor: "white",
        display: "tableRowGroup"}}>{title.name}</TableCell>
         <TableCell key={title.id} sx={{borderRightStyle: "solid",
        borderRightColor: "white",
        borderTopStyle: "solid",
        borderTopColor: "white"}}>{title.score}</TableCell>
         </TableRow>
    ))}
        </TableBody>
        </Table>
        </TableContainer>
       <Box><Typography sx={{textAlign:'left',marginTop:'15px'}}>Note:</Typography>
       <Typography sx={{marginTop:'15px'}}>Make sure you are honest about the score / rating you 
        give yourself in each area, and that proper and valid justification
         is provided for the scores / ratings.</Typography>
       </Box>
        </>

    );
}