import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Redirect } from 'react-router-dom';
import validateFields from '../../utils/validators';
import Button from '../shared/button/';
import Input from '../shared/input/';
import styles from './styles.css';


const INITIAL_STATE = {
  user: {
    name: '',
    login: '',
    password: ''
  },
  isValid: {
    name: {
      fieldIsValid: false,
      error: 'Please enter your name'
    },
    login: {
      fieldIsValid: false,
      error: ''
    },
    password: {
      fieldIsValid: false,
      error: ''
    }
  },
  isValidating: false, 
  isRegisterForm: false,
  redirectToMain: false,
  authenticationError: ''
};

export default class LoginForm extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['login', 'register']).isRequired,
    onLogin: PropTypes.func,
    onRegister: PropTypes.func
  };

  static defaultProps ={
    onLogin: () => {},
    onRegister: () => {}
  };

  constructor(props) {
    super(props);   
    this.state = { ...INITIAL_STATE };
    if (this.props.type === "register") this.state.isRegisterForm = true;
  };

  setErrorMessage = () => {
    if (!this.state.isValidating) return this.state.authenticationError;

    let errorMessage;

    const { login, password } = this.state.isValid;

    if (!login.fieldIsValid && !password.fieldIsValid)
      return "Password is too short and login is not an email"
    if (this.state.isRegisterForm) {
      Object.keys(this.state.isValid).forEach(field => {
        if (!this.state.isValid[field].fieldIsValid) 
          errorMessage = this.state.isValid[field].error;
      });
      return errorMessage;
    }

    return (login.fieldIsValid ? password.error : login.error);   
  }

  isValidationPassed() {
    const { name, login, password } = this.state.isValid;
    const result = this.props.type === "register"
                  ? name.fieldIsValid && login.fieldIsValid && password.fieldIsValid
                  : login.fieldIsValid && password.fieldIsValid;
    return result;
  } 

  handleLoginSubmit = e => {
    e.preventDefault();

    if (!this.isValidationPassed()) {
      return;
    }

    const user = {
      login: this.state.user.login,
      password: this.state.user.password
    }

    const reply = this.props.onLogin(user);

    if(reply.error) {
      this.setState(() => ({
        authenticationError: reply.error
      }))
    } else 
      this.setState(() => ({
        redirectToMain: true
    }))

    this.setState(() => ({
      isValidating: false
    }))

    if (localStorage.getItem('background'))
      document.body.style.backgroundImage = `url(${localStorage.getItem('background')})`;
  };

  handleRegisterSubmit = e => {
    e.preventDefault();

    if (!this.isValidationPassed()) {
      return;
    }

    const newUser = {
      name: this.state.user.name,
      login: this.state.user.login,
      password: this.state.user.password
    }

    const reply = this.props.onRegister(newUser);

    if (reply.error) {
      this.setState(() => ({
        authenticationError: reply.error
      }))
    } else 
      this.setState(() => ({
        redirectToMain: true
    }));

    this.setState(() => ({
      isValidating: false
    }))

  };

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    const { validationPassed, error } = validateFields(name, value);
  
    this.setState({ 
      // true попробовать !!!!!!!!!!!
      isValidating: name === "login" || name === "password",
      user: {
        ...this.state.user,
        [name]: value
      },
      isValid: {
        ...this.state.isValid,
        [name]: {
          fieldIsValid: validationPassed,
          error
      }
     }});
  };

  render() {
    const { redirectToMain } = this.state

    if (redirectToMain) {
      return <Redirect to='/' />
    }

    const { isRegisterForm } = this.state;

    const buttonType = (!this.isValidationPassed()) ? "buttonDisabled" : "submit";
    const submitTitle = (isRegisterForm) ? "Register" : "Login";
    const submitFunc = (isRegisterForm) ? this.handleRegisterSubmit : this.handleLoginSubmit;

    return (
      <form className={styles.form} onSubmit={submitFunc}>
        <div className={styles.inputs_container}>
          {isRegisterForm &&
            <label htmlFor="name" className={styles.label}>
              <span className={styles.input_title}>Name:</span>
              <Input
                type="text"
                id="name"
                name="name"
                value={this.state.user.name}
                onChange={this.handleInputChange} />
            </label>
          }
          <label htmlFor="login" className={styles.label}>
            <span className={styles.input_title}>Login(email):</span>
            <Input
              type="text"
              id="login"
              name="login"
              value={this.state.user.login}
              onChange={this.handleInputChange} />
          </label>
          <label htmlFor="password" className={styles.label}>
            <span className={styles.input_title}>Password:</span>
            <Input
              type="password"
              id="password"
              name="password"
              value={this.state.user.password}
              onChange={this.handleInputChange}
              minLength="6"
              placeholder="6 characters minimum" />
          </label>
        </div>
        <div className={styles.error}>{this.setErrorMessage()}</div>
        <Button type={buttonType} onClick={submitFunc}>{submitTitle}</Button>
      </form>
      );
    }
  }


