// const os = require('os')

// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.freemem())
// console.log(os.loadavg())
// console.log(os.networkInterfaces())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.totalmem())
// console.log(os.uptime())
// console.log(os.type())

// const path = require("path")

// const a1 = path.basename('C:\\temp\\myfile.html');
// const a2 = path.dirname('C:\\temp\\myfile.html');
// const a3 = path.extname(__filename);


// console.log(a1)
// console.log(a2)     
// console.log(a3)



import express from 'express'
// require('dotenv').config()

const app = express()

const port = 4000 ;


const jsondata = { 
name:"Parth",
lastname:"Joshi",
age:18 ,
slary:50000,
} 

app.get('/',(req,res) => {
    res.send('Hello world')
})

app.get('/Login',(req,res)=>{
    res.send('<h1>ok</h1>')
})
app.get('/parth',(req,res)=>{
    res.send(jsondata)
})


app.listen(port,() => {
    console.log(`start the port ${port}`)
})




 


