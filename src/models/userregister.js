const mongose = require("mongoose");

const userregister = new mongose.Schema({
    fullName:{
        type:String,
        required : true
    },
    emailAddress:{
        type:String,
        required : true
    },
    phone:{
        type:String,
        required : true
    },
    subject:{
        type:String,
        required : true
    },
    body:{
        type:String,
        required : true
    }
   
})

const Ragistration = new mongose.model("User_Data",userregister);

module.exports = Ragistration;