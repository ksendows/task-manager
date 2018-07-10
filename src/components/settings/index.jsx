/*eslint-disable*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Gallery from '../gallery';
import Button from "../shared/button";
import closeIcon from "../../icons/close.svg";
import styles from './styles.css';

export default class Settings extends Component {

    static propTypes = {
        onCloseSettings: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            isGalleryShown: false,
        };
        this.gallery = React.createRef();
        this.container = React.createRef();
        this.animateOpenSideMenu = this.animateOpenSideMenu.bind(this);
        this.animateCloseSideMenu = this.animateCloseSideMenu.bind(this);
        this.handleOpenChangeBackground = this.handleOpenChangeBackground.bind(this);
    }

    componentDidMount() {
        this.animateOpenSideMenu();
    }

    animateOpenSideMenu() {
        setTimeout(() => {
            this.container.current.style.transform = "translate(0%, 0%)";
        }, 0);
    }

    animateCloseSideMenu = () => {
        this.container.current.style.transform = "translate(300%, 0%)";
        setTimeout(() => {
            this.props.onCloseSettings();   
        }, 400);
    };

    handleOpenChangeBackground = () => {
        this.setState({ isGalleryShown: true});
        setTimeout(() => {
            this.gallery.current.style.transform = "translate(0%, 0%)";
        }, 0);
    };

    handleMenuBack = () => {
        this.gallery.current.style.transform = "translate(100%, 0%)";
        setTimeout(() => {
            this.setState({ isGalleryShown: false });
        }, 400);
    }

    render() {
        const { isGalleryShown } = this.state;

        return (
            <div ref={this.container} className={styles.container}>
                <Button onClick={this.animateCloseSideMenu} type="modalClose" src={closeIcon} />

                <p className={styles.title}>Settings</p>
                <hr />
                <ul className={styles.menu_list}>
                    <li>
                        <Button type="buttonHover" onClick={this.handleOpenChangeBackground}>Change background</Button>
                    </li>
                    <li>
                        <Button type="buttonHover">Other settings ...</Button>
                    </li>
                </ul>

                {isGalleryShown && 
                    <Gallery 
                        ref={this.gallery} 
                        onCloseSettings={this.animateCloseSideMenu}
                        onMenuBack={this.handleMenuBack}/>}
            </div>   
        );
    }
}



