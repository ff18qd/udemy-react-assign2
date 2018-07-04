import React, { Component } from 'react';

class CharComponent extends Component {
    
    render() {
        
        // let showMessage="Text is too short";
        
        // if (this.props.inLength<5) {
        //     showMessage="Text is too short";
        // } else {
        //     showMessage="Text is long enough which is good";
        // }
        return (
            <div className="char">
                <p>I am char</p>
            </div>
        );
    }
    
}
    
export default CharComponent;