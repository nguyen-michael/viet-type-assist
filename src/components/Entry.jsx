import React, { Component } from 'react';

class Entry extends Component {
    render() {
        const isUIVietnamese = this.props.isUIVietnamese;
        const copySuccess = this.props.copySuccess;

        const textAreaPlaceholder = isUIVietnamese ? "Gõ chữ ở đây" : "Type here";
        const copyButtonText = isUIVietnamese ? "Sao chép vào clipboard" : "Copy to clipboard";
        const clearButtonText = isUIVietnamese ? "Xóa hết!" : "Clear all!";
        const copiedText = isUIVietnamese ? "Sao chép được rồi" : "Successfully Copied!"


        return (
            <div>
                <textarea
                    type="text"
                    onChange={this.props.handleTextChange}
                    value={this.props.text}
                    ref={this.props.textAreaRef}
                    rows="1"
                    placeholder={textAreaPlaceholder}
                    onSelect={this.props.handleSelectChange}
                    className="mb-4 border-2 border-solid border-gray-200 p-2"
                />
                <button
                    onClick={this.props.handleCopy}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded"
                >
                    {copySuccess ? <span className="text-green-400">{copiedText}</span> : copyButtonText}
                </button>
                <button
                    onClick={this.props.handleClear}
                    className="float-right bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border-dotted border-2 border-red-200 rounded"
                >
                    {clearButtonText}
                </button>
            </div>
        );
    }
}

export default Entry;