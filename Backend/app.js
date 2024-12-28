const express = require('express');
const mongoose = require('mongoose');
const endpoints = require('./routes/endpoints')
const cors = require('cors')
const app = express();


app.use(cors());
app.use(express.json());

app.get('/get', (req,res)=>{
    res.send("Chal raha hai recipe wala backend")
});

app.use(endpoints)

mongoose.connect('mongodb+srv://RecipeDB:recipe@cluster0.lcr7r.mongodb.net/RecipeDB')

.then(()=>{
    console.log("Database connected succesfully")
})
.catch((err)=>{
    console.log("Database k masala da",err)
})

app.listen(3000);

console.log("Server is running sai se")