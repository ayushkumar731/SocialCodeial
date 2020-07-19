module.exports.home=function(req,res){

    return res.render('home',{
        title:"Home Page"
    });
    // return res.end("<h1>controller is running</h1>");
}
