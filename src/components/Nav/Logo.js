import React from 'react';

import burgerLogo from '../../assets/img/burger-logo.png'

const Logo = (props) => {
	return (
		<figure className='Logo'>
			<img src={burgerLogo} alt='logo'/>
		</figure>
	);
};

export default Logo;