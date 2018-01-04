import React from 'react';
import classes from './Person.css';
import Radium from 'radium';

const person = props => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>{props.name}</p>
            {props.children}

            <input type="text" onChange={props.changed} />
        </div >
    );
};

export default Radium(person);