import Link from "next/link";
import Image from "next/image";
import discord from "../public/images/header/discord.png";
import twitter from "../public/images/header/twitter.png";
import boat from "../public/images/header/boat.png";

export default function Header() {
    return (
        <div className="f-container">
           <span>© 2021 Pizza boy NFTs. All rights reserved.</span>
           <div className="social-container">
                <div className="image-wrapper">
                <Image src={discord}/>
                </div>
                <div className="image-wrapper">
                <Image src={twitter}/>
                </div>
                <div className="image-wrapper">
                <Image src={boat}/>
                </div>
           </div>
        </div>
    );
  }
  