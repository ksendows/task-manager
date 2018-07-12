import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "../button";
import { getPagesToShow } from "../../../utils/selectors";
import nextIcon from "../../../icons/next.svg";
import styles from './styles.css';


export default class Pagination extends Component {

    static propTypes = {
        onSwitchPages: PropTypes.func.isRequired,
        currentPage: PropTypes.number.isRequired,
        totalPages: PropTypes.number.isRequired
    }

    componentDidUpdate = () => 
        this.props.currentPage > this.props.totalPages && this.props.onSwitchPages(1);

    handleSwitchPages = e => {
        e.preventDefault();
        if (e.target.textContent === "...") return;

        if (Number.parseInt === undefined)
            Number.parseInt = window.parseInt;
        const nextPage = Number.parseInt(e.target.textContent, 10);
        this.props.onSwitchPages(nextPage);
    }

    handleLeftArrowClick = e => {
        e.preventDefault();
        const nextPage = (this.props.currentPage === 1) ? this.props.currentPage : this.props.currentPage - 1;
        this.props.onSwitchPages(nextPage);
    }

    handleRightArrowClick = e => {
        e.preventDefault();
        const nextPage = (this.props.currentPage === this.props.totalPages) ? this.props.currentPage : this.props.currentPage + 1;
        this.props.onSwitchPages(nextPage);
    }

    render () {
    const { currentPage, totalPages } = this.props;

    const pagesToShow = getPagesToShow(currentPage, totalPages);
        return (
            <div className={styles.container}>
                <div className={styles.arrow_left}>
                    <Button onClick={this.handleLeftArrowClick} type="icon" src={nextIcon} />
                </div>
                {pagesToShow.map((page, index) => (
                    <div className={styles.item} key={index.toString()}>
                        <a
                            link="#"
                            className={currentPage === page ? styles.page_number_active : styles.page_number}
                            onClick={this.handleSwitchPages}
                            role="presentation">
                            {page}
                        </a>
                    </div>))}
                <div className={styles.arrow_right}>
                    <Button onClick={this.handleRightArrowClick} type="icon" src={nextIcon} />
                </div>
            </div>
        )   
    }
}
