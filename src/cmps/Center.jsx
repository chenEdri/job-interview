import React from "react";


export function Center(props) {
    return (
        <section >
            <div className="main-container">
                <div className="center-lines flex column sb">
                    <div className="flex sb line">
                        <div className="center-img ci1"><img src="https://res.cloudinary.com/dygtul5wx/image/upload/v1616401925/job-interview%20pixle%20perfect/homepage/enjoyable-place-desktop_thmkp8.jpg" />
                        </div>
                        <div className="center-card cc1">
                            <h3> Enjoyable place for all the family</h3>
                            <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange
                            a tour of the farm before your meal.</p>
                        </div>
                    </div>
                    <div className="flex sb line rr cc2">
                        <div className="center-img ci2"><img src="https://res.cloudinary.com/dygtul5wx/image/upload/v1616401954/job-interview%20pixle%20perfect/homepage/locally-sourced-desktop_j157xf.jpg" />
                        </div>
                        <div className="center-card ">
                            <h3> The most locally sourced food</h3>
                            <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
