var mongoose = require('mongoose');
var schema = mongoose.Schema({
    Jobname:String,
    Description:String,
    Reqirements:String,
    Location:String,
    Salary:String,
    Jobtype:String,
    Name:String
})
 var ApplyModel = mongoose.model("Appliedjobs",schema);
 module.exports=ApplyModel;