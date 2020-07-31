const fs=require('fs');
const rfs= require('rotating-file-stream');
const path = require('path');

const logDirectory=path.join(__dirname,'../production_logs');
fs.existsSync(logDirectory)|| fs.mkdirSync(logDirectory);

const accessLogStream=rfs.createStream('access.log',{
  interval:'1d',
  path:logDirectory
});


const development={
    name:'development',
    asset_path:'./assets',
    session_cookie_key:'blahsomething',
    db:'codeial_development',
    smtp:{
        service:'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'kumarayush1652027', // generated ethereal user
          pass: 'Yaadnhhai@731', // generated ethereal password
        },
      },
    google_client_id: "271397630882-n1f91p537ef6u26q0hjcqa387p285njr.apps.googleusercontent.com",
    google_client_secret: "psUYvQhK9_f1KaHWRKLhZsz7",
    google_call_back_url: "http://localhost/users/auth/google/callback",
    jwt_secret:'codeial',
    morgan:{
      mode:'dev',
      options:{stream:accessLogStream}
    }
}

const production={
    name:'production',
    asset_path:process.env.CODEIAL_ASSET_PATH,
    session_cookie_key:process.env.CODEIAL_SESSION_COOKIE_KEY,
    db:process.env.CODEIAL_DB,
    smtp:{
        service:'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.CODEIAL_GMAIL_ID, // generated ethereal user
          pass: process.env.CODEIAL_GMAIL_PASSWORD, // generated ethereal password
        },
      },
    google_client_id: process.env.CODEIAL_GOOGLE_CLIENT_ID,
    google_client_secret: process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
    google_call_back_url:process.env.CODEIAL_GOOGLE_CALL_BACK_URL,
    jwt_secret:process.env.CODEIAL_JWT_SECRET,
    morgan:{
      mode:'combined',
      options:{stream:accessLogStream}
    }
}


module.exports=eval(process.env.CODEIAL_ENVIRONMENT)==undefined ? development : eval(process.env.CODEIAL_ENVIRONMENT);