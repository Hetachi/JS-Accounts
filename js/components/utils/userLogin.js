import socket from './config/socket'
import validateEmail from './validation/emailValidation'
import validateUsername from './validation/usernameValidation'
import validatePassword from './validation/passwordValidation'

export default (loginData, setLoginError) => {
    const { email, password } = loginData
    const username = false
    if(validateEmail(email) && validatePassword(password, password)) {
      socket.emit('login', {username, email, password})
    } else {
      setLoginError()
    }
  }