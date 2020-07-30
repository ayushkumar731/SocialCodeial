const nodemailer=require('../config/nodemailer');

exports.newComment=(comment)=>{
    console.log('inside new Comment mailer',comment);
    nodemailer.transporter.sendMail({
        from:"kumarayush1652027@gmail.com",
        to:comment.user.email,
        subject:"new comment published",
        html:"<h1>Yup ! your comments is published</h1>"
    },(err,info)=>{
        if(err){
            console.log('error in sending mail',err);
            return;
        }
        console.log('message sent',info);
        return;
    });
}