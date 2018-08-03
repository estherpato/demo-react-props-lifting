import React, { Component } from 'react';
import './Preview.css'

class Preview extends Component {
    render() {
        const name = this.props.name
        return (
            <div className="preview">
                {name}
            </div>
        );
    }
}

export default Preview;