import React from 'react';

const Info = (props) => {
	return (
		<span className={props.interval ? 'info hide' : 'info'}>
			press <code>spacebar</code> or <code>start</code> to begin
		</span>
	)
}

export default Info;
