// MINUTES to MILLISECONDS
export const _25 = 1500000;
export const _05 = 300000;
export const _test = 15000;

export function handleOnKeyDown(e) {
  if (e.key === ' ') {
    e.preventDefault();
    // method on Timer class in index.js
    this.handleOnSpaceDown();
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

export function handleMenuTransform() {
  let menu = document.querySelector('.menu'),
    burger = document.querySelector('.menu-burger'),
    items = document.querySelector('.menu-items'),
    transforms = [ menu, burger, items ];

  transforms.forEach(el => el.classList.toggle('transform'));
}

export function onGranted() {
  alert('Granted!');
}

export function onDenied() {
  alert('Denied!');
}
