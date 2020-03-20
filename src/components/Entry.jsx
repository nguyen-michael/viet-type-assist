import React, { Component } from 'react';

class Entry extends Component {
    render() {
        return (
            <div>
                <textarea
                    type="text"
                    onChange={this.props.handleTextChange}
                    value={this.props.text}
                    ref={this.props.textAreaRef}
                    rows="4"
                    placeholder={this.props.isUIVietnamese ? "Gõ chữ ở đây" : "Type here"}
                />
                <button onClick={this.props.handleClear}>Clear</button>
                <button onClick={this.props.handleCopy}>Copy to Clipboard</button>
                {
                    this.props.copySuccess ?
                        <p>Successfully copied!</p> : null
                }
            </div>
        );
    }
}

export default Entry;