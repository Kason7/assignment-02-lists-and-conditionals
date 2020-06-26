import React from 'react';

export const Counter = (props) => {
  return (
    <div>
      <input type='text' onChange={props.changed} value={props.text} />
      <p>
        {props.text.length < 5
          ? 'Your name is too short'
          : 'This name is long enough!'}
      </p>
    </div>
  );
};

export default Counter;
