/*eslint-disable*/
import React, {Fragment} from 'react';
import Footer from '../../footer';
import styles from './styles.css';

const Tutorial = ({ onShowMap }) => {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    document.body.style.backgroundImage = "none";
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Tutorial</h1>
            </header>
            <main className={styles.container}>
                <p className={styles.title}>Hello and welcome to Task Manager! Here’s a quick video to show you the main tips:</p>
                <div className={styles.video_container} >
                    <video className={styles.video} autoPlay="true" loop muted controls>
                        <track kind="captions"/>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
                    </video>
                </div>
            </main>
            <Footer onShowMap={onShowMap} />
        </Fragment>
    )
};

export default Tutorial;