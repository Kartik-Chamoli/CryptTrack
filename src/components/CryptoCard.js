import React, {useEffect} from 'react';
import './CryptoCard.css';

const CryptoCard = ({details}) => {
    const cardRef = React.useRef();


    useEffect(() => {
        cardRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }, [])


    const formatNumbers = (number) => {
        let roundNum = Math.round(number);
        return roundNum.toLocaleString();
    }


    let { name, data, symbol } = details;
    return (
        <div ref={cardRef} className="crypto-card">
            <img alt={name} src={`https://cryptoicon-api.vercel.app/api/icon/${symbol}`} />
            <h1>{name}<br />{symbol}</h1>
            <span><span className="field">Price : </span> ${formatNumbers(data.usd)}</span>
            <span><span className="field">24 Hour Volume: </span> ${formatNumbers(data.usd_24h_vol)}</span>
            <span><span className="field">Market Cap : </span> ${formatNumbers(data.usd_market_cap)}</span>
            <span className="change"><span className="field">Change: </span> {formatNumbers(data.usd_24h_change)}%</span>        </div>
    );


}



export default CryptoCard;