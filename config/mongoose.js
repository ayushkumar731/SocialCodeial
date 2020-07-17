const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development', {useNewUrlParser: true, useUnifiedTopology: true});

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to mongoDB'));

db.once('open',function(){
    console.log('connected to the database');
});

module.exports=db;