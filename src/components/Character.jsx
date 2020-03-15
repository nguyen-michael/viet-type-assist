import React, { Component } from 'react';

class Character extends Component {
    render() {
        return (
            <span onClick={this.props.handleCharacterClick}>
                {this.props.value}
            </span>
        );
    }
}

export default Character;