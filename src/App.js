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
import axios from "axios";
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
  const [horoscope, setHoroscope] = useState("");

  useEffect(() => {
    const individualSign = sign.map((eachSign) => {
      const URL = `https://aztro.sameerkumar.website/?sign=${eachSign}&day=today`;
      fetch(URL, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json.description);
          setHoroscope(json.description);
        });
    });
  }, []);

  return (
    <div>
      <h1>🌙 DAILY HOROSCOPE 💫</h1>
    </div>
  );
}

export default App;
