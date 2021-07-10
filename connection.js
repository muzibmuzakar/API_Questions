var mysql = require('mysql');

// database connections
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'codigo'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('MySql terkoneksi');
});

module.exports = conn ;