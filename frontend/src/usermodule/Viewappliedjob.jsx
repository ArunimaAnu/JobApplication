import React, { useEffect, useState } from 'react'
import Navuser from './Navuser'
import { useLocation } from 'react-router-dom';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';

const Viewappliedjob = () => {
  var location = useLocation();
  var name =location.state;
  console.log(name)

  var [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/jobview")
      .then((res) => {
        // console.log(res);
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="user">
     <div class="nav">
      <Navuser></Navuser>
      <br/><br/>
     <Typography variant='h4'>List of All Applied Jobs</Typography>
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
                                           Requirements: {val.Requirements} 
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

export default Viewappliedjob