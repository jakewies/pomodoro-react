import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import Time from './components/Time';
import Controls from './components/Controls';

class Timer extends React.Component {
	constructor() {
		super();
		this.state = {
			isActive: false,
			currentTime: null,
			endTime: null,
			timeRemaining: null
		}

		this.handleStartTimer = this.handleStartTimer.bind(this);
		this.getTimeRemaining = this.getTimeRemaining.bind(this);
		this.handleStopTimer = this.handleStopTimer.bind(this);
		this.updateTimer = this.updateTimer.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this._25 = 1500000; // 25 minutes in milliseconds
		this._test = 15000;
	}

	handleStartTimer() {
		if (!this.state.isActive) {
			const now = this.state.currentTime === null ? Date.now() : this.state.currentTime; // get current time in milliseconds

			if (!this.state.endTime) {
				this.setState({
					isActive: true,
					currentTime: now,
					endTime:  this.state.endTime ? this.state.endTime : now + this._25
				});
			} else {
				this.setState({
					currentTime: now,
					isActive: true,
				});
			}
			this.startTimer(); // start timer
		}
	}

	handleStopTimer() {
		console.log('stopping...');
		this.setState({
			isActive: false
		});

	}

	getTimeRemaining(now) {
		// do Date stuff
		const total   = this.state.endTime - now,
					minutes = Math.floor( (total/1000/60) % 60 ),
					seconds = Math.floor( (total/1000) % 60 );

		return { total, minutes, seconds };
	}

	updateTimer() {
		if (this.state.isActive) {
			let now = this.state.currentTime; // get current time in milliseconds
			const timeRemaining = this.getTimeRemaining(now);
			this.setState({
				currentTime: now += 1000,
				timeRemaining: `${timeRemaining.minutes}:${timeRemaining.seconds}`
			});
			if (timeRemaining.total <= 0) {
				clearInterval(this.initTimer);
			}
		} else {
			clearInterval(this.initTimer); // timer is not active, pause timer
		}
	}

	startTimer() {
		console.log('starting...');
		// run function every second
		this.updateTimer(); // update timer first to avoid delay
		const initTimer = setInterval( this.updateTimer, 1000 );
	}

	render() {
		return (
			<div className='timer'>
				<Time timeRemaining={this.state.timeRemaining}/>
				<Controls handleStartTimer={this.handleStartTimer} handleStopTimer={this.handleStopTimer}/>
			</div>
		)
	}
}

ReactDOM.render(
  <Timer />,
  document.getElementById('app')
);
