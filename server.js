const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const {v4:uuidv4} = require('uuid');

const router = require("./router.js");

const port = process.env.PORT||3000;

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

//initialize engine set
app.set("view engine","ejs");

//load static assets
app.use("/static", express.static(path.join(__dirname,"public")));
app.use("/assets", express.static(path.join(__dirname,"public/assets")));
app.use(session({
    secret:uuidv4(),
    resave: false,
    saveUninitialized: true,
}));

app.use("./route",router);

// home route 

app.get('/',(req, res) => {    //takes you to base or home page
    res.render('base',{title: "Login System"});
}) 

app.listen(port, ()=> {console.log("listening on http://localhost:3000/")})