const Post=require('../models/post');
const User=require('../models/user');

module.exports.home= async function(req,res){

    try{
            //populate the user for each post
        let posts= await Post.find({})
        .sort('-createdAt')
        .populate('user')
        .populate({
            path:'comments',
            populate:{
                path:'user'
            }
        });

        let users=await User.find({});
    
        return res.render('home',{
            title:"Home Page",
            posts:posts,
            all_users:users
        });
            
    }catch(err){
        console.log('Error',err);
        return;
    }

    

    // Post.find({},function(err,posts){

    //     return res.render('home',{
    //             title:"Home Page",
    //             posts:posts
    //         });
    // });

    // return res.render('home',{
    //     title:"Home Page"
    // });
    // return res.end("<h1>controller is running</h1>");
}
