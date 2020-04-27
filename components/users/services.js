const User = require('./model');

const insertUser = (user) => {
    let userDocument = new User(user);
    return userDocument.save();
}



module.exports = {
    insertUser
}