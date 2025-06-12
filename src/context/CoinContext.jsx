import { createContext, useEffect, useState } from "react";


export const CoinContext = createContext();

const CoinContextProvide = (props)=>{

    const [allcoin, setAllcoin] = useState([]);
    const [currency , setCurrency] = useState({
        name:"usd",
        symbol : "$"
    })

    const fetchAllCoin = async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-be7iTrYnd1XQMgg3Wpm1vy5K'}
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllcoin(res))
            .catch(err => console.error(err));
    }
    
    useEffect(()=>{
        fetchAllCoin();
    } , [currency])

    const contextvalue = {
            allcoin , currency , setCurrency
    } 

    return (
        <CoinContext.Provider value={contextvalue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvide;