import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import Time from './components/Time';
import Controls from './components/Controls';
import { _25 } from './js/helpers';

class Timer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: false,
			interval: null,
			timeRemaining: this.getTimeRemaining(_25)
		}

		this.handleStartTimer = this.handleStartTimer.bind(this);
		this.handleStopTimer  = this.handleStopTimer.bind(this);
		this.startTimer       = this.startTimer.bind(this);
		this.displayTime      = this.displayTime.bind(this);
		this.getTimeRemaining = this.getTimeRemaining.bind(this);
	}

	handleStartTimer() {
		// is timer active?
		if (!this.state.interval) {
			console.log('starting...');

			// show time
			this.startTimer();
		}
	}

	handleStopTimer() {
		if (this.state.interval) {
			console.log('stopping...');

			clearInterval(this.state.interval);
			this.setState({ interval: null });
		}
	}

	startTimer() {
		this.displayTime(); // display initial time without delay
		this.setState({
			interval: setInterval(this.displayTime, 1000) // run every second
		});
	}

	displayTime() {
		console.log('inside displayTime');
		// get time remaining
		let timeRemaining = this.getTimeRemaining(this.state.timeRemaining.total - 1000); // time Remaining - 1 second

		// set time remaining
		this.setState({ timeRemaining });
	}

	getTimeRemaining(time) {
		// return a string value of the time remaining
		const total = time,
					minutes = Math.floor( (total/1000/60) % 60 ),
					seconds = Math.floor( (total/1000) % 60);

		return { total, minutes, seconds };
	}

	render() {
		return (
			<div className='timer'>
				<Time time={this.state.timeRemaining} />
				<Controls handleStartTimer={this.handleStartTimer} handleStopTimer={this.handleStopTimer}/>
			</div>
		)
	}
}

ReactDOM.render(
  <Timer />,
  document.getElementById('app')
);
