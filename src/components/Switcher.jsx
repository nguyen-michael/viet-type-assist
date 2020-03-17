import React, { Component } from 'react';
import CharacterSwitch from './CharacterSwitch';

class Switcher extends Component {
    render() {
        const tonesSwitches = this.props.siblingsTonesData.tones.map((char, index) => {
            return (
                <CharacterSwitch
                    character={char}
                    characterIndex={this.props.index}
                    key={index}
                    handleCharacterSwitchClick={this.props.handleCharacterSwitchClick}
                />
            )
        });

        const siblingsSwitches = this.props.siblingsTonesData.siblings.map((char, index) => {
            return (
                <CharacterSwitch
                    character={char}
                    characterIndex={this.props.index}
                    key={index}
                    handleCharacterSwitchClick={this.props.handleCharacterSwitchClick}
                />
            )
        });


        return (
            <span className="tooltiptext">
                {
                    tonesSwitches.length === 0 ?
                        null
                        :
                        tonesSwitches
                }
                <br />
                {
                    siblingsSwitches.length === 0 ?
                        null
                        :
                        siblingsSwitches
                }
            </span>
        );
    }
}

export default Switcher;