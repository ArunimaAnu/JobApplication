import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Signin = (props) => {
  var [inputs, setInputs] = useState({ Name: "", Email: "", Password: "", Role: "user" });
  var location = useLocation();
  var navigate = useNavigate()
  console.log("loc", location.state);

  const loginHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const addLogin = () => {
    console.log("clicked");
        axios
        .post("http://localhost:3005/loginadd", inputs)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          navigate('/login')
        })
        .catch((err) => {
          console.log(err);
        });
  };

  // useEffect(() => {
  //   if (location.state !== null) {
  //     setInputs({
  //       ...inputs,
  //       Name: location.state.val.Name,
  //       Email: location.state.val.Email,
  //       Password: location.state.val.Password,
  //     });
  //   }
  // }, []);

  return (
    <div class="back">
      <div class="sign" >
      <Box
      component="form"
      noValidate
      autoComplete="off" sx={{backgroundColor:'#00000000'}}>
      
      <Typography variant='h4'>REGISTER</Typography><br/>
        {/* <h1>Welcome to Sign in page !!!!</h1> */}
        <TextField 
        label='Name' 
        variant='filled' 
        onChange={loginHandler}
        name="Name"
        value={inputs.Name}></TextField><br></br><br></br>
        <TextField 
        label='Email' 
        variant='filled'
        onChange={loginHandler}
        name="Email"
        value={inputs.Email}></TextField><br></br><br></br>
        {/* <TextField label='Phone Number' variant='filled'></TextField><br></br><br></br> */}
        <TextField 
        label='Password' 
        variant='filled'
        onChange={loginHandler}
        name="Password"
        value={inputs.Password}></TextField><br></br><br></br>
        {/* <FormControl>
      <FormLabel id="">Occupation</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="None"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Student" control={<Radio />} label="Student" />
        <FormControlLabel value="Recruiter" control={<Radio />} label="Recruiter" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl> */}
    <br></br>
    
    <Link to='/login'>
        <Button 
        variant='contained'
        onClick={addLogin}>Submit</Button></Link>
        <br/><br/>
        Already a user?
        <Link to='/login'>Login
        </Link><br></br><br></br>
        <Link to='/'>
                      <Button variant='contained'>Home</Button></Link>&nbsp;
        
        </Box>
        </div>
    </div>
  )
}

export default Signin