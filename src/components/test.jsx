import { useEffect, useState } from "react"

export default function CurrencyComponent() {
    const [currencyData, setCurrencyData] = useState([])
    const [dataFlag, setDataFlag] = useState(false)
    const [jpyCurrency, setJpyCurrency] = useState('')
    const [cadCurrency, setCadCurrency] = useState('')
    const [idrCurrency, setIdrCurrency] = useState('')
    const [chfCurrency, setChfCurrency] = useState('')
    const [EurCurrency, setEurCurrency] = useState('')
    const [GbpCurrency, setGbpCurrency] = useState('')

    useEffect(() => {
        getData()
    }, [setCurrencyData])

    useEffect(() => {
        if (!dataFlag) {
            setDataFlag(true)
        }
        console.log(dataFlag, "ini data flag")
    }, [])

    const getData = async () => {
        try {
            const dataAPI = await fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=6995fcf0e1344540b6295f74b118be78')
            const result = await dataAPI.json()
            // console.log(result)
            console.log(result.rates)
            // setCurrencyData(result)
            // setJpyCurrency(result.rates.JPY)
            // setCadCurrency(result.rates.CAD)
            // setIdrCurrency(result.rates.IDR)
            // setChfCurrency(result.rates.CHF)
            // setEurCurrency(result.rates.EUR)
            // setGbpCurrency(result.rates.JPY)

        } catch (error) {
            console.log(error)
        }
    }

    const handleWeBuy = () => {
        let manipulateDiscount = jpyCurrency * 0.5
        let result = jpyCurrency + manipulateDiscount
        return result
    }

    const handleWeSell = () => {
        let manipulateDiscount = jpyCurrency * 0.5
        let result = jpyCurrency - manipulateDiscount
        return result
    }

    return (
        <>
            <h1>This is CurrencyComponent</h1>
            {/* {JSON.stringify(currencyData)} */}
            {/* <h3>JPY</h3>
            <h1>We Buy</h1>
            <h3>{handleWeBuy()}</h3>
            <h1>Exchange Rate</h1>
            <h3>{jpyCurrency}</h3> */}
            <table>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Web Buy</th>
                        <th>Exchange Rate</th>
                        <th>Web Sell</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(currencyData.rates).map(([currency, rate], i) => (
                        <tr key={i}>
                            <td>{currency}</td>
                            <td></td>
                            <td>{rate}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

