import React from 'react';
import CryptoCard from './CryptoCard';

function CryptoList(props) {

    function generateList() {
        const list = props.coinData.map(item =>
            <CryptoCard key={item.name} details={item} />
        )
        return list;
    }

    function headingRender(){
        if(props.coinData.length){
            return <h1 className="card-section-heading">💰Crypto List💰</h1>;
        }
        return null;
    }

    return (<div>
        {headingRender()}
        <div className="card-container">{generateList()}</div>
        </div>);
}


export default CryptoList;