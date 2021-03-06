import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

class Slider extends Component {
    constructor () {
        super();
        this.slide0 = React.createRef();
        this.slide1 = React.createRef();
        this.slide2 = React.createRef();
        this.slide3 = React.createRef();
        this.slide4 = React.createRef();
        this.slides = [this.slide0, this.slide1, this.slide2, this.slide3, this.slide4];
        this.index = 0;
        this.sliderTimerId = null;
        this.time = 5000;
        this.timePassed = 0;
        this.timePaused = 0;
        this.timeStart = null;
        this.timePauseStart = null;
        this.controlSlide = this.controlSlide.bind(this);
        this.pause = this.pause.bind(this);
        this.run = this.run.bind(this);
    }

    componentDidMount() {
        this.sliderTimerId = setTimeout(this.controlSlide, this.time);
        this.timeStart = new Date(); 
    }

    componentWillUnmount () {
        this.pause();
    }

    slide (currentSlide, nextSlide) {
        /* eslint-disable no-param-reassign */
        nextSlide.style.left = "100%";
        nextSlide.style.display = "block"; 

        this.sliderTimerId = setTimeout(() => {
            currentSlide.style.left = "-100%";
            nextSlide.style.left = "0%";

            this.timePassed = 0;
            this.timePaused = 0;
        }, 200);
        this.sliderTimerId = setTimeout(() => {
            currentSlide.style.display = "none";
        }, 600);
    }

    controlSlide () {
        if (this.index < this.slides.length - 1) {
            this.slide(this.slides[this.index].current, this.slides[this.index + 1].current);
            this.index += 1;
        } else {
            this.index = 0;
            this.slide(this.slides[this.slides.length - 1].current, this.slides[this.index].current);
        }
        this.timeStart = new Date();
        this.sliderTimerId = setTimeout(this.controlSlide, this.time);
    }

    pause () {
        clearInterval(this.sliderTimerId);
        this.timePauseStart = new Date();
        this.timePassed = this.timePauseStart - this.timeStart - this.timePaused;
    }

    run () {
        if (this.timePassed > 0 && this.timePassed < this.time) {
            this.timePaused += (new Date() - this.timePauseStart);
            this.sliderTimerId = setTimeout(this.controlSlide, this.time - this.timePassed);
        } else {
            this.controlSlide();
        }
    }

    render () {
        return (
        <Fragment>
            <div className={styles.slider} >
                <div className={styles.wrapper}>
                        <div className={styles.slide0} ref={this.slide0} />
                        <div className={styles.slide1} ref={this.slide1} />
                        <div className={styles.slide2} ref={this.slide2} />
                        <div className={styles.slide3} ref={this.slide3} />
                        <div className={styles.slide4} ref={this.slide4} />
                </div>
            </div>
            <div className={styles.text_wrapper}>
                <Link to="/login" className={styles.text} onMouseOver={this.pause} onMouseOut={this.run}>
                    Please log-in to start using task manager.
                </Link>
            </div>
        </Fragment>
        )
    }
};

export default Slider;
