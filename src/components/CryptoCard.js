import React from 'react';
import './CryptoCard.css';

class CryptoCard extends React.Component {

    constructor(props){
        super(props);
        this.cardRef = React.createRef();
    }

    componentDidMount = ()=>{
        this.cardRef.current.scrollIntoView({ block: 'end',  behavior: 'smooth' });
    }

    formatNumbers(number) {
        let roundNum = Math.round(number);
        return roundNum.toLocaleString();
    }


    render() {
        let { name, data, symbol } = this.props.details;
        return (
            <div ref={this.cardRef} className="crypto-card">
                <img alt={name} src={`https://cryptoicon-api.vercel.app/api/icon/${symbol}`} />
                <h1>{name}<br />{symbol}</h1>
                <span><span className="field">Price : </span> ${this.formatNumbers(data.usd)}</span>
                <span><span className="field">24 Hour Volume: </span> ${this.formatNumbers(data.usd_24h_vol)}</span>
                <span><span className="field">Market Cap : </span> ${this.formatNumbers(data.usd_market_cap)}</span>
                <span className="change"><span className="field">Change: </span> {this.formatNumbers(data.usd_24h_change)}%</span>        </div>
        );
    }

}



export default CryptoCard;