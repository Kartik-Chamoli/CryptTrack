import React from 'react';
import Axios from 'axios';
import Moment from 'moment';
import HeroDisplay from './HeroDisplay';
import CryptoList from './CryptoList';

class App extends React.Component {

    state = { coinData: [], loading: false, error: null };

    getCryptoSymbol = async (name) => {

        try {
            const response = await Axios.get(`/coins/${name}/history`, {
                baseURL: 'https://api.coingecko.com/api/v3',
                params: {
                    date: Moment().format('DD-MM-YYYY'),
                    localization: false
                }
            })

            return response.data.symbol;
        }
        catch (err) {
            this.setState({ loading: false });
            this.setState({ error: err });
        }
    }
    onFormSubmit = async (searchTerm) => {
        this.setState({ loading: true });
        try {
            const response = await Axios.get('/simple/price', {
                baseURL: 'https://api.coingecko.com/api/v3',
                params: {
                    ids: searchTerm,
                    vs_currencies: 'usd',
                    include_market_cap: 'true',
                    include_24hr_vol: true,
                    include_24hr_change: true,
                    include_last_updated_at: true,
                }
            })

            if (response.data[searchTerm] !== undefined) {
                let object = { name: searchTerm, data: response.data[searchTerm] };
                let symbol = await this.getCryptoSymbol(searchTerm);
                this.setState({ loading: false });
                object.symbol = symbol;
                this.setState({ coinData: [...this.state.coinData, object] });
            }
            else {
                this.setState({ loading: false,
                     error: `Unable to look up ${searchTerm} crypto.
                      Try again with correct name or find its id on coingecko`
                     });
            }

        }
        catch (err) {
            alert(err);
            this.setState({ loading: false, error: err });
        }
    }

    onErrorHide = () => {
        this.setState({ error: null });
    }

    render() {
        return <div>
            <HeroDisplay onSubmit={this.onFormSubmit} loading={this.state.loading} errorMessage={this.state.error} errorHide={this.onErrorHide} loadingText={'Loading...'} />
            <CryptoList coinData={this.state.coinData} />
        </div>
    }

}

export default App;