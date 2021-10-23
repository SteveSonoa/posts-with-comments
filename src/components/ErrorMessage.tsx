import React from 'react';
import './ErrorMessage.css';

export const ErrorMessage = (props: Error) => (
    <div className="error-message">
        <h3>We're Sorry</h3>
        <p>We were unable to find what you were looking for. Please try again.</p>
        <ul className="error-info">
            <li className="error-name">{props.name}</li>
            <li className="error-message">{props.message}</li>
            {props.stack && (<li className="error-stack">{props.stack}</li>)}
        </ul>
    </div>
);
