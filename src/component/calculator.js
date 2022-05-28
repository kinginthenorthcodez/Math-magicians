import React from 'react';
import PropTypes from 'prop-types';

class KeypadUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { click } = this.props;
    const btn = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', ' ='];
    let { items } = this.state;
    items = btn.map((item) => (
      <button type="button" onClick={click} className="keypadBtn" key={Math.random().toString(36).toUpperCase().substring(0, 5)}>
        {item}
      </button>
    ));

    return (
      <div className="keypadBtns">{items}</div>
    );
  }
}

KeypadUI.propTypes = {
  click: PropTypes.func.isRequired,
};
export default KeypadUI;
