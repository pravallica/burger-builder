import React from 'react';
import classes from './BurgerControls.module.css';
import BurgerControl from './BurgerControl/BurgerControl'

const controls = [
    {label: 'Veggies', type: 'veggies'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
]

const BurgerControls = (props)=> {
    return (
        <div className={classes.BurgerControls}>
            <p>Your burger price is: {props.price.toFixed(2)}</p>
            {controls.map(ele =>{
                return <BurgerControl 
                label={ele.label} 
                key={ele.label}
                added ={props.add.bind(this,ele.type)}
                removed = {() => props.remove(ele.type) }/> })}
            {/* <BurgerControl label="Veggies"/>
            <BurgerControl label="Veggies"/>
            <BurgerControl label="Veggies"/> */}
            <button> ORDER NOW </button>
        </div>
    )
}

export default BurgerControls