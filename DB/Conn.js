const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`${process.env.DB_LINK}/diary-system-db`).then(()=>{
    console.log("Connected to DB");
}).catch((e)=>{
    console.log(e);
})