/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "../shared/button";
import closeIcon from "../../icons/close.svg";
import styles from './styles.css';

export default class SideMenu extends Component {

    static propTypes = {
        // title: PropTypes.string.isRequired,
        // todos: PropTypes.arrayOf(PropTypes.shape({
        //     id: PropTypes.string.required,
        //     task: PropTypes.string.isRequired,
        //     dueDate: PropTypes.string.isRequired,
        //     priority: PropTypes.oneOf(['low', 'normal', 'high']).isRequired
        // })).isRequired,
        // onDeleteTodo: PropTypes.func.isRequired,
        // onAddTodo: PropTypes.func.isRequired,
        // onEditTodo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    // handleSort = (sortMethod) => this.setState({ sortBy: sortMethod });

    // handleSwitchPages = (nextPage) => this.setState({ currentPage: nextPage });

    render() {

        // const {  } = this.props;
        // const {  } = this.state;

        return (
            <div className={styles.sideMenu}>
                <Button onClick={this.handleCloseModal} type="modalClose">
                    <img src={closeIcon} alt="" className={styles.iconClose} />
                </Button>

                <p className={styles.title}>Menu</p>
                <hr />
                <ul>
                    <li>
                        <Button type="linkButton">Change background</Button>
                    </li>
                </ul>
            </div>
        );
    }
}





