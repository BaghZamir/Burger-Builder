import React from 'react';
import BurgerIngredient from './Ingredients';
import './Burger.css';

const burger = (props) => {

	const ingredientsArray = Object.keys(props.ingredients);
	const ingredientsPrep = ingredientsArray.map(ingKey => {
		return [...Array(props.ingredients[ingKey])].map((_, i) => {
			return <BurgerIngredient key={ingKey + i} type={ingKey} />
		});
	});
	let IngredientsOutput = ingredientsPrep.reduce((arr, el) => {
		return arr.concat(el);
	}, []);

	if (IngredientsOutput.length === 0){
		IngredientsOutput = <p className='FatFont'>PLEASE ADD INGREDIENTS</p>;
	}

	return (
		<section className='Burger'>
			<BurgerIngredient type="bread-top" />
			{IngredientsOutput}
			<BurgerIngredient type="bread-bottom" />			
		</section>
	);
};

export default burger;