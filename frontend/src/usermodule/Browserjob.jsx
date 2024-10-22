import Navuser from './Navuser'
import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const Browserjob = () => {
  var location = useLocation();
  var name = location.state;
  // console.log(name)
  
  // var [inputs, setInputs] = useState({ Jobname: "", Description: "", Reqirements: "", Location: "", Salary: "", Jobtype: "" });
    var [jobs, setJobs] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:3005/view")
        .then((res) => {
          // console.log(res);
          setJobs(res.data);
          // setInputs({ ...inputs, [res.data.name]: res.data.value });
        })
        .catch((err) => console.log(err));
    }, []);
    
    const applyJob = (val) => {
      axios.post("http://localhost:3005/jobapply", val,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      ).then((res) => {
        console.log(res.data.message)
        alert(res.data.message);
      }).catch((err) => {
        console.log(err);
      });
    }

  return (
    <div className="user">
     <div className="nav">
      <Navuser></Navuser>
      <br/><br/>
      <Typography variant='h4'>List of All Avaliable Jobs</Typography>
<br/><br/>
      <Grid container spacing={2}>
                 {
                    jobs.map((val,i) => {
                        return ( 
                            <Grid item xs={12} md={3}>
                                <Card sx={{ maxWidth: 345, height:'100%' }} key={i}>
                                    <CardContent>
                                    <Typography sx={{ mb: 1.5 }} >
                                           Job Name: {val.Jobname} 
                                        </Typography>
                                        <Typography  sx={{ mb: 1.5 }}>                                           Description: {val.Description} 
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }}>
                                           Requirements: {val.Reqirements} 
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }}>
                                           Location:{val.Location} 
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }}>
                                           Salary:{val.Salary} 
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }}>
                                           Job Type:{val.Jobtype} 
                                        </Typography>

                                        <Button variant='contained'>SAVE</Button> &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button variant='contained' onClick={() => {applyJob(val);}}>APPLY</Button>
                                    </CardContent>

                                </Card>
                            </Grid>
                         )
                    })
                } 
            </Grid>
      </div>
    </div>
  )
}

export default Browserjob