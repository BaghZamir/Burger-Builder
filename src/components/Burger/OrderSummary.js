import React from 'react';
import Button from '../UI/Button';

const orderSummary = (props) => {
	const ingredients = Object.entries(props.ingredients).map(([key,val]) => (
		<li key={key}>
			<span>{key}: </span>{val}
		</li>
	));

	return (
		<>
			<a className='CloseModal' onClick={props.close}>X</a>
			<h3>Your Order Summary</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredients}</ul>
			<p className='Price'>Total Price: ${props.price.toFixed(2)}</p>
			<Button BtnType='Confirm' clicked={props.checkout}>CHECKOUT</Button>
			<Button BtnType='Cancel' clicked={props.close}>CANCEL</Button>
		</>
	);
};

export default orderSummary;