import React, { Component } from 'react';
import './Counter.css';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Step from './Step';

// function Counter(props){

//     let randomNumber = Math.floor(Math.random() * (108-1+1) + 1);
//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// } 

// export default Counter;

class Counter extends Component{

    constructor(props){
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            stepValue: 0
        };
    }

    changeValue = (action) => { // ES6 method
 
        this.setState((prevState, prevProps) => {
             
            let currentCounterValue = prevState.counterValue;
            let currentStepValue = prevState.stepValue;
 
            if (action === 'add') {
                currentCounterValue += 1;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else if (action === 'reset'){
                currentCounterValue = 0;
            }else {
                currentCounterValue += currentStepValue;
            }
 
            return({
                counterValue: currentCounterValue
            });
        });
    }

    addStep = (event) => {

        let currentStepValue = parseInt(event.target.value);
 
        this.setState({
                stepValue: currentStepValue
            })
    }

    render(){

        return(
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue}/>
                <ButtonPanel buttonMethod={this.changeValue}/>
                <Step addStepMethod={this.changeValue} addStep ={this.addStep}/>
            </div>
        );
    }
}

export default Counter;