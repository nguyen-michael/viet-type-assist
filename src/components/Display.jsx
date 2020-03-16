import React, { Component } from 'react';
import Character from './Character';

class Display extends Component {
    render() {
        const characterArray = this.props.textArray.map((char, index) => (
            <Character
                key={index}
                index={index}
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