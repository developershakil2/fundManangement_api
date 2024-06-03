const express= require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
 require('dotenv').config();
 const MainRouter = require('./routes/MainRoute')
 const GetBalanceRouter = require('./routes/GetBalanceRouter')
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
mongoose.connect(process.env.DB).then(()=> console.log('db connected ')).catch((error)=>console.log(error, 'error'))
app.use((req, res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use('/', MainRouter)
app.use('/', GetBalanceRouter)

app.listen(5000,()=>{
   console.log('server runing at 5000')
})