import React from "react"
import image from "../../../../assets/image.png"
import image1 from "../../../../assets/image1.png"

const Lounge = () =>{
    return(
        
        <div className="lounge container section">

            <div className="sectionContainer grid">

                <div className="imgDiv">
                    <img src={image} />
                    <img src={image1} />
                </div>

                <div className="textDiv">
                    <h2>Unnacompanied Minor Lounge</h2>
                    <div className="grids grid">

                    <div className="singleGrid">
                        <span className="gridtitle">
                            Help throught the airport
                        </span>
                        <p>You can also call airlines from your phone and bbok a flight ticket to one of our favourite destinations</p>
                    </div>

                    <div className="singleGrid">
                        <span className="gridtitle">
                            Priority Boarding
                        </span>
                        <p>You can also call airlines from your phone and bbok a flight ticket to one of our favourite destinations</p>
                    </div>

                    <div className="singleGrid">
                        <span className="gridtitle">
                            Care on the filght
                        </span>
                        <p>You can also call airlines from your phone and bbok a flight ticket to one of our favourite destinations</p>
                    </div>

                    <div className="singleGrid">
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