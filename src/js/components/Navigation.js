import React from 'react';
import { handleMenuTransform } from '../helpers';

class Navigation extends React.Component {
	render() {
		return (
			<navigation>
				<div className='menu'></div>
				<div className='menu-burger' onClick={handleMenuTransform}>☰</div>
				<div className='menu-items'>
					<div>test</div>
				</div>
			</navigation>
		)
	}

}

export default Navigation;
