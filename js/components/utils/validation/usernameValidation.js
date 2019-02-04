export default function validateUsername(username) {
    if(username.length >= 6 && username.length <= 16) {
      return true
    } else {
      return false
    }
  }
  