import React, { Component } from "react"
import ReactDOM from "react-dom"
import styles from './styles.css'

class ErrorMessage extends Component {
    constructor() {
      super();
      this.state = {

      }
    }
    render() {
        return (
            <p className={this.props.showError ? styles.error : styles.hidden}>{this.props.errorText}</p>
        )

    }
}

export default ErrorMessage;