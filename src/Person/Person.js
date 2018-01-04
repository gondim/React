import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = props => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>{props.name}</p>
            {props.children}

            <input type="text" onChange={props.changed} />
        </div >
    );
};

export default Radium(person);