module.exports.profile=function(req,res){

    return res.render('user_profile',{
        title:"profile"
    });

    // return res.send('<h1>profile is running</h1>');
}