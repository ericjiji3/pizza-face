import Image from "next/image";
import percentagePic from "../public/images/roadmap/percentage-pic.png";
import plusButton from "../public/images/roadmap/plus-button.png";
import minusButton from "../public/images/roadmap/minus-button.png";
import pizzaFace from "../public/images/roadmap/pizza-face.png";
import { React, useState } from 'react'
import { useCallback, useEffect } from 'react';

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };

export default function RoadMap() {
    const [counter, setCounter] = useState(0);
    const isBreakpoint = useMediaQuery(700);

    const increase = () =>{
        setCounter(count => count + 1);
    };

    const decrease = () =>{
        setCounter(count => count - 1)
    };


    return (
      <div id="roadmap" className="r-container">
        <h1>ROADMAP</h1>
        <div className="goal">
            <div className="goal-container">
                <div className="percentages">
                    <h1>20%</h1>
                    <span>
                        2.5ETH TO SLICE OUT HUNGER.
                    </span>
                    <span>
                        2.5ETH FOR COMMUNITY WALLET.
                    </span>
                </div>
                {isBreakpoint ? (
                <div className="percentages">
                        <h1>50%</h1>
                        <span>
                            RELEASE STATS ON RARITY TOOL.
                        </span>
                        <span>
                            2.5ETH TO SLICE OUT HUNGER.
                        </span>
                        <span>
                            2.5ETH FOR COMMUNITY WALLET.
                        </span>
                </div>
                ) : (
                <div className="percentages">
                        <h1>80%</h1>
                        <span>
                            LAUNCH MERCHANDISE WEBSITE.
                        </span>
                        <span>
                            ALL PROFITS ARE DONATED TO SLICE OUT HUNGER.
                        </span>
                </div>
                )
                }
            </div>
            <div className="image-wrapper">
                <Image src={percentagePic}/>
            </div>
            <div className="goal-container">
                {isBreakpoint ? (
                <div className="percentages">
                    <h1>80%</h1>
                    <span>
                        LAUNCH MERCHANDISE WEBSITE.
                    </span>
                    <span>
                        ALL PROFITS ARE DONATED TO SLICE OUT HUNGER.
                    </span>
                </div>
                ):(
                <div className="percentages">
                    <h1>50%</h1>
                    <span>
                        RELEASE STATS ON RARITY TOOL.
                    </span>
                    <span>
                        2.5ETH TO SLICE OUT HUNGER.
                    </span>
                    <span>
                        2.5ETH FOR COMMUNITY WALLET.
                    </span>
                </div>
                )
                }
                <div className="percentages">
                    <h1>100%</h1>
                    <span>
                        GROW THE TEAM.
                    </span>
                    <span>
                        START STRATEGIC MARKETING WITH PIZZA CHIANS. (DOMINOES, PIZZA HUT, ETC.)
                    </span>
                </div>
            </div>
        </div>
        <div className="total-minted">
            <h2>TOTAL PIZZA BOY MINTED</h2>
            <h3>113/3000</h3>
        </div>
        <div className="connect-wallet">
            <div className="buy-container">
                <h2>PLEASE CONNECT YOUR WALLET.</h2>
                <div className="inventory">
                    <div className="image-wrapper">
                        <Image src={plusButton} onClick={increase}/>
                    </div>
                    <span className="amount">{counter}</span>
                    <div className="image-wrapper">
                        <Image src={minusButton} onClick={decrease}/>
                    </div>
                </div>
                <div className="buy">
                    <a>
                        BUY FOR 0.01 ETH
                    </a>
                </div>
                <span className="current-price">
                    0.01 PER NFTETH
                </span>
            </div>
            <div className="image-container">
                <Image src={pizzaFace}/>
            </div>
        </div>
      </div>
    );
  }