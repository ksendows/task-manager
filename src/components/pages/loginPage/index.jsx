import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginForm from '../../loginForm';
import Footer from '../../footer';
import Button from "../../shared/button";
import nextIcon from "../../../icons/next.svg";
import styles from './styles.css';

const LoginPage = ( { onLogin, onRegister, onShowMap } ) => (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.arrow_back}>
          <Link to="/">
            <Button type="icon" src={nextIcon} />
          </Link>
        </div>
        <h1 className={styles.title}>Task Manager</h1>
      </header>
      <main className={styles.container}>
        <div className={styles.forms_container}>
          <LoginForm type='login' onLogin={onLogin} />
          <LoginForm type='register' onRegister={onRegister}/>
        </div>
      </main>
      <Footer onShowMap={onShowMap} />
    </div>
  );

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  onShowMap: PropTypes.func.isRequired,
};

export default LoginPage;
