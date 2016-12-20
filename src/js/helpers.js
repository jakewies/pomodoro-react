/* MINUTES to MILLISECONDS */
export const _25 = 1500000;
export const _05 = 300000;
export const _test = 15000;

export function handleOnKeyDown(e) {
	if (e.key === " ") {
		e.preventDefault();
		this.handleOnSpaceDown(); // method on Timer class in index.js
	}
}

export function handleOnSpaceDown() {
	// is timer running?
	if (this.state.interval) {
		this.handleStopTimer();
	} else {
		this.handleStartTimer();
	}
}
