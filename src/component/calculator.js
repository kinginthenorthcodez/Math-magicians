import React from 'react';
import PropTypes from 'prop-types';

const KeypadUI = ({ click }) => {
  const btn = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', ' ='];
  return (
    <div className="keypadBtns">
      {btn.map((item) => (
        <button type="button" onClick={click} className="keypadBtn" key={Math.random().toString(36).toUpperCase().substring(0, 5)}>
          {item}
        </button>
      ))}
    </div>
  );
};

KeypadUI.propTypes = {
  click: PropTypes.func.isRequired,
};
export default KeypadUI;
