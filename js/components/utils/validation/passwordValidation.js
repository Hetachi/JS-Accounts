export default function validatePassword(password, password2) {
    if(password.length >= 8 && password === password2 && password.length < 32) {
      return true
    } else {
      return false
    }
  }