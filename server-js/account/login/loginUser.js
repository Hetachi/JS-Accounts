const executeMysqlQuery = require('../../mysql/executeMysqlQuery')
const mysqlPool = require('../../mysql/mysqlPool')

module.exports = (email, password) => {
    return new Promise ( (resolve, reject) => {
        function handleAccountData(error, result, fields) {
            if(result[0] && result[0].email === email && result[0].password === password) {
                console.log('User data checks out, considering user logged in')
                resolve(true)
            } else {
                console.log('Login data incorrect')
                resolve(false)
            }
        }
        executeMysqlQuery('SELECT * FROM accounts WHERE email='+mysqlPool.escape(email)+'','', handleAccountData)
    })
}