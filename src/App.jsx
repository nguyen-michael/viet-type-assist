import React, { Component } from 'react';
import Entry from './components/Entry';
import Display from './components/Display';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rawText: "",
            copySuccess: false
        }

        this.textAreaRef = React.createRef();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.handleCharacterClick = this.handleCharacterClick.bind(this);
    }

    handleTextChange(e) {
        this.setState({
            rawText: e.target.value,
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

    handleCharacterClick(e) {
        console.log(e.target.innerText);
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
                    text={this.state.rawText}
                    handleCharacterClick={this.handleCharacterClick}
                />
            </div>
        );
    }
}

export default App;
