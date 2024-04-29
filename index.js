const { log } = require('console');
const express = require('express');
const path = require('path');
const qrcode = require('qrcode');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views"))


app.get('/',(req,res)=>{

      res.render("index")

});
app.post('/scan',(req,res)=>{

   let qrcodedatas = req.body.qrcodedata;
   console.log(qrcodedatas);
   qrcode.toDataURL(qrcodedatas,(err,datass)=>{
      res.render("qrimage", {pic:datass})
   })


});

app.listen(3040 , ()=>{
   console.log("port connected");
})