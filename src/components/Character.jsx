import React, { Component } from 'react';
import Switcher from './Switcher';

class Character extends Component {
    render() {
        return (
            <span
                onClick={this.props.handleCharacterSwitchClick}
                index={this.props.index}
                // we dont't actually need this data here...
                data-siblingtone={this.props.hasSiblingsOrTones}
                className="tooltip"
            >
                {this.props.value}
                <Switcher />
            </span>
        );
    }
}

export default Character;