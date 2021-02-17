import React from 'react';

const NavItem = (props) => (
	<li className='NavItem'>
		<a href={props.link} className={props.active ? 'active' : null}>{props.children}</a>
	</li>
);

export default NavItem;