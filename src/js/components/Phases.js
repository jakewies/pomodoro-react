import React from 'react';

class Phases extends React.Component {
	render() {
		return (
			<ul className='phases'>
				<li className={this.props.phases > 0 ? 'phase complete' : 'phase'}>1</li>
				<li className={this.props.phases > 2 ? 'phase complete' : 'phase'}>2</li>
				<li className={this.props.phases > 4 ? 'phase complete' : 'phase'}>3</li>
			</ul>
		)
	}
}

export default Phases;
