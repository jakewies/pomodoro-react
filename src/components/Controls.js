import React from 'react';

class Controls extends React.Component {
	render() {
		return (
			<div className="controls">
				<button onClick={this.props.handleStartTimer}>start</button>
				<button onClick={this.props.handleStopTimer}>stop</button>
			</div>
		)
	}
}

export default Controls;
