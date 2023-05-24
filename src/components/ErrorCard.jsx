import React from 'react';
import './ErrorCard.css';

const ErrorCard = ({ errorMessage, errorHide }) => {

    const renderCard = () => {
        if (errorMessage !== null) {
            setTimeout(function () {
                errorHide();
            }, 8000);
            return (
                <div className="error-card">
                    <h2>{errorMessage}</h2>
                </div>
            );
        }
        else
            return null;
    }

    return (
    renderCard()
    );

}

export default ErrorCard;