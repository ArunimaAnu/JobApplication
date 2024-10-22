import Navadmin from './Navadmin'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Admindashboard = () => {
  var [jobs, setJobs] = useState([]);
  var navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3005/view")
      .then((res) => {
        console.log(res);
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const delValue = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:3005/remove/" + id)
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const updateValue = (val) => {
    console.log("up clicked");
    navigate("/manjob", { state: { val } });
  };

  return (
    <div className="adminn">
      <div className="nav">
      <Navadmin></Navadmin>
      <br/>
      <Typography variant='h4'>List of All Jobs</Typography>
<br/><br/>
      <TableContainer component='Paper' sx={{width:"112%"}}>
          <Table sx={{ minWidth: 650,backgroundColor:"white" }} aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell>JOBNAME</TableCell>
                      <TableCell>DESCRIPTION</TableCell>
                      <TableCell>REQUIRMENTS</TableCell>
                      <TableCell>LOCATION</TableCell>
                      <TableCell>SALARY</TableCell>
                      <TableCell>JOBTYPE</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
              {jobs.map((val, i) => {
                 return (
                          <TableRow  key={i}>
                              <TableCell>{val.Jobname}</TableCell>
                              <TableCell>{val.Description}</TableCell>
                              <TableCell>{val.Reqirements}</TableCell>
                              <TableCell>{val.Location}</TableCell>
                              <TableCell>{val.Salary}</TableCell>
                              <TableCell>{val.Jobtype}</TableCell>
                              <TableCell><Button size='small' variant='contained' onClick={() => {updateValue(val); }}>Update</Button></TableCell>
                              <TableCell><Button size='small' variant='contained'  onClick={() => {delValue(val._id); }}>Delete</Button></TableCell>
                          </TableRow>
                             );
                            })}
              </TableBody>

          </Table>
      </TableContainer><br/><br/>
      <Link to='/manjob'>
      <Button variant='contained'>Add Job</Button></Link>&nbsp;

      </div>
    </div>
  )
}

export default Admindashboard