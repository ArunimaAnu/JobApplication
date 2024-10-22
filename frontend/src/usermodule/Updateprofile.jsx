import React from 'react'
import Navuser from './Navuser'
import { TextField, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom';

const Updateprofile = () => {
  var location = useLocation();
  var name =location.state;
  console.log(name)

  return (
    <div class="user">
        <div class="nav">
      <Navuser></Navuser>
      <br/>
      <Typography variant='h4'>UPDATE PROFILE</Typography><br/><br/>
        <TextField label='First Name' variant='filled'></TextField><br></br><br/>
        <TextField label='Middle Name' variant='filled'></TextField><br/><br/>
        <TextField label='Last Name' variant='filled'></TextField><br></br><br/>
        <TextField label='DOB' variant='filled'></TextField><br></br><br/>
        <TextField label='Age' variant='filled'></TextField><br/><br/>
        <TextField label='Mobile Number' variant='filled'></TextField><br/><br/>
        <TextField label='Email' variant='filled'></TextField><br/><br/>
        <TextField label='Profession' variant='filled'></TextField><br/><br/>
        <TextField label='Experience' variant='filled'></TextField><br/><br/>
        </div>
    </div>
  )
}

export default Updateprofile