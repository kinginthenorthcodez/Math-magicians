import React, { useState } from 'react';
import calculate from '../logic/calculate';

class KeypadUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const total = 0;
    const [displayed, setDisplayed] = useState({ total: 0, next: null, operation: null });
    const onClick = (e) => {
      setDisplayed((item) => calculate(item, e.target.innerText));
    };
    const btn = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', ' ='];
    let { items } = this.state;
    items = btn.map((item) => (
      <button type="button" onClick={onClick} className="keypadBtn" key={Math.random().toString(36).toUpperCase().substring(0, 5)}>
        {item}
      </button>
    ));

    const { total, next, operation } = displayed;

    return (
      <div className="boxCal">
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <div className="keypadBtns">{items}</div>
      </div>
    );
  }
}

export default KeypadUI;
