const express=require('express');
const port=80;
const app=express();


app.listen(port,function(err){

    if(err){
        console.log(`Error in the running server : ${err}`);
    }
    console.log(`server is running on the port : ${port}`);
});