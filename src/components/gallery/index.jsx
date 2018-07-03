import React from 'react';
import PropTypes from 'prop-types';
import Button from "../shared/button";
import backgrounds from './backgrounds'
import closeIcon from "../../icons/close.svg";
import nextIcon from "../../icons/next.svg";
import styles from './styles.css';

const getGalleryItemStyle = (image) => ({
    backgroundImage: `url(${image})`,
});

const changeBackground = (e) => {
    const cssProperty = e.target.style.backgroundImage;
    const selectedImage = cssProperty.match(/photo\d{1,}/);
    const newBackground = backgrounds.find((imageObject) => imageObject.name === selectedImage[0]);

    document.body.style.backgroundImage = `url(${newBackground.url_big})`;
}

const Gallery = React.forwardRef((props, ref) => (
    <div ref={ref} className={styles.container}>
        <Button onClick={props.onCloseSettings} type="modalClose" src={closeIcon} />
        <div className={styles.arrow_back}>
            <Button onClick={props.onMenuBack} type="icon" src={nextIcon}/>
        </div>
        <p className={styles.title}>Change background</p>
        <hr />
        <div className={styles.gallery}>
            {backgrounds.map(background => (
                <div 
                    style={getGalleryItemStyle(background.url_small)} 
                    className={styles.item} 
                    onClick={changeBackground}
                    role="presentation"/>
            ))}
        </div>
    </div>
));

export default Gallery;

Gallery.propTypes = {
    onCloseSettings: PropTypes.func.isRequired,
    onMenuBack: PropTypes.func.isRequired
}
