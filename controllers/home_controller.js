module.exports.home=function(req,res){

    return res.render('home',{
        title:"home"
    });
    // return res.end("<h1>controller is running</h1>");
}