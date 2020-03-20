import React, { Component } from 'react';

class CharacterSwitch extends Component {
    // should also get index and on click
    render() {
        return (
            <button
                index={this.props.characterIndex}
                onClick={this.props.handleCharacterSwitchClick}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded m-1"
            >
                {this.props.character}
            </button>
        );
    }
}

export default CharacterSwitch;