
let db = require('./models/index');
const user = require('./models/user');

// db.user.create({
//     firstName: 'Claude',
//     lastName: 'Maj',
//     email: 'claude@me.com'
// });

// db.user.create({
//     firstName: 'Veronica',
//     lastName: 'Joe',
//     email: 'Jje@me.com'
// });

// db.user.create({
//     firstName: 'Adam',
//     lastName: 'Zach',
//     email: 'adam@me.com'
// });

// db.user.create({
//     firstName: 'Kim',
//     lastName: 'Long',
//     email: 'kim@me.com'
// });

// db.user.findAll()
// .then (records => {
//     console.log(records);
// });

// db.user.destroy({where: {id: 3 }})
// .then(numRowsDeleted => {
//     if(numRowsDeleted >=1) {
//         console.log(`${numRowsDeleted} rows deleted!`);
//     }
// })

db.blogs.findAll({
    where: {userID: 1},
    include:[{
        model: db.user,
        required: true,
        // where: {firstName: 'Claude'}
    }]
})
.then(records => {
    records.forEach((item) => {
        console.log(item.title, item.user.firstName, item.user.lastName);
    })
})