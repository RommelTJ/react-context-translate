import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

    // static contextType = LanguageContext; // this is a particular variable name.

    updateName = (value) => {
        return value === "english" ? "Submit" : "Enviar";
    };

    render() {
        // const text = this.context === "english" ? "Submit" : "Enviar";
        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value) => this.updateName(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }
}

export default Button;
