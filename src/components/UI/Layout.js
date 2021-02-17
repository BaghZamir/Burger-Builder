import React from 'react';
import Toolbar from '../Nav/Toolbar';

const layout = (props) => {
	return (
		<>
			<Toolbar />
			<main className='Content'>
				{props.children}
			</main>
		</>
	);
};

export default layout;