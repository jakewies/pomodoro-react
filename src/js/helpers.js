/* MINUTES to MILLISECONDS */
export const _25 = 1500000;
export const _05 = 300000;
export const _test = 15000;

export function handleOnKeyDown(e) {
	if (e.key === " ") {
		e.preventDefault();
		this.handleStopTimer();
	}
}
