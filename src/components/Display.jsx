import React, { Component } from 'react';
import Character from './Character';

class Display extends Component {
    render() {
        const vietCharacterData = this.props.vietCharacterData;
        const isUIVietnamese = this.props.isUIVietnamese;

        const placeholderText = (
            <p className="text-gray-400">
                {isUIVietnamese ? "Chữ có thể bấm được hiện ở đây" : "Selectable text will appear here"}
            </p>
        );

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
            <div className="text-3xl break-normal mb-32 border border-gray-300 p-2">
                {characterArray.length === 0 ? placeholderText : characterArray}
            </div>
        );
    }
}

export default Display;