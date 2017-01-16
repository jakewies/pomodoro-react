import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import Time from './js/components/Time';
import Controls from './js/components/Controls';
import Navigation from './js/components/Navigation';
import { _25, _05, handleOnKeyDown, handleOnSpaceDown } from './js/helpers';
import EventListener from 'react-event-listener';
import Push from 'push.js';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: null,
      step: 0,
      phase: '',
      timeRemaining: this.getTimeRemaining(_25)
    };

    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleStopTimer = this.handleStopTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.displayTime = this.displayTime.bind(this);
    this.getTimeRemaining = this.getTimeRemaining.bind(this);
    this.nextPhase = this.nextPhase.bind(this);
    this.handlePushNotif = this.handlePushNotif.bind(this);
    this.handleOnKeyDown = handleOnKeyDown.bind(this);
    this.handleOnSpaceDown = handleOnSpaceDown.bind(this);
  }

  handleStartTimer() {
    if (!this.state.interval) {
      // Update the class of the timer to add styles depending on which step it is on
      this.setState({ phase: this.state.step % 2 === 0 ? 'active' : 'rest' });

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
    this.displayTime();
    // display initial time without delay
    this.setState({
      // run every second
      interval: setInterval(this.displayTime, 1000)
    });
  }

  displayTime() {
    if (this.state.timeRemaining.total > 0) {
      // get & set time remaining every 1 second
      let timeRemaining = this.getTimeRemaining(
        this.state.timeRemaining.total - 1000
      );
      this.setState({ timeRemaining });

      // display notif if there is 1 minute left
      if (timeRemaining.total === 60000) {
        let string = `1 minute of ${this.state.phase === 'active'
          ? 'work'
          : 'rest'} remaining!`;
        this.handlePushNotif(string);
      }
    } else {
      // move to next phase
      this.nextPhase();
    }
  }

  getTimeRemaining(timeInMilliSecs) {
    // return a string value of the time remaining
    const total = timeInMilliSecs,
      minutes = Math.floor(total / 1000 / 60 % 60),
      seconds = Math.floor(total / 1000 % 60) < 10
        ? '0' + Math.floor(total / 1000 % 60)
        : Math.floor(total / 1000 % 60);

    return { total, minutes, seconds };
  }

  nextPhase() {
    console.log('switching to next phase...');

    // alert user
    let string = `Time's Up! ${this.state.phase === 'active'
      ? 'Getchu some rest!'
      : 'Ready to get to work?'}`;
    this.handlePushNotif(string);

    this.handleStopTimer();
    let step = this.state.step + 1;

    this.setState({
      step,
      timeRemaining: step % 2 === 0
        ? this.getTimeRemaining(_25)
        : this.getTimeRemaining(_05)
    });
  }

  handlePushNotif(string) {
    Push.create('The Pomodoro', {
      body: string,
      icon: { x32: './favicon.ico' },
      timeout: 5000
    });
  }

  componentDidMount() {
    // get Permission from user to display browser notifications
    if (!('Notification' in window)) {
      return console.log('This browser does not support desktop notification');
    }
    Push.Permission.request();
  }

  render() {
    return (
      <div className={`container ${this.state.phase}`}>
        <Navigation />
        <div className="timer">
          <Time time={this.state.timeRemaining} />
          <Controls
            handleOnClickStart={this.handleStartTimer}
            handleOnClickStop={this.handleStopTimer}
          />
        </div>
        <EventListener target={window} onKeyDown={this.handleOnKeyDown} />
      </div>
    );
  }
}

ReactDOM.render(<Timer />, document.getElementById('app'));
