import React from 'react';
import NavItem from './NavItem';

const NavMenu = (props) => {
	return (
		<ul className={'NavMenu ' + props.open}>
			<div className='Mobile'>MENU</div>
			<NavItem link='/' active>Burger Builder</NavItem>
			<NavItem link='/'>Checkout</NavItem>
		</ul>
	);
};

export default NavMenu;