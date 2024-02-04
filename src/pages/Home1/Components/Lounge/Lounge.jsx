import React, {useEffect} from "react"
import image from "../../../../assets/image.png"

import Aos from "aos"
import 'aos/dist/aos.css'

const Lounge = () =>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[] )

    return(
        
        <div className="lounge container section">

            <div className="sectionContainer grid">

                <div data-aos='fade-left'  data-aos-duration='2500' className="imgDiv">
                    <img src={image} />
                </div>

                <div className="textDiv">
                    <h2 data-aos='fade-down'  data-aos-duration='2500'>Unnacompanied Minor Lounge</h2>
                    <div data-aos='fade-down'  data-aos-duration='2500' className="grids grid">

                    <div data-aos='fade-down'  data-aos-duration='2500' className="singleGrid">
                        <span className="gridtitle">
                            Help throught the airport
                        </span>
                        <p>You can also call airlines from your phone and bbok a flight ticket to one of our favourite destinations</p>
                    </div>

                    <div data-aos='fade-down'  data-aos-duration='2500' className="singleGrid">
                        <span className="gridtitle">
                            Priority Boarding
                        </span>
                        <p>You can also call airlines from your phone and bbok a flight ticket to one of our favourite destinations</p>
                    </div>

                    <div data-aos='fade-down'  data-aos-duration='2500' className="singleGrid">
                        <span className="gridtitle">
                            Care on the filght
                        </span>
                        <p>You can also call airlines from your phone and bbok a flight ticket to one of our favourite destinations</p>
                    </div>

                    <div data-aos='fade-down'  data-aos-duration='2500' className="singleGrid">
                        <span className="gridtitle">
                            Chauffeur-drive Service
                        </span>
                        <p>You can also call airlines from your phone and bbok a flight ticket to one of our favourite destinations</p>
                    </div>

                </div>
                </div>

            </div>
        </div>
    )
}
export default Lounge