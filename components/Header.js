// import Link from "next/link";
import {Link} from "react-scroll";
import Image from "next/image";
import discord from "../public/images/header/discord.png";
import twitter from "../public/images/header/twitter.png";
import boat from "../public/images/header/boat.png";

export default function Header() {
    return (
        <div className="h-container">
            <h1>PIZZA BOY</h1>
            <div className="h-links">
                <ul>
                    <li>
                    <Link to="about" spy={true} smooth={true} duration={500}>
                            ABOUT
                    </Link>
                    </li>
                    <li>
                    <Link to="roadmap" spy={true} smooth={true} duration={500}>
                        ROADMAP
                    </Link>
                    </li>
                    <li>
                    <Link to="team" spy={true} smooth={true} duration={500}>
                        TEAM
                    </Link>
                    </li>
                </ul>
            </div>
            <div className="socials">
                <a href="#">
                    <Image src={discord} />
                </a>
                <a href="#">
                    <Image src={twitter} />
                </a>
                <a href="#">
                    <Image src={boat} />
                </a>
            </div>
      </div>
    );
  }
  