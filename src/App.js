import React from 'react';
import KeypadUI from './component/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <KeypadUI />
      </>
    );
  }
}

export default App;
