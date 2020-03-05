import React,{Fragment} from 'react';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}> <span style = {{textTransform: 'capitalize'}}>{igKey} </span> : {props.ingredients[igKey]}</li>
        })

    return (
        <Fragment>
            <h4>Your Order Summary</h4>
            <p>Your burger has the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Fragment>
    );
}

export default OrderSummary;
