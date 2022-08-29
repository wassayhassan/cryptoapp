import React from "react";
import {BsFillArrowUpRightCircleFill, BsFillArrowDownRightCircleFill} from 'react-icons/bs';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
function CoinCard({coinData}){
    let coinprice = coinData.price.slice(0, 8);
    let pointsData = coinData.sparkline;
    let labels=[];
    pointsData.forEach((el, index)=> {
      labels.push(index);
    })
    let normalprice = "font-semibold text-lg";
    let blackprice = "font-semibold text-lg text-white";
    let blackSymbol = "m-1 font-semibold text-white";
    let normalSymbol = "m-1 font-semibold";
    let blackName = "fullname font-light text-white";
    let normalName = "fullname font-light";

    return (
        
        <div className="coin-container w-60 h-52 m-2 p-2 flex flex-col justify-between  rounded-md" style={{backgroundColor: coinData.color }}>
            <div className="up-con flex flex-row justify-center">
                <div className="img-container bg-white rounded-md h-10 flex flex-col justify-center p-1 m-2">
                  <img src={coinData.iconUrl} alt="new" className=" w-8 h-8" />
                </div>
                
                <div className="flex flex-col">
                <p className={coinData.color === "#000000"? blackSymbol: normalSymbol}>{coinData.symbol}</p>
                <p className={coinData.color === "#000000"? blackName: normalName}> {coinData.name}</p>
                </div>
                
            </div>
            <div className="middle flex flex-row">
               <div className={(parseInt(coinData.change)> 0)? 'bg-blue-100 rounded-lg m-1 mt-3 p-1 h-8 w-20': 'bg-red-100 rounded-lg m-1 mt-3 p-1 w-20 h-8'}>
                <p className={(parseInt(coinData.change)> 0)? 'text-blue-400': 'text-red-400'}>{coinData.change + " %"}</p>
               </div>
               <div className="arrow-container flex flex-col justify-center mt-2 m-2">
                  {(parseInt(coinData.change)> 0)? <BsFillArrowUpRightCircleFill size="1.2em"/>: <BsFillArrowDownRightCircleFill size="1.2em"/>}
               </div>
               <div className="graph-cont h-14 w-24  rounded-md">
                 <Line
                  
                 datasetIdKey='id'
                  data={{
                        labels: [...labels],
                      
                        datasets: [
                        {
                            id: 1,
                            label:"Growth",
                            borderColor: "#4169e1",
                            data: [...pointsData],
                        }
                        ],
                 }}
                 options={{

                    tooltips: {
                      enabled: false,
                    },
                    elements: {
                      point:{
                          radius: 0
                      }
                  },

                    scales: {
                      xAxis: {
                        display: false
                      },
                      yAxis: {
                        display: false
                      },
                    }

                  }}
                  />
               </div>
            </div>
            <div className="down p-1">
              <div className="curr-price">
                 <p className={coinData.color === "#000000"? blackprice: normalprice}>{"$"+ coinprice}</p>
              </div>
            </div>
        </div>
    )
}
export default CoinCard;