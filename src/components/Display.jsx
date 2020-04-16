import React, { Component } from 'react';
import Character from './Character';

class Display extends Component {
    render() {
        const vietCharacterData = this.props.vietCharacterData;
        const isUIVietnamese = this.props.isUIVietnamese;

        const placeholderText = (
            <p
                className="text-gray-400 flex-grow"
            >
                {isUIVietnamese ? "Chữ hiện ở đây" : "Text will appear here"}
            </p>
        );

        // Load the Character with data if applicable.
        const characterArray = this.props.textArray.map((char, index) => {
            let hasSiblingsOrTones = false;
            let siblingsTonesData = undefined;
            let value = char;
            // Allow multiple spaces in input display to be visibile
            if (char === " ") {
                value = "\u00A0";
            }

            if (vietCharacterData.hasOwnProperty(char)) {
                hasSiblingsOrTones = true;
                siblingsTonesData = vietCharacterData[char]
            }
            return (
                <Character
                    key={index}
                    index={index}
                    value={value}
                    handleCharacterSwitchClick={this.props.handleCharacterSwitchClick}
                    hasSiblingsOrTones={hasSiblingsOrTones}
                    siblingsTonesData={siblingsTonesData}
                />
            )
        });

        return (
            <div
                className="text-3xl break-normal mb-6 border-2 border-dotted border-gray-200 p-2 flex flex-wrap"
            >
                {(characterArray.length === 0) ? placeholderText : characterArray}
            </div>
        );
    }
}

export default Display;