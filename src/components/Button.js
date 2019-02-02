import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    updateName = (value) => {
        return value === "english" ? "Submit" : "Enviar";
    };

    updateColorButton = (value) => {
        return (
            <button className={`ui button ${value}`}>
                <LanguageContext.Consumer>
                    {(value) => this.updateName(value)}
                </LanguageContext.Consumer>
            </button>
        );
    };

    render() {
        return (
            <ColorContext.Consumer>
                {(value) => this.updateColorButton(value)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
