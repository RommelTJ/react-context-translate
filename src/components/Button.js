import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    updateName = (language) => {
        return language === "english" ? "Submit" : "Enviar";
    };

    updateColorButton = (color) => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.updateName(language)}
                </LanguageContext.Consumer>
            </button>
        );
    };

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.updateColorButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
