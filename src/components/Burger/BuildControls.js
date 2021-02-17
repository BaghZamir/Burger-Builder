import React, {Component} from 'react';
import Controls from './Controls';
import './BuildControls.css';

const BuildControls = (props) => {

	const controlsArr = [
		{label: 'Salad', type: 'salad'},
		{label: 'Bacon', type: 'bacon'},
		{label: 'Cheese', type: 'cheese'},
		{label: 'Meat', type: 'meat'}
	]

	return(
		<div className='BuildControls'>
			<p className='Price'>Price: ${props.price.toFixed(2)}</p>
			{controlsArr.map(ctrl => (
				<Controls
					key={ctrl.label}
					label={ctrl.label}
					added={() => props.add(ctrl.type)}
					removed={() => props.remove(ctrl.type)}
					disabled={props.disable[ctrl.type]} />
				))}
			<button className='OrderButton' disabled={props.purchasable} onClick={props.showOrder}>ORDER NOW</button>
		</div>
	);
};

export default BuildControls;