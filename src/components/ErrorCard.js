import React from 'react';
import './ErrorCard.css';

class ErrorCard extends React.Component {

    renderCard = () => {
        if (this.props.errorMessage !== null) {
            setTimeout(function(){
                this.props.errorHide();
            }.bind(this),8000);
            return (
            <div className="error-card">
                <h2>{this.props.errorMessage}</h2>
            </div>
            );
        }
        else
            return null;
    }
    render = () => {
        return this.renderCard();
    }

}

export default ErrorCard;