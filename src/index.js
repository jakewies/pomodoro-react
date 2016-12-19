import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import Time from './components/Time';
import Controls from './components/Controls';

class Timer extends React.Component {
	
	render() {
		return (
			<div className='timer'>
				<Time />
				<Controls />
			</div>
		)
	}
}

ReactDOM.render(
  <Timer />,
  document.getElementById('app')
);
