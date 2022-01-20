import { useEffect, useState } from "react";
import axios from "axios";

import EachSign from "./components/EachSign.js";
import Header from "./components/Header.js";
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

    const promisesArray = sign.map((eachSign) => {
      return axios({
        url: `${url}`,
        method: "POST",
        params: {
          sign: `${eachSign}`,
          day: "today",
        },
      })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    });

    Promise.all(promisesArray).then((allHoroscopes) => {
      setHoroscope(allHoroscopes);
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className="errorMsg"></div>
        {horoscope.length > 0
          ? horoscope.map((eachHoroscope, index) => {
              return (
                <EachSign
                  key={index}
                  signName={eachHoroscope.config.params.sign}
                  date={eachHoroscope.data.date_range}
                  dailyHoroscope={eachHoroscope.data.description}
                />
              );
            })
          : null}
      </main>
      <Footer />
    </div>
  );
}

export default App;
