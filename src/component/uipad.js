import React from 'react';
import KeypadUI from './component/calculator';
import calculate from '../logic/calculate';

class Uipadcalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.onClick = this.onClick.bind(this);
  }

   onClick = (e) => {
     const setDisplayed = this.state;
     setDisplayed((item) => calculate(item, e.target.innerText));
   };

   render() {
     const { total, next, operation } = this.state;
     return (
       <>
         <div className="boxCal">
           <div className="result">
             {total}
             {operation}
             {next}
           </div>
           <KeypadUI click={this.onClick} />
         </div>
       </>
     );
   }
}

export default Uipadcalculator;
