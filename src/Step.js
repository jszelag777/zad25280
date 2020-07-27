import React from 'react';
import './Step.css';

function Step(props){
    return(
        <div className="step">
                <h4>Krok: <input type="number" min="1" placeholder="1" onChange={(event)=>props.addStep(event)}/></h4>
                <button onClick={() => {
                props.addStepMethod('add x')}}>Zwiększ o: {props.addStep}</button>
        </div>
    );
}
 
export default Step;