import { Link } from "react-router-dom";
import { useState } from "react";
import "../Styling/home.css";

function Home() {
  let [a, seta] = useState(false);

  let sign = () => {
    seta(!a);
    console.log(a);
  };

  return (
    <div className="container">
      <button onClick={sign} className="signup-button">Signup</button>

      <Link to="products" className="link-box">Products</Link>
      <Link to="weather" className="link-box">Weather Info</Link>
    </div>
  );
}

export default Home;
