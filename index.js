const express=require('express');
const expressLayouts = require('express-ejs-layouts');
const port=80;
const app=express();

app.use(express.static('./assets'));
app.use(expressLayouts);

//extract style and scripts from sub page of the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

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