import { useEffect, useState } from "react";
import EachSign from "./components/EachSign.js";
import axios from "axios";
import "./App.css";

function App() {
  const url = "https://aztro.sameerkumar.website";
  const [horoscope, setHoroscope] = useState([]);

  useEffect(() => {

    const sign = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces"]

    sign.forEach((eachSign) => {
      axios({
        url: `${url}`,
        method: "POST",
        params: {
          sign: `${eachSign}`,
          day: "today",
        },
      })
        .then((response) => {
          const currentHoroscope = {sign: eachSign, data: response.data}
          const copyOfHoroscope = horoscope;
          copyOfHoroscope.push(currentHoroscope);
          setHoroscope(copyOfHoroscope);
        })
        .catch((error) => {
          document.getElementsByClassName("errorMsg").innerHTML = `<h2>Sorry! There's an error!</h3>`
        });
    });
  }, [horoscope]);

  return (
    <div className="wrapper">
      <header>
        <h1>🌙 DAILY HOROSCOPE 💫</h1>
        <div className="errorMsg"></div>
      </header>
      <main>
      {
        horoscope.map((eachHoroscope, index) => {
          return (
            <EachSign
              key={index}
              signName={eachHoroscope.sign}
              dailyHoroscope={eachHoroscope.data.description}
             />
          );
        })
      }
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;

// css pattern by Lea Verou - link: https://projects.verou.me/css3patterns/#