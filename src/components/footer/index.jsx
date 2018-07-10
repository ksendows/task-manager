import React from 'react';
import PropTypes from 'prop-types'; 
import Button from '../shared/button';
import facebook from '../../icons/facebook.svg';
import instagram from '../../icons/instagram.svg';
import twitter from '../../icons/twitter.svg';
import styles from './styles.css';

const Footer = ({ onShowMap }) => (
        <footer className={styles.sticker}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <p>TASK MANAGER</p>
                    <adress className={styles.info}>Adress: Kiev, Politechnicheskaya&nbsp;Str.&nbsp;6</adress>
                    <Button className={styles.map} onClick={onShowMap} type="mapLink">HOW TO FIND US:</Button>
                    <a href="tel:+1(234)666-02-66" className={styles.info}>Phone: +1 (234) 666-02-66</a>
                </div>
                <div className={styles.column}>
                    <p className={styles.title}>JOIN US!</p>
                    <div className={styles.socials_container}>
                        <div className={styles.socials_item}>
                            <a href="https://www.facebook.com" className={styles.logo_container} target="blank">
                                <img src={facebook} className={styles.logo} alt="facebook" />
                            </a>
                        </div>
                        <div className={styles.socials_item}>
                            <a href="https://www.instagram.com" className={styles.logo_container} target="blank">
                                <img src={instagram} className={styles.logo} alt="instagram" />
                            </a>
                        </div>
                        <div className={styles.socials_item}>
                            <a href="https://www.twitter.com" className={styles.logo_container} target="blank">
                                <img src={twitter} className={styles.logo} alt="twitter" />
                            </a>
                        </div>
                    </div>
                </div>                      
                <div className={styles.column}>
                    <p className={styles.title}>made by</p>
                    <a href="https://github.com/ksendows" className={styles.author} target="blank">Ksenia Gromakovska</a>
                </div>
            </div>
        </footer>
    );

export default Footer;

Footer.propTypes = {
    onShowMap: PropTypes.func.isRequired
}
