import React from "react";
import CoinCard from "./coincard.component";

function CoinsCards({coinslist}){
    console.log(coinslist);
    return (
        <>
        {coinslist && coinslist.map((coinData)=> {
            return <CoinCard coinData = {coinData} key={coinData.uuid} />
        })}
        </>
    )
}
export default CoinsCards;