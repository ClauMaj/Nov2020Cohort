
const pbkdf2 = require('pbkdf2');
const crypto = require('crypto');


// user password register
let password = 'some user password';

// 20 random chars
let salt = crypto.randomBytes(20).toString('hex');



//hash a combination of password and salt
let key = pbkdf2.pbkdf2Sync(password,salt, 3600,256,'sha256');


// make the pass a string after hash
let hash = key.toString('hex')

//store the pass
let stored_pass = `pbkdf2_sha256*3600*${salt}*${hash}*`
console.log(stored_pass);


//----------------------------------------------------------------------------------------------------------


/////// a person logging in


// split the pass from the database to retrieve method , salt, hasedPass
let pass_parts = stored_pass.split('*');
console.log(pass_parts);

// new login
userInputPass = 'some user password';

// hash the entered password using the same arguments ike when it was created
let keyCheck = pbkdf2.pbkdf2Sync(userInputPass,pass_parts[2],parseInt(pass_parts[1]),256,'sha256');
let hashKeyCheck = keyCheck.toString('hex')

// compare passwords
console.log(hashKeyCheck===pass_parts[3]);