const express=require('express');
const port=80;
const app=express();

// use express router
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){

    if(err){
        console.log(`Error in the running server : ${err}`);
    }
    console.log(`server is running on the port : ${port}`);
});