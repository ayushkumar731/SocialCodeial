const Post=require('../models/post');


module.exports.home=function(req,res){

    // Post.find({},function(err,posts){

    //     return res.render('home',{
    //             title:"Home Page",
    //             posts:posts
    //         });
    // });

    //populate the user for each post
    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
            title:"Home Page",
            posts:posts
        });
    })

    // return res.render('home',{
    //     title:"Home Page"
    // });
    // return res.end("<h1>controller is running</h1>");
}
