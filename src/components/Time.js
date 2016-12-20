import React from 'react';

const Time = (props) => {
	return (
		<span className='time'>
			{ props.timeRemaining }
		</span>
	)
}

export default Time;
