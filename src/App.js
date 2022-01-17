// PSEUDO CODE

// 1. Create React App
// 2. Set up HTML with a heading "Daily Horoscope" and today's date
// 3. Display all the astrology signs with symbols in an anchor tag

// 4. Create an array with the astrology signs
// 5. Loop through the array to get each sign and use as a template literal within the url
// 6. Fetch astrology API to get data of each sign
// 7. When the user clicks the sign, display daily horoscope and lucky number for the sign from API
// 8. Add an error component using try/catch method, showing text that there's an error when data doesn't come back from the API
// 9. Add an icon that flips back to the symbol when user clicks it

import { useState, useEffect } from "react";
import EachSign from "./components/EachSign.js";
import "./App.css";

function App() {
  const [sign, setSign] = useState([
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ]);
  const [horoscope, setHoroscope] = useState([]);
  // const [showHoroscope, setShowHoroscope] = useState(false);

  useEffect(() => {
    sign.forEach((eachSign) => {
      // setSign(eachSign);
      const URL = `https://aztro.sameerkumar.website/?sign=${eachSign}&day=today`;
      fetch(URL, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((json) => {
          // console.log(json);
          setHoroscope(json);
          // setSign(eachSign);
          // console.log([json]);
          // json - each object
          // setHoroscope(json.description);
          // console.log(Object.entries(json));
        });
    });
  }, []);

  // console.log(horoscope.description);
  // => objects of each sign

  return (
    <div>
      <h1>🌙 DAILY HOROSCOPE 💫</h1>
      {sign.map((horoscopeSign, index) => {
        // for (let item in horoscope) {
        //   console.log(horoscope.description);
        // }
        return (
          <EachSign
            key={index}
            signName={horoscopeSign}
            dailyHoroscope={setHoroscope.description}
          />
        );
      })}
    </div>
  );
}

export default App;

