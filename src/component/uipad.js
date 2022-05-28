import React, { useState } from 'react';
import KeypadUI from './calculator';
import calculate from '../logic/calculate';

const Uipadcalculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const onClick = (e) => {
    const setDisplayed = calculate(state, e.target.innerText);
    setState(setDisplayed);
  };

  return (
    <>
      <div className="boxCal">
        <div className="result">
          {state.total}
          {state.operation}
          {state.next}
        </div>
        <KeypadUI click={onClick} />
      </div>
    </>
  );
};

export default Uipadcalculator;
