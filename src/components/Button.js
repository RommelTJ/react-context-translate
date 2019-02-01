import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

    static contextType = LanguageContext; // this is a particular variable name.

    render() {
        return <button className="ui button primary">Submit</button>;
    }
}

export default Button;
