const mongose = require("mongoose");

mongose.connect("mongodb+srv://RitikMangal:somya1234@cluster0.qfvzrxp.mongodb.net/portfolio").then(()=>
    console.log("connection successful..")
).catch((err)=>console.log("connection not successful"))