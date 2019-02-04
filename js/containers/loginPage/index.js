import React, { Component } from "react"
import ReactDOM from "react-dom"
import styles from './style.css'
import userLogin from '../../components/utils/userLogin'
import userRegister from '../../components/utils/userRegister'
import socket from '../../components/utils/config/socket'
import validateUsername from '../../components/utils/validation/usernameValidation'
import validateEmail from '../../components/utils/validation/emailValidation'
import ErrorMessage from '../../components/atoms/showErrorMessage'

const registerData = {}
const loginData = {}

class LoginPage extends Component {
    constructor() {
      super();
      this.state = {
          showLoginForm: true,
          showRegisterFrom: false,
          isLoginError: false,
          emailError: false,
          userNameError: false,
          password1: '',
          password2: '',
          passwordError: false,
          accountExists: false,
          serverErrorMessage: ''
      }
    }
    
    render() {
        const setLoginError = ()=>{ this.setState({isLoginError: true})}
        socket.on('incorrectLoginData', ()=>{this.setState({isLoginError: true})})
        socket.on('accountExistsAlready', (message)=>{this.setState({accountExists: true, serverErrorMessage: message})})
        return (
            <div className={styles.formWrapper}>
                <ul className={styles.miniMenu}>
                    <li className={styles.miniLink} onClick={()=>{this.setState({showLoginForm: true, showRegisterFrom: false})}}>Login</li>
                    <li className={styles.miniLink} onClick={()=>{this.setState({showLoginForm: false, showRegisterFrom: true})}}>Register</li>
                </ul>

                <div className={this.state.showLoginForm ? styles.loginContainer : styles.hidden}>
                    <input className={styles.inputField} onChange={(e)=>{
                        loginData.email = e.target.value
                        this.setState({isLoginError: false})
                    }} placeholder="E-mail"/>
                    <input className={styles.inputField} onChange={(e)=>{
                        loginData.password = e.target.value
                        this.setState({isLoginError: false})
                    }} type="password" placeholder="Password"/>
                    <ErrorMessage showError={this.state.isLoginError} errorText={'Login data incorrect!'} />
                    <button className={styles.button} onClick={()=>{userLogin(loginData, setLoginError)}}>Login</button>
                </div>

                <div className={this.state.showRegisterFrom ? styles.registerContainer : styles.hidden}>
                    <input className={styles.inputField} onChange={(e)=>{
                        registerData.email = e.target.value
                        validateEmail(e.target.value) ? this.setState({emailError: false}) : this.setState({emailError: true})
                    }} placeholder="E-mail"/>
                    <ErrorMessage showError={this.state.emailError} errorText={'Incorrect E-mail address'} />

                    <input className={styles.inputField} onChange={(e)=>{
                        registerData.username = e.target.value
                        validateUsername(e.target.value) ? this.setState({userNameError: false}) : this.setState({userNameError: true})
                    }} placeholder="Display Name / Username"/>
                    <ErrorMessage showError={this.state.userNameError} errorText={'Username must be 6 - 16 characters long, and use Alphanumeric characters'} />

                    <input className={styles.inputField} type="password" onChange={(e)=>{
                        registerData.password = e.target.value
                        this.state.password1 = e.target.value
                        if(e.target.value.length > 7 && e.target.value.length < 33 && this.state.password2 === e.target.value) {
                            this.setState({passwordError: false})
                        } else { this.setState({passwordError: true}) }
                    }} placeholder="Password"/>
                    <ErrorMessage showError={this.state.passwordError} errorText={'Passwords must match and be atleast 8 - 32 characters long'} />

                    <input className={styles.inputField} type="password" onChange={(e)=>{
                        registerData.password2 = e.target.value
                        this.state.password2 = e.target.value
                        if(e.target.value.length > 7 && e.target.value.length < 33 && this.state.password1 === e.target.value) {
                            this.setState({passwordError: false})
                            console.log(e.target.value)
                        } else { this.setState({passwordError: true}) }
                    }} placeholder="Repeat your Password"/>
                    <ErrorMessage showError={this.state.passwordError} errorText={'Passwords must match and be atleast 8 - 32 characters long'} />
                    <ErrorMessage showError={this.state.accountExists} errorText={this.state.serverErrorMessage} />
                    
                    <button className={styles.button} onClick={()=>{
                        userRegister(registerData)
                        this.setState({accountExists: false})
                    }}> Register </button>
                </div>
            </div>
        )
    }
  }
  export default LoginPage;