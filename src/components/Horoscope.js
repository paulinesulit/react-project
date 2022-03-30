import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Photos from "./Photos.js";
import DisplayDetails from "./DisplayDetails";

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

  const yesterday = () => {
    axios({
      url: `${url}`,
      method: "POST",
      params: {
        sign: `${sign}`,
        day: "yesterday",
      },
    })
      .then((response) => {
        setHoroscope(response.data);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const today = () => {
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
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const tomorrow = () => {
    axios({
      url: `${url}`,
      method: "POST",
      params: {
        sign: `${sign}`,
        day: "tomorrow",
      },
    })
      .then((response) => {
        setHoroscope(response.data);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

        <div className="textContainer">
          <div className="btns">
            <button onClick={yesterday}>Yesterday</button>
            <button onClick={today}>Today</button>
            <button onClick={tomorrow}>Tomorrow</button>
          </div>
          <div className="horoscopeInfo">
            <h2>{sign}</h2>
            <h3>{horoscope.date_range}</h3>
            <DisplayDetails object={horoscope} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Horoscope;
