import React, { Component } from 'react';
import Character from './Character';

class Display extends Component {
    render() {
        const characterArray = [...this.props.text].map((char, index) => (
            <Character
                key={index}
                value={char}
                handleCharacterClick={this.props.handleCharacterClick}
            />
        ));

        return (
            <p>
                {characterArray}
            </p>
        );
    }
}

export default Display;