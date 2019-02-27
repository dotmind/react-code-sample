import React, { PureComponent, Fragment } from 'react';

class Form extends PureComponent {
  state = {
    value: '',
  };

  _onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  _onSubmit = () => {
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    return (
      <Fragment>
        <input
          value={value}
          onChange={this._onChange} />
        <button onClick={this._onSubmit}>Send</button>
      </Fragment>
    );
  }
}

export default Form;