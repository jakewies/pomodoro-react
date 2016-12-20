import React from 'react';

const Controls = (props) => {
	return (
		<div className='controls'>
			<button onClick={props.handleOnClickStart}>start</button>
			<button onClick={props.handleOnClickStop}>stop</button>
		</div>
	)
}

export default Controls;
