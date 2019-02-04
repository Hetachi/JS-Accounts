const executeMysqlQuery = require('../../mysql/executeMysqlQuery')
const mysqlPool = require('../../mysql/mysqlPool')

module.exports = (username, email) => {
  return new Promise ( (resolve, reject) => {
    function doesAccountExist(error, results, fields) {
      console.log('Fetching account info for registration... found:')
      console.log(results)
      if(results.length > 0) {
        resolve(true)
      } else {
        resolve(false)
      }
    }
    executeMysqlQuery('SELECT * FROM accounts WHERE email='+mysqlPool.escape(email)+' OR username='+mysqlPool.escape(username)+'','', doesAccountExist)
  })
}
