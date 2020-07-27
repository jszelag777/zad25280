import React from 'react';
import './ButtonPanel.css';

function ButtonPanel(props){
    return(
        <div className='buttons-panel'>
            <button onClick={() => {
                props.buttonMethod('add');}}>Add</button>
            <button onClick={() => {
                props.buttonMethod('reinit');}}>Reinit</button>
            <button onClick={() => {
                props.buttonMethod('reset');}}>Reset</button>
        </div>
    );
}

export default ButtonPanel;