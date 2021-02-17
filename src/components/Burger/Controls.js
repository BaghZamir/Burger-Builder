import React, {Component} from 'react';

const Controls = (props) => {
	
	return(
		<div className='Control'>
			<div className='Label'>{props.label}</div>
			<button className='Less' onClick={props.removed} disabled={props.disabled}>-</button>
			<button className='More' onClick={props.added}>+</button>
		</div>
	);
};

export default Controls;