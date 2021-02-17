import React, {Component} from 'react';
import Burger from '../components/Burger/Burger';
import Modal from '../components/UI/Modal';
import OrderSummary from '../components/Burger/OrderSummary';
import BuildControls from '../components/Burger/BuildControls';

const INGREDIENT_PRICES = {
	salad: 0.3,
	bacon: 1,
	cheese: 0.7,
	meat: 2
};

class BurgerBuilder extends Component{
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4,
		unpurchasable: true,
		modalStatus: ''
	}

	showOrder = () =>{
		this.setState({modalStatus: 'Open'});
	}

	hideOrder = () =>{
		this.setState({modalStatus: ''});
	}

	checkoutHandler = () => {
		alert('Thank you for buying!');
	}

	updatePurchaseState = (ingredients) => {
		const check = Object.values(ingredients).every(q => q === 0);
		this.setState({unpurchasable: check});
	}

	addIngredientHandler = (type) => {
		const newCount = this.state.ingredients[type] + 1;
		const updatedIngredients = {...this.state.ingredients};
		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

		updatedIngredients[type] = newCount;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients, });

		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
		if (this.state.ingredients[type] <= 0) return;
		const newCount = this.state.ingredients[type] - 1;
		const updatedIngredients = {...this.state.ingredients};
		const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

		updatedIngredients[type] = newCount;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients, });

		this.updatePurchaseState(updatedIngredients);
	}

	render(){
		const disableBtn = {
			...this.state.ingredients
		};
		for (let key in disableBtn){
			disableBtn[key] = disableBtn[key] <= 0;
		}
		return (
			<>
				<Modal activate={this.state.modalStatus} close={this.hideOrder}>
					<OrderSummary ingredients={this.state.ingredients} close={this.hideOrder}
						checkout={this.checkoutHandler} price={this.state.totalPrice} />
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					add={this.addIngredientHandler}
					remove={this.removeIngredientHandler}
					disable={disableBtn}
					price={this.state.totalPrice}
					purchasable={this.state.unpurchasable}
					showOrder={this.showOrder} />
			</>
		);
	}
}

export default BurgerBuilder;