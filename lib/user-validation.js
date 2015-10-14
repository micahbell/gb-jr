module.exports = {

  signUp: function(username, email, password, confirm, duplicateError) {
    var errorArray = [];
    if(username === '' || email === '' || password === '' || confirm === '') {
      errorArray.push('All fields must be filled in.');
    };
    if(password != confirm) {
      errorArray.push('Passwords must match.');
    };
    if(password.length < 2) {
      errorArray.push('Password must be at least 8 character in length.');
    };
    if(duplicateError > 0) {
      errorArray.push('There is already an account associated with that email address.');
    };
    return errorArray;
  },

  existingUser: function(email, cb) {
    var db = require('monk')(process.env.LOCAL_DB),
        users = db.get('users'),
        duplicate = 0;

    users.findOne({ email: email }).then(function(user) {
      if(user) { duplicate = 1; };
      cb(duplicate);
    });
  }
};






//
