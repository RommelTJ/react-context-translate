import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

    // static contextType = LanguageContext; // this is a particular variable name.

    updateLabel = (value) => {
        return value === "english" ? "Name" : "Nombre";
    };

    render() {
        // const text = this.context === "english" ? "Name" : "Nombre";

        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {(value) => this.updateLabel(value)}
                    </LanguageContext.Consumer>
                </label>
                <input/>
            </div>
        );
    }
}

export default Field;
