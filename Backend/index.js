// import express
const express = require('express')
require("./connection")
//import cors
const cors = require('cors')
//import models
var logModel = require('./model/logindet')
var JobsModel = require('./model/jobdetail')
var AppliedModel = require('./model/appliedjob')
var ProfileModel = require('./model/profile')
// 2. initialize and ....
const app = new express()
// middleware
app.use(express.json())
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true
}
app.use(cors(corsOptions))
// 3. Api creation
app.get('/', (req, res) => {
  res.send('Welcome')
})
// 4. set a port
app.listen(3005, () => {
  console.log('port is running')
})
//api to add login details
app.post("/loginadd", async (req, res) => {
  try {
    await logModel(req.body).save();
    res.send({ message: "Data added!!" });
  } catch (error) {
    console.log(error);
  }
});

// api to view login details
app.get("/loging", async (req, res) => {
  try {
    // const { Email } = req.body;
    var data = await logModel.find({ });
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//api to add jobs by admin details
app.post("/jobadd", async (req, res) => {
  try {
    await JobsModel(req.body).save();
    res.send({ message: "Job added!!" });
  } catch (error) {
    console.log(error);
  }
});
// to update job by admin
app.put("/edit/:id", async (req, res) => {
  try {
    var data = await empModel.findByIdAndUpdate(req.params.id, req.body);
    res.send({message:'updated successfully',data})
  } catch (error) {
    console.log(error)
  }
});

//to view all jobs
app.get("/view", async (req, res) => {
  try {
    var data = await JobsModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//to delete
app.delete("/remove/:id", async (req, res) => {
  try {
     await JobsModel.findByIdAndDelete(req.params.id)
     res.send({message:"Deleted successfully!!!"})
  } catch (error) {
      console.log(error)
  }
});
//to apply job
app.post("/jobapply", async (req, res) => {
  try {
    await AppliedModel(req.body).save();
    res.send({ message: "Job applied!!" });
  } catch (error) {
    console.log(error);
  }
});
//to view applied jobs
app.get("/jobview", async (req, res) => {
  try {
    var data = await AppliedModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//to add to profile
app.post("/profileadd", async (req, res) => {
  try {
    await ProfileModel(req.body).save();
    res.send({ message: "Profile updated" });
  } catch (error) {
    console.log(error);
  }
});
//to view profile
app.get("/profileview", async (req, res) => {
  try {
    var data = await ProfileModel.findBy();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
//findOne({name: new RegExp('^'+name+'$', "i")}, function(err, doc)
