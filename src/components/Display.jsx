import React, { Component } from 'react';
import Character from './Character';

class Display extends Component {
    render() {
        const vietCharacterData = this.props.vietCharacterData;
        const isUIVietnamese = this.props.isUIVietnamese;
        const isTextareaSelected = this.props.isTextareaSelected;

        const placeholderText = (
            <p className="text-gray-400">
                {isUIVietnamese ? "Chữ có thể bấm được hiện ở đây" : "Selectable text will appear here"}
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
                className="text-3xl break-normal mb-8 border border-gray-300 p-2"
                onClick={this.props.handleDisplayClick}
            >
                {(characterArray.length === 0 && !isTextareaSelected) ? placeholderText : characterArray}
                {isTextareaSelected ? <span className="font-bolder blinker">|</span> : null}
            </div>
        );
    }
}

export default Display;