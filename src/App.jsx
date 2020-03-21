import React, { Component } from 'react';
import Entry from './components/Entry';
import Display from './components/Display';
import vietCharacterData from './characterUtility';
import Introduction from './components/Introduction';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rawText: "",
            characterArray: [],
            copySuccess: false,
            vietnameseUILanguage: false,
            textareaSelected: false
        }

        this.textAreaRef = React.createRef();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.handleCharacterSwitchClick = this.handleCharacterSwitchClick.bind(this);
        this.switchCharacter = this.switchCharacter.bind(this);
        this.handleLanguageToggle = this.handleLanguageToggle.bind(this);
        this.handleDisplayClick = this.handleDisplayClick.bind(this);
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
            characterArray: [],
            copySuccess: false,
            textareaSelected: false
        });
    }

    handleCopy(e) {
        // Select then copy contents of textarea box
        this.textAreaRef.current.select();
        document.execCommand('copy');

        // Deselects the text that was copied.
        e.target.focus();

        this.setState({
            copySuccess: true,
            textareaSelected: false
        });
    }

    handleDisplayClick() {
        this.textAreaRef.current.focus();

        this.setState({
            textareaSelected: true
        });
    }

    handleCharacterSwitchClick(e) {
        const index = e.target.getAttribute("index");
        const character = e.target.innerText;

        this.switchCharacter(index, character);
    }

    // Swap state.characterArray current character with newChar at index
    switchCharacter(index, newChar) {
        let newCharacterArray = this.state.characterArray;
        newCharacterArray[index] = newChar;
        let newRawText = newCharacterArray.join("");
        this.setState({
            rawText: newRawText,
            characterArray: newCharacterArray,
            textareaSelected: false
        });
    }

    handleLanguageToggle() {
        const toggledState = !this.state.vietnameseUILanguage
        this.setState({
            vietnameseUILanguage: toggledState,
            textareaSelected: false
        });
    }

    render() {
        return (
            <div
                className="mx-4 my-2 md:mx-20 md:my-4"
            >
                <Introduction
                    handleLanguageToggle={this.handleLanguageToggle}
                    isUIVietnamese={this.state.vietnameseUILanguage}
                />
                <Display
                    textArray={this.state.characterArray}
                    handleCharacterSwitchClick={this.handleCharacterSwitchClick}
                    vietCharacterData={vietCharacterData}
                    isUIVietnamese={this.state.vietnameseUILanguage}
                    handleDisplayClick={this.handleDisplayClick}
                    isTextareaSelected={this.state.textareaSelected}
                />
                <Entry
                    handleTextChange={this.handleTextChange}
                    text={this.state.rawText}
                    handleClear={this.handleClear}
                    handleCopy={this.handleCopy}
                    textAreaRef={this.textAreaRef}
                    copySuccess={this.state.copySuccess}
                    isUIVietnamese={this.state.vietnameseUILanguage}
                />
            </div>
        );
    }
}

export default App;
