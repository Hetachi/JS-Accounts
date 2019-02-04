const executeMysqlQuery = require('../mysql/executeMysqlQuery')
const mysqlPool = require('../mysql/mysqlPool')

module.exports = (sessionToken, socket) => {
    executeMysqlQuery('UPDATE accounts SET session="" WHERE session='+mysqlPool.escape(sessionToken)+'','',()=>{})
    socket.emit('updateLoginToken', false)
}
