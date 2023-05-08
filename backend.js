const express=require('express');
const parse = require('nodemon/lib/cli/parse');
const app=express();
const bodyParser=require("body-parser");
var nodemailer = require('nodemailer');
const { emit } = require('nodemon');
app.use(bodyParser.urlencoded({extended:true}));

/* ------------running server at localhost 3000------------------
 */


app.listen(3000,function(){
    console.log("server started at port 3000")
})

app.use('/public',express.static("public"));

/* --------------get request to home rout------------------------
 */
app.get('/',function(req,res){
    res.sendFile(__dirname+'/home.html')
})

app.get('/home',function(req,res){
    res.sendFile(__dirname+'/home.html')
})


/* -------------------get request to team page----------------------------
 */

app.get('/team',function(req,res){
    res.sendFile(__dirname+'/team.html')
})

/* -----------------get request for contact page--------------- */

app.get('/contact',function(req,res){
    res.sendFile(__dirname+'/contact.html')
})


app.get('/about',function(req,res){
    res.sendFile(__dirname+'/about.html')
})

/* ------------to handle post request from contact page------------------
 */


var name;
var subject;
var email;
var msg;

app.post('/contact',function(req,res){
    res.sendFile(__dirname+'/contact.html');
    name=req.body.Name;
    subject=req.body.subject;
    email=req.body.email;
    msg=req.body.message;
    
    /* --------nodemailer------------ */


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'amitroutard@gmail.com',
      pass: 'ggutbbhzdstpkplx'
    }
  });
  
  
  var mailOptions = {
    from: 'amitroutard@gmail.com',
    to: email,
    subject: subject,
    text: "Hello I am "+name+", "+msg
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


      /* -------nodemailer ends---------- */

})



