const e = require('express');
var express = require('express');
var router = express.Router();

const credentials ={
    email: 'admin@gmail.com',
    password: 'admin123'
}

//Login Users
router.post('/login',(req, res)=>{
    //console.log(req.body)


    if(req.body.email == credentials.email&&req.body.password== credentials.password){
        req.session.user = req.body.email;
        // res.redirect("/dashboard");
        res.end("Login success...!");
    }

    else{
        res.end("Invalid Username")
    }
})

module.exports = router;