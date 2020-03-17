import React, { Component } from 'react';
import CharacterSwitch from './CharacterSwitch';

class Switcher extends Component {
    render() {
        return (
            <span className="tooltiptext">
                <CharacterSwitch />
            </span>
        );
    }
}

export default Switcher;