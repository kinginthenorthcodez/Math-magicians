import React from 'react';
import Uipadcalculator from './component/uipad';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Uipadcalculator />
      </>
    );
  }
}

export default App;
