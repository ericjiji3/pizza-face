import Image from "next/image";
import aboutPic from "../public/images/about/about-pizza.png";
import aboutPic2 from "../public/images/about/about-pizza2.png";
import aboutPic3 from "../public/images/about/about-pizza3.png";
import aboutPic4 from "../public/images/about/about-pizza4.png";

export default function About() {
    return (
      <div id="about" className="a-container">
        <div className="buy-now">
            <div className="text">
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                <a href="#" className="button">BUY NOW</a>
            </div>
            <div className="images">
                <div className="image-wrapper">
                    <Image src={aboutPic} />
                </div>
                <div className="image-wrapper">
                    <Image src={aboutPic2} />
                </div>
            </div>
        </div>
        <div className="whats-pizzaboy">
            <h1>WHAT&apos;S PIZZABOY?</h1>
            <div className="image-text">
                <div className="image-wrapper">
                    <Image src={aboutPic3} />
                </div>
                <span>
                    If you ask most people what food they&apos;d eat for the rest of their lives... it&apos;s pizza! So why not a Pizza boy NFT? Plus, we got inspiration from the Pizza boy character played by Kel Mitchell on Nickelodeon&apos;s &quot;All That&quot;.
                </span>
            </div>
            <div className="text-image">
                <span>
                    Pizza boy is a collection of 3,000 Pizza Face items programmatically generated with python in 50x50 PNG enlarged to 500x500. Each Pizza boy is unique and generated from over 60 possible traits, including eyes, earrings, mouth, clothes and crust.
                </span>
                <div className="image-wrapper">
                    <Image src={aboutPic4} />
                </div>
            </div>
        </div>
      </div>
    );
  }