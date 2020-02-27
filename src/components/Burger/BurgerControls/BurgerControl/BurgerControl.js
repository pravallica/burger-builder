import React from 'react';
import classes from './BurgerControl.module.css'
const BurgerControl = (props) => {
    return (
        <div className={classes.BurgerControl}>
            <div className={classes.Label}>{props.label}</div>
            <button onClick = {props.added} className={classes.Add}>Add</button>
            <button onClick = {props.removed} className={classes.Remove}>Remove</button>
        </div>
    );
}

export default BurgerControl;
