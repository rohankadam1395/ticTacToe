const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());


app.get('/data',(req,res)=>{
    res.send("Check");
})
app.get('/api',(req,res)=>{
   // console.log(req);
    res.send("Helllo Fro api");
})

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    const path=require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })

}


var port=process.env.PORT||5000;
app.listen(port,()=>{
console.log(`Listening on port ${port}`);
});
