import React from 'react';
import './Modal.css';

const modal = (props) => {
	return (
		<>
			<div className={'Backdrop ' + props.activate} onClick={props.close}/>
			<section className={'Modal ' + props.activate}>
				{props.children}
			</section>
		</>
	);
};

export default modal;