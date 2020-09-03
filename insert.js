var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'brokensql'
});

connection.query('select 1', function (error, result, fields) {
    if(error) throw error;
});