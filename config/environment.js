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
    jwt_secret:'codeial'
}

const production={
    name:'production',
}


module.exports=development;