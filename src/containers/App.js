import React, {Component} from 'react';
import Layout from '../components/UI/Layout';
import BurgerBuilder from './BurgerBuilder';

class App extends Component{
	render(){
		return (
			<div>
				<Layout>
					<BurgerBuilder />
				</Layout>
			</div>
		);
	}
}

export default App;