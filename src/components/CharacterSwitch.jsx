import React, { Component } from 'react';

class CharacterSwitch extends Component {
    // should also get index and on click
    render() {
        return (
            <button
                index={this.props.characterIndex}
                onClick={this.props.handleCharacterSwitchClick}
            >
                {this.props.character}
            </button>
        );
    }
}

export default CharacterSwitch;