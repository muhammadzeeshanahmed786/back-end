console.log('run')


const express = require('express');
const mongoose = require('mongoose');
const app = express();
const createUserRoutes = require('./routes/routes')
const signIn = require('./routes/routes')
// mongoose.connect("mongodb://localhost:27017/sign");
let Port = process.env.PORT || 3000
var cors = require('cors');


mongoose.connect('mongodb+srv://zeeshan:12345@cluster0.ic2wx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('===================  Database Connected ===================');
});
mongoose.connection.on('error', () => {
    console.log('=================== Database Not Connected ===================');
});
app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.use("/public", express.static("public"));

app.use('/', createUserRoutes)
app.use('/signin', signIn)



app.listen(Port, () => {
    console.log('Port Start')
})