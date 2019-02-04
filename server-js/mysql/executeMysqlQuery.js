const mysqlPool = require('./mysqlPool')

module.exports = (sqlQuery, customSuccessMessage, callback) => {
  mysqlPool.query(sqlQuery, (error, results, fields)=>{
    callback(error, results, fields)
  })
}
