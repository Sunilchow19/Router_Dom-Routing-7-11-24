import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styling/weather.css";

function Weather() {
  const [inp, setInp] = useState("");
  const [obj, setObj] = useState({});

  const enter = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=187bcf7f727f31b0cd581fdb7b19c089`
    )
      .then((res) => res.json())
      .then((res) => setObj(res));
  };

  const sty = () => {
    if (!obj.main) return null;

    return (
      <div className="weather-info">
        <img
          src={
            obj.main.temp < 273.15
              ? "https://i.pinimg.com/originals/61/2a/67/612a677c31da6f703d79ed41a0f3dd7e.jpg"
              : obj.main.temp < 283.15
              ? "https://th.bing.com/th/id/OIP.QcFHZet_hrkpxNdVMjSZigHaE7?rs=1&pid=ImgDetMain"
              : obj.main.temp < 303.15
              ? "https://1471793142.rsc.cdn77.org/data/images/full/6325/weather.jpg"
              : "https://wallpapercave.com/wp/wp4555644.jpg"
          }
          alt="Weather condition"
          width={400}
        />
        <h1>{obj.name}</h1>
        <h1>
          {Math.round(obj.main.temp - 273.15)}
          <sup>°</sup>C
        </h1>
      </div>
    );
  };

  return (
    <div className="weather-container">
      <h1 className="weather-title">Weather</h1>
      <form className="weather-form" onSubmit={enter}>
        <input type="text" onChange={(e) => setInp(e.target.value)} value={inp} />
        <input type="submit" value="Submit" />
      </form>

      {sty()}

      <div className="nav-links">
        <Link to="/">Back Home</Link>
        <Link to="/weather">Weather Info</Link>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
}

export default Weather;
