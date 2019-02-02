import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {

    static contextType = LanguageContext;

    render() {
        return (
            <div>
                Select a language:
                <i className="flag us" onClick={() => this.props.onLanguageChange('english')}/>
                <i className="flag mx" onClick={() => this.props.onLanguageChange('spanish')}/>
            </div>
        );
    }

}

export default LanguageSelector;