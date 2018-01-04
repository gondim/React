import React from 'react';
import classes from './cockpit.css'


const cockpit = props => {

    const lintclasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        lintclasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        lintclasses.push(classes.bold);
    }


    return (
        <div className={classes.cockpit}>
            <button
                className={btnClass}
                onClick={props.clicked}>aparecer bagulhos</button>
        </div>
    );
};

export default cockpit;