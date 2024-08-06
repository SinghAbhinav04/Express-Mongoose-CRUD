const express = require("express");
const userRouter= require( `./routes/user`)
const {connectMongoDb} = require(`./connection`)
const {logReqRes} = require(`./middlewares`)

//connection to db
connectMongoDb('mongodb://localhost:27017/person')
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>{console.log("Error =>",err)});

const app = express();
const PORT = 8000;

//MIDDLEWARE - can be thought as plugin
app.use(express.urlencoded({extended:false}))
app.use(logReqRes('log.txt'));

///api - is a good practice for letting user know that it is json file format

app.use("/api/users", userRouter);

app.listen(PORT , ()=>console.log(`Server Started!`));
