import React, {useEffect} from "react"
//images
import img1 from '../../../../assets/img.png'

import Aos from "aos"
import 'aos/dist/aos.css'

const Support = () =>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[] )

    return(
        <div className="support container section">
            <div className="sectionContainer">
                <div className="tittleDiv">
                    <small>travel support</small>
                    <h2>Plan your travel with confidence</h2>
                    <p>Finf help with booking and travel plans, see what to expect along the journey! </p>
                </div>
                <div className="infoDiv grid">
                    <div className="textDiv grid">
                        <div data-aos='fade-down'  data-aos-duration='2500' className="singleInfo">
                            <span className="number">01</span>
                            <h4>Travel requirement for Dubai</h4>
                            <p>
                                find help with booking and travel plans, see what to expect along the journey to your favourite destination
                            </p>
                        </div>

                        <div data-aos='fade-down'  data-aos-duration='3500' className="singleInfo">
                            <span className="number colorOne">02</span>
                            <h4>Chauffeur services at your arrival</h4>
                            <p>
                                find help with booking and travel plans, see what to expect along the journey to your favourite destination
                            </p>
                        </div>

                        <div data-aos='fade-down'  data-aos-duration='4500' className="singleInfo">
                            <span className="number colorTwo">03</span>
                            <h4>Multi-Task travel insurance</h4>
                            <p>
                                find help with booking and travel plans, see what to expect along the journey to your favourite destination
                            </p>
                        </div>

                    </div>
                    <div data-aos='fade-left'  data-aos-duration='2500' className="imgDiv">
                        <img src={img1} className="img1"/>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Support