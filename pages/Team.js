import Image from "next/image";
import Accordion from "../components/Accordion.js";
import cheesy from "../public/images/team/cheesy.png";
import johnnyV from "../public/images/team/johnnyV.png";
import noPineapple from "../public/images/team/no-pineapple.png";

export default function Team() {
    return (
      <div id="team" className="t-container">
        <h1>PIZZA BOY TEAM</h1>
        <div className="gallery">
            <div className="image-card">
                <div className="image-wrapper">
                    <Image src={cheesy}/>
                </div>
                <div className="caption">
                    <h3>CHEESY</h3>
                    <span>HATES TOMATO SAUCE ON HIS PIZZA AND ASKS FOR EXTRA CHEESE.</span>
                </div>
            </div>
            <div className="image-card">
                <div className="image-wrapper">
                    <Image src={johnnyV}/>
                </div>
                <div className="caption">
                    <h3>JOHNNY V</h3>
                    <span>ONLY EATS FROM PIZZERIAS RAN BY ITALIANS</span>
                </div>
            </div>
            <div className="image-card">
                <div className="image-wrapper">
                    <Image src={noPineapple}/>
                </div>
                <div className="caption">
                    <h3>NO-PINEAPPLE</h3>
                    <span>THINKS YOU&apos;RE A BAD PERSON IF YOU ORDER PINEAPPLE ON PIZZA.</span>
                </div>
            </div>
        </div>
        <div className="faq">
            <h1>FAQ&apos;S</h1>
            <Accordion/>
        </div>
      </div>
    );
  }