import React, { Component } from 'react';

class Entry extends Component {
    render() {
        const isUIVietnamese = this.props.isUIVietnamese;

        
        const textAreaPlaceholder = isUIVietnamese ? "Gõ chữ ở đây" : "Type here";
        const copyButtonText = isUIVietnamese ? "Sao chép vào clipboard" : "Copy to clipboard";
        const clearButtonText = isUIVietnamese ? "Xóa hết!" : "Clear all!";


        return (
            <div>
                <textarea
                    type="text"
                    onChange={this.props.handleTextChange}
                    value={this.props.text}
                    ref={this.props.textAreaRef}
                    rows="4"
                    placeholder={textAreaPlaceholder}
                    className=""
                />
                <button
                    onClick={this.props.handleCopy}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                    {copyButtonText}
                </button>
                <button
                    onClick={this.props.handleClear}
                    className="float-right bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                    {clearButtonText}
                </button>
                {
                    this.props.copySuccess ?
                        <p>Successfully copied!</p> : <p className="mb-6"></p>
                }
            </div>
        );
    }
}

export default Entry;