const express=require('express');
const expressLayouts = require('express-ejs-layouts');
const cookieParser=require('cookie-parser');
const app=express();
const port=80;


const db=require('./config/mongoose');

//used for session cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const passportJWT=require('./config/passport-jwt-strategy');
const passportGoogle=require('./config/passport-google-oauth2-strategy');
const MongoStore=require('connect-mongo')(session);

const sassMiddleware=require('node-sass-middleware');

const flash = require('connect-flash');

const customMiddleWare=require('./config/middleware');

//setyup the chat server is to be used with socket.io
const chatServer=require('http').Server(app);
const chatSockets=require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(5000);
console.log('chat server is listing on port 5000')

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle:'extended',
    prefix:'/css'
}));

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

//make the uploads path available to the browser
app.use('/uploads',express.static(__dirname + '/uploads'));

app.use(expressLayouts);

//extract style and scripts from sub page of the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

//mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codieal',

    //ToDo change the secret before deployment in production mode
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    },
    store:new MongoStore({
            mongooseConnection:db,
            autoRemove:'disabled'    
    },
    function(err){
        console.log(err||'connect-mongo setup fine');
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAunthenticatedUser)

app.use(flash());
app.use(customMiddleWare.setFlash);


// use express router
app.use('/',require('./routes'));

app.listen(port,function(err){

    if(err){
        console.log(`Error in the running server : ${err}`);
    }
    console.log(`server is running on the port : ${port}`);
});