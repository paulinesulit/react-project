import Photos from "./Photos.js";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="topText">
        <h1 className="animate__animated animate__fadeIn">WELCOME!</h1>
        <p className="animate__animated animate__fadeIn">
          Choose your sign below to find out your horoscope ✨
        </p>
      </div>

      <section className="wrapper">
        {Photos.map((eachPhoto, index) => {
          return (
            <div
              className="imgContainer animate__animated animate__zoomIn"
              key={index}
            >
              <Link to={`/${eachPhoto.name}`} className="linkContainer">
                <img src={eachPhoto.icon} alt={eachPhoto.name} />
                <h2>{eachPhoto.name}</h2>
                <h3>{eachPhoto.date}</h3>
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
