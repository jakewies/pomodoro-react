import React from 'react';

const Controls = (props) => {
	return (
		<div className="controls">
			<button onClick={props.handleStartTimer}>start</button>
			<button onClick={props.handleStopTimer}>stop</button>
		</div>
	)
}

export default Controls;
