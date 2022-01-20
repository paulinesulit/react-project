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
          // const currentHoroscope = { sign: eachSign, data: response.data };
          // horoscopeData.push(currentHoroscope);
          return response;
          // console.log(horoscope, "horoscope in useEffect");
          // console.log(horoscopeData, "horoscopeData");
        })
        .catch((error) => {
          console.log(error);
        });
      // );
      // return reviewPromises;
      // console.log(reviewPromises);
      // return horoscopeData;
    });
    // console.log(horoscopeData);
    // console.log(promisesArray);
    // setHoroscope(horoscopeData);
    // console.log(horoscope, "horoscope in useEffect");
    // console.log(horoscopeData, "horoscopeData");
    // Promise.all(reviewPromises).then((values) => {
    //   console.log(values);
    // });
    Promise.all(promisesArray).then((allHoroscopes) => {
      // console.log(allHoroscopes);
      setHoroscope(allHoroscopes);
    });
  }, []);

  return (
    <div>
      {/* {console.log(horoscope.length)} */}
      <Header />
      <main>
        <div className="errorMsg"></div>
        {/* {console.log(horoscope.length)} */}
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
