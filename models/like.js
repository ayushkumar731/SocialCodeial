const mongoose=require('mongoose');

const likeSchema=new mongoose.Schema({
    user: {
        type:mongoose.Schema.ObjectId
    },
    //this defines the object id of the liked object
    likeable: {
        type: mongoose.Schema.ObjectId,
        reuired:true,
        refPath:'onModel'
    },
    // this field is used for defining the type of the liked object this is a dynamic reference
    onModel: {
        type: String,
        reuired: true,
        enum: ['Post', 'Comment']
    }
},{
        timeStamp:true
});

const Like=mongoose.model('Like',likeSchema);
module.exports=Like;