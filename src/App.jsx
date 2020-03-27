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
            textareaSelected: false,
            textareaFocusIndex: 0
        }

        this.textAreaRef = React.createRef();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.handleCharacterSwitchClick = this.handleCharacterSwitchClick.bind(this);
        this.switchCharacter = this.switchCharacter.bind(this);
        this.handleLanguageToggle = this.handleLanguageToggle.bind(this);
        this.handleDisplayClick = this.handleDisplayClick.bind(this);
        this.handleCharacterTap = this.handleCharacterTap.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleTextareaBlur = this.handleTextareaBlur.bind(this);
    }

    handleTextChange(e) {
        const focusIndex = this.textAreaRef.current.selectionStart;

        this.setState({
            rawText: e.target.value,
            characterArray: [...e.target.value],
            copySuccess: false,
            textareaFocusIndex: focusIndex
        });
    }

    // Checks for keyboard cursor movement
    handleSelectChange() {
        const focusIndex = this.textAreaRef.current.selectionStart;

        this.setState({
            textareaFocusIndex: focusIndex
        });
    }

    handleTextareaBlur() {
        this.setState({
            textareaSelected: false
        });
    }

    handleClear() {
        this.setState({
            rawText: "",
            characterArray: [],
            copySuccess: false,
            textareaSelected: false,
            textareaFocusIndex: 0
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

    // Clicking EOL/EOS whitespace in Display will focus cursor to end of string input.
    handleDisplayClick() {
        const focusIndex = this.state.characterArray.length;

        this.textAreaRef.current.focus();
        console.log("focus");

        // Focuses input to end of line on refocus.
        const tempVal = this.textAreaRef.current.value;
        this.textAreaRef.current.value = '';
        this.textAreaRef.current.value = tempVal;

        this.setState({
            textareaSelected: true,
            textareaFocusIndex: focusIndex
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


    handleCharacterTap(e) {
        // Defocuses (Blurs) the input so the keyboard goes away on mobile when a character is tapped.
        if (e.target.classList.contains("tooltip")) {
            this.textAreaRef.current.blur();
            console.log("blur");

            this.setState({
                textareaSelected: false
            });
        }
        // Otherwise, place cursor in place in textarea.
        else {
            const index = e.target.getAttribute("index");

            console.log("focus at: ", e.target.getAttribute("index"));

            this.textAreaRef.current.focus();
            this.textAreaRef.current.setSelectionRange(index, index);

            this.setState({
                textareaSelected: true,
                textareaFocusIndex: index
            });

            
        }

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
                    textareaFocusIndex={this.state.textareaFocusIndex}
                    handleCharacterTap={this.handleCharacterTap}
                />
                <Entry
                    handleTextChange={this.handleTextChange}
                    text={this.state.rawText}
                    handleClear={this.handleClear}
                    handleCopy={this.handleCopy}
                    textAreaRef={this.textAreaRef}
                    copySuccess={this.state.copySuccess}
                    isUIVietnamese={this.state.vietnameseUILanguage}
                    handleSelectChange={this.handleSelectChange}
                    handleTextareaBlur={this.handleTextareaBlur}
                />
            </div>
        );
    }
}

export default App;
