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

    const horoscopeData = [];

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
          horoscopeData.push(currentHoroscope);

          // console.log(horoscope, "horoscope in useEffect");
          // console.log(horoscopeData, "horoscopeData");
        })
        .catch((error) => {
          console.log(error);
        });
    });

    setHoroscope(horoscopeData);
    // console.log(horoscope, "horoscope in useEffect");
    // console.log(horoscopeData, "horoscopeData");
  }, [horoscope]);

  return (
    <div>
      {console.log(horoscope.length)}
      <Header />
      <main>
        <div className="errorMsg"></div>
        {/* {console.log(horoscope.length)} */}
        {horoscope.length > 0
          ? horoscope.map((eachHoroscope, index) => {
              return (
                <EachSign
                  key={index}
                  signName={eachHoroscope.sign}
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