import { useEffect, useState } from "react";
import axios from "axios";

import EachSign from "./components/EachSign.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js";

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
      "pisces",
    ];

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
          const currentHoroscope = { sign: eachSign, data: response.data };
          const copyOfHoroscope = horoscope;
          copyOfHoroscope.push(currentHoroscope);
          setHoroscope(copyOfHoroscope);
        })
        .catch((error) => {
          document.getElementsByClassName(
            "errorMsg"
          ).innerHTML = `<h2>Sorry! There's an error!</h3>`;
        });
    });
  }, [horoscope]);

  return (
    <div>
      <Header />
      <main>
        <div className="errorMsg"></div>
        {horoscope.map((eachHoroscope, index) => {
          return (
            <EachSign
              key={index}
              signName={eachHoroscope.sign}
              date={eachHoroscope.data.date_range}
              dailyHoroscope={eachHoroscope.data.description}
            />
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;

// css pattern by Lea Verou - link: 