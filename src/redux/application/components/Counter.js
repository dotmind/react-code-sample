import React from 'react';

const Counter = (props) => (
  <div>
    <p>{props.counter}</p>
    <button onClick={props.inc}>INC</button>
    <button onClick={props.dec}>DEC</button>
    <button onClick={props.reset}>RESET</button>
  </div>
);

export default Counter;