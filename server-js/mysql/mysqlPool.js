const mysql = require('promise-mysql')

module.exports = mysql.createPool({
  mysqlPoolLimit: 5000,
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'mycooldb'
})
