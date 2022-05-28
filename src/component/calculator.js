import React from 'react';

class KeypadUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const total = 0;
    const btn = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', ' ='];
    let { items } = this.state;
    items = btn.map((item) => (
      <button type="button" className="keypadBtn" key={Math.random().toString(36).toUpperCase().substring(0, 5)}>
        {item}
      </button>
    ));

    return (
      <div className="boxCal">
        <div className="result">
          {total}
        </div>
        <div className="keypadBtns">{items}</div>
      </div>
    );
  }
}

export default KeypadUI;
