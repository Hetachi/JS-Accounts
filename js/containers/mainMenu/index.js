import React, { Component } from "react"
import ReactDOM from "react-dom"
import styles from './style.css'
import socket from '../../components/utils/config/socket'
class MainMenu extends Component {
    constructor() {
      super();
      this.state = {
      }
    }
    
    render() {
        const logout = () => {
            if(localStorage && localStorage.getItem('exilelvLoginTokenStorage')) {
                socket.emit('logout', localStorage.getItem('exilelvLoginTokenStorage'))
            }
        }

        return (
            <div className={styles.wrapper}>
                <div className={styles.logoutButton} onClick={logout}>X</div>
                <div>Welcome user {this.props.loginToken}</div>
            </div>
        )
    }
  }
  export default MainMenu;