import React from 'react';

const Time = (props) => {
	return (
		<span className="time">{`${props.time.minutes}:${props.time.seconds}`}</span>
	)
}

export default Time;
