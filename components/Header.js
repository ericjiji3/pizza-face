// import Link from "next/link";
import {Link} from "react-scroll";
import Image from "next/image";
import discord from "../public/images/header/discord.png";
import twitter from "../public/images/header/twitter.png";
import boat from "../public/images/header/boat.png";
import { React, useState } from 'react'
import { useCallback, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';


var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

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

export default function Header() {
    const isBreakpoint = useMediaQuery(700);
    const showSettings = (event) => {
        event.preventDefault();
      }
    return (
        <div>        
            {isBreakpoint ? (
                <div className="h-container">
                    <h1>PIZZA BOY</h1>
                    <Menu styles={ styles } right>
                        <ul>
                            <li>
                            <Link to="about" spy={true} smooth={true} duration={500} offset={-50}>
                                    ABOUT
                            </Link>
                            </li>
                            <li>
                            <Link to="roadmap" spy={true} smooth={true} duration={500} offset={-50}>
                                ROADMAP
                            </Link>
                            </li>
                            <li>
                            <Link to="team" spy={true} smooth={true} duration={500} offset={-50}>
                                TEAM
                            </Link>
                            </li>
                        </ul>
                    </Menu>
                </div>
            ) : (
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
                            <div className="image-wrapper">
                                <Image src={discord} />
                            </div>
                        </a>
                        <a href="#">
                            <div className="image-wrapper">
                                <Image src={twitter} />
                            </div>
                        </a>
                        <a href="#">
                            <div className="image-wrapper">
                                <Image src={boat} />
                            </div>
                        </a>
                    </div>
                    </div>
            )}
            
      </div>
    );
  }
  