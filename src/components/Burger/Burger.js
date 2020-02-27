import React from 'react';
import classes from './Burger.module.css';
import Ingredients from './Ingredients/Ingredients';

const burger = (props) =>{
    let incomingIngre = Object.keys(props.ingredients)
    .map(igKey => {
         
        return[...Array( props.ingredients[igKey] )]
        
        .map((_,i)=>{
            return <Ingredients key={igKey + i} type ={igKey} />
        });
    }).reduce((acc,el)=>{
        return acc.concat(el);
    },[]);
    if(incomingIngre.length === 0){
        incomingIngre = <p> Please Enter Ingredients</p>
    }

    

    return(
        <div className={classes.Burger}>
            <Ingredients type='bread-top'/>
            {incomingIngre}
            <Ingredients type='bread-bottom'/>
        </div>
    );
}

export default burger;
