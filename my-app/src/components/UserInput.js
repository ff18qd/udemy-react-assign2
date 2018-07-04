import React from 'react';

const UserInput = (props) => 
    <div>
        <label>Input</label>
        <input 
            type='text' 
            onChange = {props.change}
           />
        <p>{props.inLength}</p>
    </div>
    
export default UserInput;

//  value={props.currentName} 
// onChange={props.change}