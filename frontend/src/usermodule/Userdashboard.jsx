import React, { useEffect, useState } from 'react'
import Navuser from './Navuser'
import { Link , useLocation, useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material';
import axios from 'axios';

const Userdashboard = () => {
 var location = useLocation();
 const name =location.state;

  console.log(name)
  var [person, setPerson] = useState([]);
  var navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3005/profileview")
      .then((res) => {
        console.log(res);
        setPerson(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="user">
      <div className="nav">
      <Navuser>
      </Navuser>
      <br/><br/>
      <Typography variant="h2">Welcome to CareerConnect&nbsp;{name}</Typography>
      </div>
    </div>
  )
}

export default Userdashboard