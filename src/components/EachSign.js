import { useState } from "react";

function EachSign(props) {
  const [showHoroscope, setShowHoroscope] = useState(false);

  const deferrer = () => {
    setShowHoroscope(!showHoroscope);
  };
  return (
    <div>
      <h2>{props.signName}</h2>
      <button onClick={deferrer}>
        {showHoroscope ? "< Back" : "Your horoscope for the day!"}
      </button>
      <p>{props.dailyHoroscope}</p>
    </div>
  );
}

export default EachSign;
