import React from "react";

import egypt from "../../assets/egypt.jpg";
import spain from "../../assets/spain.jpg";
import paris from "../../assets/paris.jpg";
import john from "../../assets/john.jpg";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: john,
    travelerName: "john",
    socialLink: "@john",
  },
  {
    id: 2,
    destinationImage: spain,
    travelerImage: john,
    travelerName: "john",
    socialLink: "@john",
  },
  {
    id: 3,
    destinationImage: egypt,
    travelerImage: john,
    travelerName: "john",
    socialLink: "@john",
  },
  {
    id: 4,
    destinationImage: egypt,
    travelerImage: john,
    travelerName: "john",
    socialLink: "@john",
  },
];
const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>
        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                <div key={id} className="singleTraveler">
                  <img
                    src={destinationImage}
                    alt=""
                    className="destinationImage"
                  />

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img
                        src={travelerImage}
                        alt=""
                        className="travelerImage"
                      />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
