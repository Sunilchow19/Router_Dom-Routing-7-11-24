

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Component/home";
import { useState } from "react";
import Weather from "./Component/weather";
import Products from "./Component/products";
import Seemore from "./Component/seemore";

function App() {
  // let a=false


  return (
    <>
      {/* <button onClick={sign}>Signup</button> */}
      <BrowserRouter>
        {/* <Dis/> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
              
              <Home/>
              {/* {console.log(a)
              } */}
                {/* {a ? <Home /> : <Navigate to={"/"} />} */}
              </>
            }
            />

            <Route path="/weather" element={<Weather/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/seemore/:id" element={<Seemore/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
