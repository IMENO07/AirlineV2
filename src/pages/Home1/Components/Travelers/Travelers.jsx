import React, {useEffect} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

import paris from "../../../../assets/paris.jpg"
import dubai from "../../../../assets/dubai.jpg"
import london from "../../../../assets/london.jpg"
import newYork from "../../../../assets/newYork.jpg"

import traveler1 from "../../../../assets/traveler1.jpg"
import traveler2 from "../../../../assets/Traveler2.jpg"
import traveler3 from "../../../../assets/Traveler3.jpg"
import traveler4 from "../../../../assets/Traveler4.jpg"

//hight order array method : Map to diplay the data
const travelers = [
    {id:1,
    destinationImage : paris ,
    travelerPicture: traveler1,
    travelerName: 'John Smith',
    socialLink: '@JohnSmth',
},
{id:2,
    destinationImage : dubai ,
    travelerPicture: traveler2,
    travelerName: 'Olivia Lindsey',
    socialLink: '@Olivia-Lindsey',
},
{id:3,
    destinationImage : london ,
    travelerPicture: traveler3,
    travelerName: 'William Noble',
    socialLink: '@WillNbl',
},
{id:4,
    destinationImage : newYork ,
    travelerPicture: traveler4,
    travelerName: 'Emma Watson',
    socialLink: '@EmmaWtsn',
},

]

const Travelers = () =>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[] )

    return(
        <div className="travelres container section">
            <div className="sectionContainer">
                <h2 data-aos='fade-down'  data-aos-duration='2500'>
                    Top Travelers of this Month!
                </h2>

                <div className="travelersContainer grid">

                    {/* Single passenger Card*/ }
                    {
                        travelers.map(({id,destinationImage,travelerPicture,travelerName,socialLink})=>{
                            return(

                                <div data-aos='fade-up'  data-aos-duration='2500' key={id} className="singleTraveler">
                                <img src={destinationImage} className="destinationImage" />

                                <div className="travelerDetails">
                                    <div className="travelerPicture">
                                        <img src={travelerPicture} className="travelerImage" />
                                    </div>
                                    <div className="travelerName">
                                        <span> {travelerName}</span>
                                        <p>{socialLink}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
export default Travelers 