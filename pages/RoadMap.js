import Image from "next/image";
import percentagePic from "../public/images/roadmap/percentage-pic.png";
import plusButton from "../public/images/roadmap/plus-button.png";
import minusButton from "../public/images/roadmap/minus-button.png";
import pizzaFace from "../public/images/roadmap/pizza-face.png";





export default function RoadMap() {
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
                <div className="percentages">
                    <h1>80%</h1>
                    <span>
                        LAUNCH MERCHANDISE WEBSITE.
                    </span>
                    <span>
                        ALL PROFITS ARE DONATED TO SLICE OUT HUNGER.
                    </span>
                </div>
            </div>
            <div className="image-wrapper">
                <Image src={percentagePic}/>
            </div>
            <div className="goal-container">
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
                        <Image src={plusButton}/>
                    </div>
                    <span className="amount">1</span>
                    <div className="image-wrapper">
                        <Image src={minusButton}/>
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