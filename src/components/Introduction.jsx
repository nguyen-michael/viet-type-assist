import React, { Component } from 'react';

class Introduction extends Component {
    render() {
        const isUIVietnamese = this.props.isUIVietnamese;

        const languageButtonText = isUIVietnamese ? "Switch to English" : "Dịch sang tiếng Việt";
        const headerText = isUIVietnamese ? "Giứp gõ chữ dấu tiếng Việt" : "Vietnamese Text Type Assist";
        const InstructionsText = isUIVietnamese ? "Hướng dẫn: Gõ vào hợp ở dưới. Bấm hoặc di con trỏ (vi tính) chữ cho trọn dấu." : "Instructions: Type into the box. Tap on or hover over (desktop) the letters to edit their tones / marks.";

        return (
            <div
                className="mb-6"
            >
                <button
                    onClick={this.props.handleLanguageToggle}
                    className="mx-auto mb-2 block bg-white hover:bg-gray-100 text-gray-700 font-semibold py-1 px-4 border border-gray-300 rounded text-xs"
                >
                    {languageButtonText}
                </button>
                <h1
                    className="text-center font-bold text-xl"
                >
                    {headerText}
                </h1>
                <p>
                    {InstructionsText}
                </p>
            </div>
        );
    }
}

export default Introduction;