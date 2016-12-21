import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import Time from './js/components/Time';
import Info from './js/components/Info';
// import Phases from './js/components/Phases';
import Controls from './js/components/Controls';
import Navigation from './js/components/Navigation';
import { _25, _05, handleOnKeyDown, handleOnSpaceDown } from './js/helpers';
import EventListener from 'react-event-listener';

class Timer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			interval: null,
		  step: 0,
			phase: '',
			timeRemaining: this.getTimeRemaining(_25)
		}

		this.handleStartTimer	= this.handleStartTimer.bind(this);
		this.handleStopTimer  = this.handleStopTimer.bind(this);
		this.startTimer      	= this.startTimer.bind(this);
		this.displayTime      = this.displayTime.bind(this);
		this.getTimeRemaining = this.getTimeRemaining.bind(this);
		this.nextPhase 				= this.nextPhase.bind(this);
		this.handleOnKeyDown  = handleOnKeyDown.bind(this);
		this.handleOnSpaceDown  = handleOnSpaceDown.bind(this);
	}

	handleStartTimer() {
		if (!this.state.interval) {
			console.log('starting...');

			/* Update the class of the timer to add styles depending on which step it is on */
			this.setState({
				phase: this.state.step % 2 === 0 ? 'active' : 'rest'
			})

			this.startTimer();
		}
	}

	handleStopTimer() {
		if (this.state.interval) {
			console.log('stopping...');

			clearInterval(this.state.interval);
			this.setState({ interval: null, phase: '' });
		}
	}

	startTimer() {
		this.displayTime(); // display initial time without delay
		this.setState({
			interval: setInterval(this.displayTime, 1000) // run every second
		});
	}

	displayTime() {
		if (this.state.timeRemaining.total > 0) {
			console.log('inside displayTime');
			/* get & set time remaining every 1 second */
			let timeRemaining = this.getTimeRemaining(this.state.timeRemaining.total - 1000);
			this.setState({ timeRemaining });
		}
		else {
			this.nextPhase(); // move to next phase
		}

	}

	getTimeRemaining(timeInMilliSecs) {
		// return a string value of the time remaining
		const total = timeInMilliSecs,
					minutes = Math.floor( (total/1000/60) % 60 ),
					seconds = Math.floor( (total/1000) % 60) < 10 ? '0' + Math.floor( (total/1000) % 60 ) : Math.floor( (total/1000) % 60 );

		return { total, minutes, seconds };
	}

	nextPhase() {
		console.log('switching to next phase...');

		this.handleStopTimer();
		let step = this.state.step + 1;
		this.setState({
			step,
			timeRemaining: step % 2 === 0 ? this.getTimeRemaining(_25) : this.getTimeRemaining(_05)
		});
	}

	render() {
		return (
			<div className={`container ${this.state.phase}`} >
				<Navigation />
				<div className='timer'>
					<Time time={this.state.timeRemaining} />
					<Info interval={this.state.interval ? true : false}/>
					<Controls handleOnClickStart={this.handleStartTimer} handleOnClickStop={this.handleStopTimer}/>
				</div>
				<EventListener target={window} onKeyDown={this.handleOnKeyDown} />
			</div>
		)
	}
}

ReactDOM.render(
  <Timer />,
  document.getElementById('app')
);
