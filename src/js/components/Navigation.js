import React from 'react';
import Footer from './Footer';
import { handleMenuTransform } from '../helpers';
import logo from '../../img/pomodoro.png';

class Navigation extends React.Component {
	render() {
		return (
			<navigation>
				<div className='menu'></div>
				<div className='menu-burger' onClick={handleMenuTransform}>
					<span className='burger'></span>
				</div>
				<div className='menu-items'>
					<header>
						<img src={logo} alt="The Pomodoro" />
   					<h1>The Pomodoro</h1>
					</header>
					<section>
						<h3>What is this?</h3>
						<p className='quote'>"The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are named pomodoros, the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student. The method is based on the idea that frequent breaks can improve mental agility." - Wikipedia</p>
					</section>
					<section>
						<h3>How it works</h3>
						<p>The Pomodoro provides you with a timer to keep you productive throughout the day. The timer switches between 25 minute and 5 minute intervals. Im working on allowing users to specify their own interval length.</p>
					</section>
					<section>
						<h3>Instructions</h3>
						<ul>
							<li>Control timer playback with <code>start</code> and <code>stop</code></li>
							<li>You can also control timer playback by pressing the <code>spacebar</code></li>
						</ul>
					</section>
					<Footer />
				</div>
			</navigation>
		)
	}

}

export default Navigation;
