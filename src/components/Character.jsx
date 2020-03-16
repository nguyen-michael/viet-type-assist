import React, { Component } from 'react';

class Character extends Component {
    render() {
        return (
            <span
                onClick={this.props.handleCharacterClick}
                index={this.props.index}
            >
                {this.props.value}
            </span>
        );
    }
}

export default Character;