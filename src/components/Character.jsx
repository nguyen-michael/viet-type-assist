import React, { Component } from 'react';
import Switcher from './Switcher';

class Character extends Component {
    render() {
        // Will not generate Switcher if doesn't have sibling or tones.
        return (
            this.props.hasSiblingsOrTones ?
                <span
                    className="tooltip relative"
                    index={this.props.index}
                >
                    {this.props.value}
                    <Switcher
                        handleCharacterSwitchClick={this.props.handleCharacterSwitchClick}
                        index={this.props.index}
                        siblingsTonesData={this.props.siblingsTonesData}
                    />
                </span>

                :

                <span
                    index={this.props.index}
                >
                    {this.props.value}
                </span>
        );
    }
}

export default Character;