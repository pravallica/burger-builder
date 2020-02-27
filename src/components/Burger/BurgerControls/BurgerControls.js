import React from 'react';
import classes from './BurgerControls.module.css';
import BurgerControl from './BurgerControl/BurgerControl'

const controls = [
    {label: 'Veggies', type: 'veggies'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
]

const BurgerControls = ()=> {
    return (
        <div className={classes.BurgerControls}>
            {controls.map(ele =>{
                return <BurgerControl label={ele.label} key={ele.label}/> })}
            {/* <BurgerControl label="Veggies"/>
            <BurgerControl label="Veggies"/>
            <BurgerControl label="Veggies"/> */}
        </div>
    )
}

export default BurgerControls