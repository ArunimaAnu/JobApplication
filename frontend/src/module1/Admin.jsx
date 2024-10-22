import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      <h1>Welcome to Admin Login page !!!!</h1>
      <TextField label='Username' variant='filled'></TextField><br></br><br></br>
        <TextField label='Password' variant='filled'></TextField><br></br><br></br>
        <Link to='/admindash'>
        <Button variant='contained'>Submit</Button>
        </Link>
    </div>
  )
}

export default Admin