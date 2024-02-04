import React, {useEffect} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

import logo from '../../../../assets/logo.png'

import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa6";


const Footer = () =>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[] )

    return(
        <div className="footer">
            <div className="sectionContainer container grid">
                <div data-aos='fade-up'  data-aos-duration='2500' className="gridOne">
                    <div className="logoDiv">
                        <img src={logo} className="logo" />
                    </div>
                    <p>Your mind should be stronger then your feelings, Fly!</p>
                    <div className="socialIcon flex">
                    <TiSocialFacebook className="icon" />
                    <AiOutlineTwitter className="icon" />
                    <AiFillYoutube className="icon" />
                    <FaPinterestP className="icon" />
                    </div>
                </div>

                <div data-aos='fade-up'  data-aos-duration='2500' className="footerLinks">
                    <span className="linkTitle">Informations</span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Explore</a>
                    </li>
                    <li>
                        <a href="">Flight Status</a>
                    </li>
                    <li>
                        <a href="">Travel</a>
                    </li>
                    <li>
                        <a href="">Chek-In</a>
                    </li>
                    <li>
                        <a href="">Manage your Booking</a>
                    </li>
                </div>

                <div data-aos='fade-up'  data-aos-duration='2500' className="footerLinks">
                    <span className="linkTitle">Quick Guide</span>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">How to</a>
                    </li>
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Baggage</a>
                    </li>
                    <li>
                        <a href="">Route Map</a>
                    </li>
                    <li>
                        <a href="">Our communities</a>
                    </li>
                </div>

                <div data-aos='fade-up'  data-aos-duration='2500' className="footerLinks">
                    <span className="linkTitle">Informations</span>
                    <li>
                        <a href="">Chauffeur</a>
                    </li>
                    <li>
                        <a href="">Our partners</a>
                    </li>
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Transportation</a>
                    </li>
                    <li>
                        <a href="">Programme Rules</a>
                    </li>
                </div>
                
            </div>
            <div className="copyrightDiv flex">
                <p>Courtsey Design | Developed by <a href="https://github.com/imeno27" target="_blank">Imene</a></p>
            </div>
        </div>
    )
}
export default Footer