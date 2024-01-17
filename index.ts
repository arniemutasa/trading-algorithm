const express = require("express")
require("dotenv").config();



const app = express();

const port = process.env.PORT || 4444;



app.listen(port, ()=>{
    console.log("Server running on port: ", port)
})