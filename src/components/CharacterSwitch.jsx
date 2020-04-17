import React, { Component } from 'react';

class CharacterSwitch extends Component {
    // should also get index and on click
    render() {
        let tailwindStyleString = "hover:bg-gray-200 text-gray-900 font-semibold px-2 border border-gray-400 rounded m-1";

        if (this.props.character === this.props.currentCharacter) {
            tailwindStyleString = tailwindStyleString.concat(" bg-red-200 hover:bg-red-300");
        } else if (this.props.toneOrSibling === "sibling") {
            tailwindStyleString = tailwindStyleString.concat(" bg-gray-100");
        } else {
            tailwindStyleString = tailwindStyleString.concat(" bg-white");
        }

        return (
            <button
                index={this.props.characterIndex}
                onClick={this.props.handleCharacterSwitchClick}
                className={tailwindStyleString}
            >
                {this.props.character}
            </button>
        );
    }
}

export default CharacterSwitch;