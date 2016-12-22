import React from 'react';

class Config extends React.Component {

  handleSubmitTime(evt, time) {
    evt.preventDefault();
    this.props.handleEditTime(time);
  }

  render() {
    return (
      <form className='edit' onSubmit={ (evt) => this.handleSubmitTime(evt, this.workTime.value) }>
        <input type="text" required placeholder="Work" ref={ (input) => this.workTime = input } />
      </form>
  	)
  }
}

export default Config;
