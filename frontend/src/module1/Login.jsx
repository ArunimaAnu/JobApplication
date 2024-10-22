import { Box, Button, Card, Grid, Paper, TextField, Typography } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  var navigate = useNavigate();
  const heading={fontSize:"2rem",fontWeight:"600"};
  const paperStyle={padding:"2rem",margin:"50px auto",borderRadius:"1rem",boxshadow:"10px 10px"}
  const row={display:"flex",marginTop:"1rem"}
  const btnstyle={marginTop:"1rem",fontSize:"0.5rem",fontWeight:"400",backgroundColor:"blue"}
  
  var [logs, setLogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/loging")
      .then((res) => {
        console.log(res);
        setLogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
 
  var [uname,setUname]= useState()
  var [pass,setPass]= useState()
logs.map((val,i) => {
})
  const checkLogin=()=>{
    logs.map((val,i) => {
    if (val.Email==uname && val.Password==pass) {
     
      if(val.Role=="Admin"){
            alert("Admin login successful")
            navigate('/admindash')  
      }
      else if(val.Role=="user"){
          alert("User login successful");
          // var value=val.Name
          navigate('/userdash', { state:val.Name })
    }  
   else{
        alert("Incorrect credentials");
        navigate('/login')
    }
  }
  })
  } 
  return (
    <div className="bg">
      <Grid align="center">
      <div className="log">
        <Box>
      
      <Typography variant='h4' style={{heading}}>LOGIN</Typography>
      <form>
      <TextField sx={{label:{fontSize:"1rem",fontWeight:"550",color:'black'}}}style={row} label='Email' variant='outlined' onChange={(e) => setUname(e.target.value)}></TextField><br></br><br></br>
        <TextField type ="password"sx={{label:{fontSize:"1rem",fontWeight:"550" ,color:'black'}}}style={row} label='Password' variant='outlined'onChange={(e) => setPass(e.target.value)}></TextField><br></br><br></br>
        
        <Button  type='button'variant='contained' onClick={checkLogin}>Submit</Button>
      <br/><br/>
        Not a user?
        <Link to='/signin'> Sign up
        </Link>
      <br></br>
        <br></br><br></br>
        {/* <Link to='/admin'>
        <Button variant='contained'>Admin Login</Button></Link> */}
      </form>
      </Box>
      {/* </Paper> */}
      </div>
   </Grid>
      
    </div>
  )
}

export default Login