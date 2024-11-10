import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styling/product.css";
import Card from "react-bootstrap/Card";

function Products() {
  let [sam, setSam] = useState([]);
  let [arr, setArr] = useState([]);

  // let g=useParams()

  // console.log(g);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((val) => {
      // console.log(val.data);
      setSam(val.data);
      setArr(val.data);
    });
  }, []);

  let subm = (e) => {
    e.preventDefault();

    console.log(e.target.value);

    let newArr = arr.filter((val, ind) => {
      return val.category == e.target.value;
    });

    console.log(newArr);

    setSam(newArr);

    if (e.target.value == "init") {
      setSam(arr);
    }
  };

  let sec_sub = (e) => {
    // e.preventDefault()

    if (e.target.value == "base") {
      setSam(arr);
    }

    if (e.target.value == "low") {
      let freshArr = [...sam];

      freshArr.sort((a, b) => {
        return a.price - b.price;
      });

      setSam(freshArr);
    }
    if (e.target.value == "high") {
      let freshArr = [...sam];
      freshArr.sort((a, b) => {
        return b.price - a.price;
      });

      setSam(freshArr);
    }
    if (e.target.value == "Rating-Low") {
      let freshArr = [...sam];
      freshArr.sort((a, b) => {
        return a.rating.rate - b.rating.rate;
      });

      setSam(freshArr);
    }
    if (e.target.value == "Rating-High") {
      let freshArr = [...sam];
      freshArr.sort((a, b) => {
        return b.rating.rate - a.rating.rate;
      });

      setSam(freshArr);
    }
    if (e.target.value == "A-Z") {
      let freshArr = [...sam];
      freshArr.sort((a, b) => a.title>b.title? 1:-1);
      setSam(freshArr);
    }
  
    if (e.target.value == "Z-A") {
      let freshArr = [...sam];
      freshArr.sort((a, b) => b.title>a.title?1:-1);
      setSam(freshArr);
    }
  };

  let res = sam.map((val, ind) => {
    return (
      <Link to={`/seemore/${val.id}`} key={ind} className="card-link">
        <div className="card" key={ind}>
          <Card style={{ width: "18rem", border: "2px solid" }}>
            <Card.Img variant="top" src={val.image} width={180} />

            {/* <img src={val.image} alt="" width={180} /> */}
            <Card.Body>
              <Card.Title>{val.title}</Card.Title>
             <div className="text">
             <Card.Text style={{ textAlign: "center" }}>
                Price:{val.price}
              </Card.Text>
              <Card.Text style={{ textAlign: "center",marginLeft:"5px" }}>
                Rating:{val.rating.rate}
              </Card.Text>
             </div>
            </Card.Body>
          </Card>
        </div>
      </Link>
    );
  });

  return (
    <>
      {console.log(sam)}
      <h1 style={{ textAlign: "center" }}>My Products</h1>

      <form action="">
        <select name="" id="" onChange={subm}>
          <option value="init">--Select Category--</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewellery</option>
        </select>
      </form>

      <form action="">
        <select name="" id="" onChange={sec_sub}>
          <option value="base">--Sort--</option>
          <option value="low">Price-Low to High</option>
          <option value="high">Price-High to Low</option>
          <option value="Rating-Low">Rating-Low to High</option>
          <option value="Rating-High">Rating-High to Low</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </form>

      <div className="products-container">{res}</div>

      <div className="nav-links">
        <Link to="/">Back Home</Link>
        <Link to="/weather">Weather Info</Link>
        <Link to="/products">Products</Link>
      </div>
    </>
  );
}

export default Products;
