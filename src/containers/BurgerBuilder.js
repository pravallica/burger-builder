import React, {Component} from 'react';
import Burger from '../components/Burger/Burger'
import Aux from '../hoc/Aux'
import BurgerControls from '../components/Burger/BurgerControls/BurgerControls';

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            veggies:0,
            meat:0,
            cheese:0,
            bacon: 0
        }
    };
    render(){
        return(
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BurgerControls />
            </Aux>
        );
    }
}
export default BurgerBuilder;