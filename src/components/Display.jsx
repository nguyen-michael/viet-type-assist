import React, { Component } from 'react';
import Character from './Character';

class Display extends Component {
    render() {
        const vietCharacterData = this.props.vietCharacterData;
        // Load the Character with data if applicable.
        const characterArray = this.props.textArray.map((char, index) => {
            let hasSiblingsOrTones = false;
            let siblingsTonesData = undefined;
            if (vietCharacterData.hasOwnProperty(char)) {
                hasSiblingsOrTones = true;
                siblingsTonesData = vietCharacterData[char]
            }
            return (
                <Character
                    key={index}
                    index={index}
                    value={char}
                    handleCharacterSwitchClick={this.props.handleCharacterSwitchClick}
                    hasSiblingsOrTones={hasSiblingsOrTones}
                    siblingsTonesData={siblingsTonesData}
                />
            )
        });

        return (
            <div className="text-3xl">
                {characterArray}
            </div>
        );
    }
}

export default Display;