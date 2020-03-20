import React, { Component } from 'react';

class Introduction extends Component {
    render() {
        const isUIVietnamese = this.props.isUIVietnamese;

        return (
            <div>
                <button
                    onClick={this.props.handleLanguageToggle}
                    className="text-center"
                >
                    {isUIVietnamese ? "Switch to English" : "Dịch sang tiếng Việt"}
                </button>
                <h1
                    className="text-center"
                >{isUIVietnamese ? "Giứp gõ chữ dấu tiếng Việt" : "Vietnamese Text Type Assist"}
                </h1>
                <p>Instructions: Type into the box. Tap the larger letters to change their forms. When finished, copy from box or tap copy to clipboard.</p>
            </div>
        );
    }
}

export default Introduction;