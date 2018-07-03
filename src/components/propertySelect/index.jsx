import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "../shared/button";
import styles from './styles.css';

const STATUS_ARR = ['To do', 'In Process', 'On Review', 'Finished'];

const PRIORITY_ARR = ['low', 'normal', 'high'];

export default class PropertySelect extends Component {
    
    static propTypes = {
        onRadioChange: PropTypes.func.isRequired,
        property: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            [this.props.property]: this.props.value,
            isOpen: false
        };
    };

    componentDidMount = () => {
        if (window.window.innerWidth >= 470) { 
            this.setState({ isOpen: true }); 
    }};
    
    handleRadioChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value });
        this.props.onRadioChange(name, value);
    }

    handleToggleLink = e => {
        e.preventDefault();
        return this.setState({ isOpen: !this.state.isOpen });
    }

    renderRadioInput = (name, value) => (
            <label htmlFor={value} key={value}>
                <input
                    type="radio"
                    name={name}
                    value={value}
                    id={value}
                    className={styles.property}
                    checked={this.state[name] === value}
                    onChange={this.handleRadioChange} />
                {value}
            </label >
    );

    render () {
        const { property } = this.props;

        let data;
        if (property === "status") data = STATUS_ARR;
        if (property === "priority") data = PRIORITY_ARR;

        return (
        <div>
            <Button 
                onClick={this.handleToggleLink} 
                type="buttonHover">
                {`${property}: ${this.state[property]}`}
            </Button>
            {this.state.isOpen && <div className={styles.properties_container}>
                        {data.map(value => this.renderRadioInput(property, value))}
                    </div>
            }
        </div>
)};
}

