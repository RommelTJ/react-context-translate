import React from 'react';

class LanguageSelector extends React.Component {

    render() {
        return (
            <div>
                Select a language:
                <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                <i className="flag mx" onClick={() => this.onLanguageChange('spanish')}/>
            </div>
        );
    }

}

export default LanguageSelector;