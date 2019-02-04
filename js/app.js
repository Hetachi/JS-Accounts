import React, { Component } from "react";
import ReactDOM from "react-dom";
import LoginPage from './containers/loginPage/index'
import MainMenu from './containers/mainMenu/index'
import styles from './app.css'
import socket from './components/utils/config/socket'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loginToken: ''
    };
  }

  componentDidMount() {
    const loginToken = localStorage.getItem('exilelvLoginTokenStorage')
    localStorage && loginToken ? this.setState({loginToken}) : this.setState({loginToken: false})
  }

  render() {
    socket.on('updateLoginToken', (token)=>{
      if(token === false) {
        this.setState({loginToken: token})
        localStorage.removeItem('exilelvLoginTokenStorage')
      } else {
        this.setState({loginToken: token})
        localStorage.setItem('exilelvLoginTokenStorage', token)
      }
    })

    return (
      <div className={styles.wrapper}>
        {this.state.loginToken ? <MainMenu loginToken={this.state.loginToken} /> :  <LoginPage />}
      </div>
    )
  }
}
export default App;