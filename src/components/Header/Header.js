import React from 'react';
import './Header.css';

/**
 * Handles the rendering of the header block
 */
export default (props) => {
    return <div className="header">
            <div className="header__logo-icon"></div>
            <h2 className="header__logo-text">Nord Software</h2>
        </div>
}