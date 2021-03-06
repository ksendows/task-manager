import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/button';
import closeIcon from "../../icons/close.svg";
import styles from './styles.css';

const sortingOptions = [
    "Due date (upcoming first)",
    "Due date (distant first)",
    "Creation date (newest first)",
    "Creation date (oldest first)"
];

const getMethodFromSortOption = (option) => {
    let method;
    switch (option) {
        case sortingOptions[0]:
            method = { sortBy: "dueDate", direction: true };
            break;
        case sortingOptions[1]:
            method = { sortBy: "dueDate", direction: false };
            break;
        case sortingOptions[2]:
            method = { sortBy: "creationDate", direction: false };
            break;
        case sortingOptions[3]:
            method = { sortBy: "creationDate", direction: true };
            break;
        default:
            break;
    }
    return method;
}

export default class Sorting extends Component {
    
    static propTypes = {
        onSort: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            sortBy: 'dueDate',
            direction: true
        };
    };

    handleShowSortOptions = () => {
        this.setState({ isOpen: true});
        document.addEventListener('click', this.handleCloseSortOptions, false);
    };

    handleCloseSortOptions = () => {
        this.setState({ isOpen: false });
        document.removeEventListener('click', this.handleCloseSortOptions, false);
    }

    handelSort = (e) => {
        const option = e.target.textContent;
        const method = getMethodFromSortOption(option);
        this.setState({ 
            sortBy: method.sortBy,
            direction: method.direction,
         });
        this.props.onSort(method);
        this.handleCloseSortOptions();
    }

    render () {
        return (
            <div className={styles.wrapper}>

                {this.state.isOpen &&
                    <div className={styles.list}>

                        <div className={styles.header}>
                            <p className={styles.title}>Sort by:</p>
                            <Button onClick={this.handleCloseSortOptions} type="icon">
                                <img src={closeIcon} alt="" className={styles.iconClose} />
                            </Button>
                        </div>

                        {sortingOptions.map(option => {
                            const { sortBy, direction } = getMethodFromSortOption(option);
                            if (sortBy === this.state.sortBy && direction === this.state.direction) {
                                return (<Button 
                                            onClick={this.handelSort} 
                                            type="listLinkActive" 
                                            className={styles.a} 
                                            key={sortBy+direction}>
                                                {option}
                                            </Button>)
                            }
                            return (<Button 
                                        onClick={this.handelSort} 
                                        type="listLink" 
                                        key={sortBy+direction}>
                                            {option}
                                        </Button>)
                        })}
                    </div>
                }

                {this.state.isOpen || 
                    <Button onClick={this.handleShowSortOptions} type="icon">
                        <div className={styles.open_options}>...</div>
                    </Button>
                }
            </div>
        );
    }
};


