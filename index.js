const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.routes');
const app = express()



//middleware
app.use(express.json());
//if we want send with formurl
app.use(express.urlencoded({extended:false}));


//routes
app.use('/api/products',productRoute);



//testing an api
app.get('/',(req,res)=>{
    res.send("Hello from Node API server updated");
})

mongoose.connect("mongodb+srv://chandramaadala:Lcc4nyXfK2qd4MXP@backenddb.g4tzu0m.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Connceced to databse");
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    })
})
.catch(()=>{
    console.log("Connection failed!");
})