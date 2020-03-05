import React, {Component} from 'react';
import Burger from '../components/Burger/Burger'
import Aux from '../hoc/Aux'
import BurgerControls from '../components/Burger/BurgerControls/BurgerControls';
import Modal from '../components/UI/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
        veggies:0.9,
        meat:2,
        cheese:0.4,
        bacon: 0.8
}
class BurgerBuilder extends Component{
    
    state = {
        ingredients: {
            veggies:0,
            meat:0,
            cheese:0,
            bacon: 0
        }
        ,price: 3
    };

    addIngredientHandler =(type)=>{
        const startCount = this.state.ingredients[type];
        const updatedCount = startCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const ingrePrice = INGREDIENT_PRICES[type];
        const basePrice = this.state.price;
        const totalPrice = ingrePrice + basePrice
        this.setState({
            ingredients: updatedIngredients,
            price: totalPrice
        })
        console.log(totalPrice)
    };

    removeIngredientHandler =(type)=>{
        const startCount = this.state.ingredients[type];
        if(startCount <= 0){
            return;
        }
        const updatedCount = startCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const ingrePrice = INGREDIENT_PRICES[type];
        const basePrice = this.state.price;
        const totalPrice = basePrice - ingrePrice;
        this.setState({
            ingredients: updatedIngredients,
            price: totalPrice
        })
        console.log(totalPrice);
    };

    render(){
        return(
            <Aux>
                <Modal>
                <OrderSummary ingredients = {this.state.ingredients}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients} />
                <BurgerControls 
                add = {this.addIngredientHandler}  
                remove = {this.removeIngredientHandler}
                price = {this.state.price} />
            </Aux>
        );
    }
}
export default BurgerBuilder;