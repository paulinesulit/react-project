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
              <div className="imgContainer" key={index}>
                {eachPhoto.name === props.signName ? (
                  <img src={eachPhoto.icon} alt={props.signName} />
                ) : null}
              </div>
            );
          })}

      <h2>{props.signName}</h2>
      <h3>{props.date}</h3>
      <button onClick={deferrer}>
        {showHoroscope ? "< Back" : "Your horoscope for the day!"}
      </button>
      {showHoroscope ? <p>{props.dailyHoroscope}</p> : null}
    </div>
  );
}

export default EachSign;
