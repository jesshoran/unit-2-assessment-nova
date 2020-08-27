require('dotenv').config();
// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

//mongo
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once("open", ()=>{
    console.log("connected and feelin gooooood");
})

//Database
const ToDo = require("./models/todos.js")

// Controller

const toDosController = require('./controllers/todos.js');
app.use('/', toDosController);


// listen
app.listen(PORT, () => {
    console.log('workin workin on port: ' + PORT);
});

