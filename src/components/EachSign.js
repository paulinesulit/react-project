import { useState } from "react";
import Photos from "./Photos.js";

function EachSign(props) {
  const [showHoroscope, setShowHoroscope] = useState(false);

  const deferrer = () => {
    setShowHoroscope(!showHoroscope);
  };

  return (
    <div className="horoscopeContainer">
      {showHoroscope
        ? null
        : Photos.map((eachPhoto, index) => {
            return (
              <div
                className="imgContainer animate__animated animate__zoomIn"
                key={index}
              >
                {eachPhoto.name === props.signName ? (
                  <img src={eachPhoto.icon} alt={props.signName} />
                ) : null}
              </div>
            );
          })}

      <h2 className="animate__animated animate__fadeIn">{props.signName}</h2>
      <h3 className="animate__animated animate__fadeIn">{props.date}</h3>
      <button onClick={deferrer} className="animate__animated animate__fadeIn">
        {showHoroscope ? "< Back" : "Your horoscope for the day!"}
      </button>

      {showHoroscope ? (
        <div>
          <p className="animate__animated animate__fadeIn">
            {props.dailyHoroscope}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default EachSign;
