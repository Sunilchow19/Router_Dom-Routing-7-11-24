import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styling/seemore.css";

function Seemore() {
  let [res, setRes] = useState({});

  let g = useParams();
  // console.log(g.id);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${g.id}`).then((val) => {
      console.log(val.data);
      setRes(val.data);
    });
  }, []);

  return (
    <>
      {Object.keys(res).length > 0 ? (
        <div className="product-detail-container">
          <h2 className="product-title">{res.id}</h2>
          <h2 className="product-title">{res.title}</h2>
          <h2 className="product-category">{res.category}</h2>
          <h2 className="product-price">Price:{res.price}</h2>
          <h2 className="product-description">{res.description}</h2>
          <img className="product-image" src={res.image} alt={res.title} />
          <h2 className="product-rating">
          Rating:<button className="rating-button">{res.rating.rate}</button>
          Count:<button className="rating-button">{res.rating.count}</button>
          </h2>
        </div>
      ) : (
        <div className="loader">Loading...</div>
      )}
    </>
  );
}

export default Seemore;
