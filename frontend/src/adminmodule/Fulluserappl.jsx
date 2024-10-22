import React, { useEffect, useState } from 'react'
import Navadmin from './Navadmin'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';

const Fulluserappl = () => {
  var [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/jobview")
      .then((res) => {
        console.log(res);
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div class="adminn">
      <div class="nav">
      <Navadmin></Navadmin>
      <br/><br/>
      <Typography variant='h4'>List of All Applicants</Typography>
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
                      <TableCell>USERNAME</TableCell>
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
                              {/* <TableCell>{val.Name}</TableCell> */}
                          </TableRow>
                             );
                            })}
              </TableBody>

          </Table>
      </TableContainer>
      </div>
    </div>
  )
}

export default Fulluserappl