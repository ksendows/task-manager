/*eslint-disable*/
import React, {Fragment} from 'react';
import styles from './styles.css';

const Tutorial = () => {
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
                    <video className={styles.video} autoPlay="true" loop muted="true" controls>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />

                        {/* <p><a href="https://help.trello.com/article/899-getting-started-video-demo?wvideo=2xeyej8k41"><img src="https://embedwistia-a.akamaihd.net/deliveries/f48baf56018f14fcdbd73efa69bc85cc684bc64d.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=5dd3e5e0" width="400" height="225" style="width: 400px; height: 225px;"></a></p><p><a href="https://help.trello.com/article/899-getting-started-video-demo?wvideo=2xeyej8k41">NUX Banner Video MVP</a></p> */}

                    </video>
                </div>
            </main>
        </Fragment>
    )
};

export default Tutorial;