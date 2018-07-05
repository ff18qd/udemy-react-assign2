import React, { Component } from 'react';

class CharComponent extends Component {
    
    render() {
        var style = {
            display: 'inline-block',
            padding: "16px",
            textalign: 'center',
            margin: "16px",
            border: '1px solid black'
        }
        
        // let showMessage="Text is too short";
        
        // if (this.props.inLength<5) {
        //     showMessage="Text is too short";
        // } else {
        //     showMessage="Text is long enough which is good";
        // }
        return (
            <div className="char" style={style}>
                <p>I am char</p>
            </div>
        );
    }
    
}
    
export default CharComponent;