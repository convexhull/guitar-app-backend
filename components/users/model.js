const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    email : {type : "String" , unique : true, required : true},
    userName : { type : "String" },
    password : { type : "String" },
    stage : { type : "Number"},
    name : { type : "String" },
    token : { type : "String" },
    refreshToke : { type : "String" }
});


const User = mongoose.model('User', userSchema);

module.exports = {
    User
}