import React from 'react';
import './HeroDisplay.css';
import SearchBar from './SearchBar';

export default function HeroDisplay(props) {

    function returnIcons(...iconArr) {
        const icons = iconArr.map(item => {
            if(!props.loading){
                return (
                    <img title={item} key={item} alt={item} src={`https://cryptoicon-api.vercel.app/api/icon/${item}`} />
                );
            }
            else{
                return (
                <img className="animate" title={item} key={item} alt={item} src={`https://cryptoicon-api.vercel.app/api/icon/${item}`} />
                );
            }
        });
        return icons;
    }

    function loadingText(){
        if(props.loading){
            return <span className="loading-text">{props.loadingText}</span>
        }
        else 
        return null;
    }

    return (
        <div className="hero-display">
            <header>
                <h1>Search your favourite cryptocurrencies</h1>
            </header>
            <SearchBar onSubmit={props.onSubmit}/>
            <div className="icons-list">
                {returnIcons('xmr', 'btc', 'eth', 'xlm', 'bnb')}
                {loadingText()}
            </div>
        </div>
    )
}