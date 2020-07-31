const Post=require('../models/post');
const User=require('../models/user');

module.exports.home= async function(req,res){

    try{
             // CHANGE :: populate the likes of each post and comment

        let posts= await Post.find({})
        .sort('-createdAt')
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            },
            populate: {
                path: 'likes'
            }
        }).populate('comments')
        .populate('likes');


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
