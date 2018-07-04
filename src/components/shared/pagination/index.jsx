import React from 'react';
import PropTypes from 'prop-types';
import Button from "../button";
import { getPagesToShow } from "../../../utils/selectors";
import nextIcon from "../../../icons/next.svg";
import styles from './styles.css';


const Pagination = ({ currentPage, totalPages, onSwitchPages }) => {

    const handleSwitchPages = e => {
        e.preventDefault();
        if (e.target.textContent === "...") return;

        if (Number.parseInt === undefined)
            Number.parseInt = window.parseInt;
        const nextPage = Number.parseInt(e.target.textContent, 10);
        onSwitchPages(nextPage);
    }

    const handleLeftArrowClick = e => {
        e.preventDefault();
        const nextPage = (currentPage === 1) ? currentPage : currentPage - 1;
        onSwitchPages(nextPage);
    }

    const handleRightArrowClick = e => {
        e.preventDefault();
        const nextPage = (currentPage === totalPages) ? currentPage : currentPage + 1;
        onSwitchPages(nextPage);
    }

    const pagesToShow = getPagesToShow(currentPage, totalPages);
    
    return (
        <div className={styles.container}>
            <div className={styles.arrow_left}>
                <Button onClick={handleLeftArrowClick} type="icon" src={nextIcon} />
            </div>
            {pagesToShow.map(page => (
                <div className={styles.item} key={page}>
                    <a 
                        link="#" 
                        className={currentPage === page ? styles.page_number_active : styles.page_number}
                        onClick={handleSwitchPages}
                        role="presentation">
                        {page}
                    </a>
                </div>))}
            <div className={styles.arrow_right}>
                <Button onClick={handleRightArrowClick} type="icon" src={nextIcon} />
            </div>
        </div>
    )
}

export default Pagination;

Pagination.propTypes = {
    onSwitchPages: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired
};





