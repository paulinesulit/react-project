import { useEffect } from "react";
import axios from "axios";

const Day = () => {
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
  }, []);
  return <div></div>;
};
