import React, { useState } from "react"
import Axios from "axios"
import Moment from "moment"
import HeroDisplay from "./components/HeroDisplay"
import CryptoList from "./components/CryptoList"

const App = () => {
	const [coinData, setCoinData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const getCryptoSymbol = async (name) => {
		try {
			const response = await Axios.get(`/coins/${name}/history`, {
				baseURL: "https://api.coingecko.com/api/v3",
				params: {
					date: Moment().format("DD-MM-YYYY"),
					localization: false,
				},
			})

			return response.data.symbol
		} catch (err) {
			setLoading(false)
			setError(err)
		}
	}

	const onFormSubmit = async (searchTerm) => {
		setLoading(true)

		try {
			const response = await Axios.get("/simple/price", {
				baseURL: "https://api.coingecko.com/api/v3",
				params: {
					ids: searchTerm,
					vs_currencies: "usd",
					include_market_cap: "true",
					include_24hr_vol: true,
					include_24hr_change: true,
					include_last_updated_at: true,
				},
			})

			if (response.data[searchTerm] !== undefined) {
				let duplicate = false
				let object = { name: searchTerm, data: response.data[searchTerm] }
				let symbol = await getCryptoSymbol(searchTerm)
				setLoading(false)
				object.symbol = symbol
				coinData.forEach((item) => {
					if (item.name === searchTerm) {
						setError(`${searchTerm} already present. Please scroll down.`)
						duplicate = true
					}
				})

				if (duplicate === false) setCoinData([...coinData, object])
			} else {
				setLoading(false)
				setError(`Unable to look up ${searchTerm} crypto.
                Try again with correct name or find its id on coingecko`)
			}
		} catch (err) {
			alert(err)
			setLoading(false)
			setError(err)
		}
	}

	const onErrorHide = () => {
		setError(null)
	}

	return (
		<div>
			<HeroDisplay
				onSubmit={onFormSubmit}
				loading={loading}
				errorMessage={error}
				errorHide={onErrorHide}
				loadingText={"Loading..."}
			/>
			<CryptoList coinData={coinData} />
		</div>
	)
}


export default App
