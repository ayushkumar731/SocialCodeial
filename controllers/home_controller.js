const Post=require('../models/post');
const User=require('../models/user');

module.exports.home=function(req,res){

    // Post.find({},function(err,posts){

    //     return res.render('home',{
    //             title:"Home Page",
    //             posts:posts
    //         });
    // });

    //populate the user for each post
    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    
    .exec(function(err,posts){

        User.find({},function(err,users){
            return res.render('home',{
                title:"Home Page",
                posts:posts,
                all_users:users
        });
        
        });
    });


    // return res.render('home',{
    //     title:"Home Page"
    // });
    // return res.end("<h1>controller is running</h1>");
}
