import React, { Component } from 'react';
import Switcher from './Switcher';

class Character extends Component {
    render() {
        // Will not generate Switcher if doesn't have sibling or tones.
        return (
            this.props.hasSiblingsOrTones ?
                <span
                    className="tooltip relative"
                >
                    {this.props.value}
                    <Switcher 
                        handleCharacterSwitchClick={this.props.handleCharacterSwitchClick}
                        index={this.props.index}
                        siblingsTonesData={this.props.siblingsTonesData}
                    />
                </span>

                :

                <span>
                    {this.props.value}
                </span>
        );
    }
}

export default Character;