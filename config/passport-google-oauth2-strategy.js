const passport=require('passport');
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto');
const User=require('../models/user');


//tell passport to use a new strategy for google login
passport.use(new googleStrategy({
        clientID: "271397630882-n1f91p537ef6u26q0hjcqa387p285njr.apps.googleusercontent.com",
        clientSecret: "psUYvQhK9_f1KaHWRKLhZsz7",
        callbackURL: "http://localhost/users/auth/google/callback",
    },
    function(accessToken,refreshToken,profile,done){

        //find a user
        User.findOne({email: profile.emails[0].value}).exec(function(err,user){
            if(err){
                console.log('error in google strategy passport',err);
                return;
            }
            console.log(accessToken, refreshToken);
            console.log(profile);
            if(user){
                //if found ,set the user as req.user
                return done(null,user);
            }else{
                // if not found create the user and set the user as req.user
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                },function(err,user){
                    if(err){
                        console.log('error in google strategy passport',err);
                        return;
                    }
                    return done(null,user);
                });
            }
        });
    }

));


module.exports=passport;