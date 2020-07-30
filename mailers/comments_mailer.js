const nodeMailer=require('../config/nodemailer');

exports.newComment=(comment)=>{
    let htmlString = nodeMailer.renderTemplate({comment: comment}, '/comments/new_comment.ejs');

    // console.log('inside new Comment mailer',comment);
    nodeMailer.transporter.sendMail({
        from:"kumarayush1652027@gmail.com",
        to:comment.user.email,
        subject:"new comment published",
        html:htmlString
    },(err,info)=>{
        if(err){
            console.log('error in sending mail',err);
            return;
        }
        console.log('message sent',info);
        return;
    });
}