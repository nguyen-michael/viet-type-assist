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
            <span 
                className="tooltiptext text-gray-800 bg-white absolute z-10 invisible text-center border border-gray-400 rounded text-base w-48 -ml-24 p-3"
            >
                {
                    tonesSwitches.length === 0 ?
                        null
                        :
                        tonesSwitches
                }
                {(tonesSwitches.length === 0 || siblingsSwitches.length === 0) ? null : <br />}
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