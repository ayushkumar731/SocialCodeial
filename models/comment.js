const mongoose = require('mongoose');

const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },

    //commets belongs to the user
    
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }

},{
    timestamps:true
});

const comment=mongoose.model('comment',commentSchema);

module.exports=comment;