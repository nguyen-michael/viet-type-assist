import React, { Component } from 'react';

class Character extends Component {
    render() {
        return (
            <span
                onClick={this.props.handleCharacterClick}
                index={this.props.index}
                // we dont't actually need this data here...
                data-siblingtone={this.props.hasSiblingsOrTones}
            >
                {this.props.value}
            </span>
        );
    }
}

export default Character;