import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

    static contextType = LanguageContext; // this is a particular variable name.

    renderLanguage() {
        return this.context.language === "english" ? "Name" : "Nombre";
    }

    render() {
        return (
            <div className="ui field">
                <label>{this.renderLanguage()}</label>
                <input/>
            </div>
        );
    }
}

export default Field;
