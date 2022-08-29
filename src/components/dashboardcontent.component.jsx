import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import CoinsCards from "./coinscards.component";

function DashContent(){
    const [coinsData, setCoinsData] = useState([]);
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Key': '293d4d8745mshec2c78488e69c05p1dd3eajsn8668ada1e384',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };
    
      
    
        
        
          useEffect(()=> {
            axios.request(options).then((response)=> {
              console.log(response.data.data.coins);
              setCoinsData(response.data.data.coins)
            }).catch(function (error) {
              console.error(error);
            });
          }, [])
    return(
        <div className="content-container">
           <div className="coincards-container flex flex-row flex-wrap">
             <CoinsCards coinslist = {coinsData} />
           </div>
        </div>
    )
}
export default DashContent