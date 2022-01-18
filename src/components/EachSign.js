import { useState } from "react";

function EachSign(props) {
  const [showHoroscope, setShowHoroscope] = useState(false);

  const deferrer = () => {
    setShowHoroscope(!showHoroscope);
  };
  return (
    <div className="horoscopeContainer">
      <h2>{props.signName}</h2>
      <button onClick={deferrer}>
        {showHoroscope ? "< Back" : "Your horoscope for the day!"}
      </button>
      {showHoroscope ? <p>{props.dailyHoroscope}</p> : null}
    </div>
  );
}

export default EachSign;
