var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', 
    database: 'week11'
});

connection.connect();

connection.query('select * from customer', function (error, result, fields) {
    if(error) throw error;
    console.log('userinfo', results[0].customer);
});

connection.end();