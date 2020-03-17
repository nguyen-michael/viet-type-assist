import React, { Component } from 'react';
import Entry from './components/Entry';
import Display from './components/Display';
import vietCharacterData from './characterUtility';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rawText: "",
            characterArray: [],
            copySuccess: false
        }

        this.textAreaRef = React.createRef();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.handleCharacterSwitchClick = this.handleCharacterSwitchClick.bind(this);
        this.switchCharacter = this.switchCharacter.bind(this);
    }

    handleTextChange(e) {
        this.setState({
            rawText: e.target.value,
            characterArray: [...e.target.value],
            copySuccess: false
        });
    }

    handleClear() {
        this.setState({
            rawText: "",
            copySuccess: false
        });
    }

    handleCopy(e) {
        // Select then copy contents of textarea box
        this.textAreaRef.current.select();
        document.execCommand('copy');

        // Deselects the text that was copied.
        e.target.focus();

        this.setState({
            copySuccess: true
        });
    }

    handleCharacterSwitchClick(e) {
        const index = e.target.getAttribute("index");
        const character = e.target.innerText;


        // console.log(character, index);

        this.switchCharacter(index, character);
    }

    // Swap state.characterArray current character with newChar at index
    switchCharacter(index, newChar) {
        let newCharacterArray = this.state.characterArray;
        newCharacterArray[index] = newChar;
        let newRawText = newCharacterArray.join("");
        this.setState({
            rawText: newRawText,
            characterArray: newCharacterArray
        });
    }

    render() {
        return (
            <div>
                <Entry
                    handleTextChange={this.handleTextChange}
                    text={this.state.rawText}
                    handleClear={this.handleClear}
                    handleCopy={this.handleCopy}
                    textAreaRef={this.textAreaRef}
                    copySuccess={this.state.copySuccess}
                />
                <Display
                    textArray={this.state.characterArray}
                    handleCharacterSwitchClick={this.handleCharacterSwitchClick}
                    vietCharacterData={vietCharacterData}
                />
            </div>
        );
    }
}

export default App;
