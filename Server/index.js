const express = require ('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Contact = require("./models/Contact");
//middleware
app.use(cors());
app.use(express.json());


app.listen(4003,()=>{
    console.log("Server is live at port 4003");
})

app.get('/contact',async(req,res) =>{
    const alldata = await Contact.find({});
    console.log(alldata);
    res.send(alldata);
    //Data sent to client Side 
});

app.post('/contact',async(req,res)=>{
    console.log(req.body);
    res.send({msg:'Data Recieved',data:req.body});
    await Contact.create({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
});

mongoose.connect('mongodb+srv://shubhamsubbi1:Shubham08@cluster0.zgdpsm0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("connection succesfull");
})
.catch((err)=>{
    console.log("Connection failed ");
    console.log(err);
});

