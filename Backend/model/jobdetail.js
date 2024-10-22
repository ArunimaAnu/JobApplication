var mongoose = require('mongoose');
var schema = mongoose.Schema({
    Jobname:String,
    Description:String,
    Reqirements:String,
    Location:String,
    Salary:String,
    Jobtype:String
})
 var JobModel = mongoose.model("Jobdetails",schema);
 module.exports=JobModel;