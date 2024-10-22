var mongoose = require('mongoose');
var schema = mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    Role:String
})
 var ProfileModel = mongoose.model("profile",schema);
 module.exports=ProfileModel;