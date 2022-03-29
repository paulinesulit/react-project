import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Photos from "./Photos.js";

const Horoscope = () => {
  const [horoscope, setHoroscope] = useState([]);
  const [loading, setLoading] = useState(true);
  const { sign } = useParams();

  const url = "https://aztro.sameerkumar.website";

  useEffect(() => {
    axios({
      url: `${url}`,
      method: "POST",
      params: {
        sign: `${sign}`,
        day: "today",
      },
    })
      .then((response) => {
        setHoroscope(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sign]);

  return (
    <div className="wrapper horoscopeDetails">
      <main className="imgAndText">
        {loading ? (
          <div className="loader"></div>
        ) : (
          Photos.map((eachPhoto, index) => {
            return (
              <div
                className="image animate__animated animate__zoomIn"
                key={index}
              >
                {eachPhoto.name === sign ? (
                  <img src={eachPhoto.icon} alt={eachPhoto.name} />
                ) : null}
              </div>
            );
          })
        )}
        <div className="horoscopeInfo">
          <h2>{sign}</h2>
          <h3>{horoscope.date_range}</h3>
          <h3>Horoscope for: {horoscope.current_date}</h3>
          <h4>{horoscope.description}</h4>
          <p>Color: {horoscope.color}</p>
          <p>Compatibility: {horoscope.compatibility}</p>
          <p>Lucky Number: {horoscope.lucky_number}</p>
          <p>Lucky Time: {horoscope.lucky_time}</p>
          <p>Mood: {horoscope.mood}</p>
        </div>
      </main>
    </div>
  );
};

export default Horoscope;
