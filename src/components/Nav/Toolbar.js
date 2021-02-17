import React, {useState} from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

import './Toolbar.css';

const Toolbar = (props) => {

	const [openClass, setOpenClass] = useState('');

	const toggleMenu = () =>{
		openClass=='Open' ? setOpenClass('') : setOpenClass('Open');
	};

	return (
		<header className='Toolbar'>
			<Logo />
			<nav>
				<div className={'Mobile MenuBtn ' + openClass} onClick={toggleMenu}>MENU</div>
				<div className={'Backdrop ' + openClass} onClick={toggleMenu} />
				<NavMenu open={openClass}/>		
			</nav>
		</header>
	);
};

export default Toolbar;