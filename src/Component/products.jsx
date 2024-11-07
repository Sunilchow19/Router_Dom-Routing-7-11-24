import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "../Styling/product.css"
import Card from 'react-bootstrap/Card';


function Products(){

    let [sam,setSam]=useState([])
    let [arr,setArr]=useState([])

    // let g=useParams()

    // console.log(g);
    

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((val)=>{
            // console.log(val.data);
            setSam(val.data)
            setArr(val.data)
        })
    },[])


    let subm=(e)=>{
        e.preventDefault()

        console.log(e.target[0].value);

        let newArr=arr.filter((val,ind)=>{
            return (
             
                val.category==e.target[0].value

            )
        })

        console.log(newArr);
        

        setSam(newArr)
        
    }


    let sec_sub=(e)=>{
        e.preventDefault()

        if(e.target[0].value=="low"){

            let freshArr=[...sam]

            freshArr.sort((a,b)=>{
   
            
            
            return (a.price-b.price)
           })
            
           setSam(freshArr)
        }
        if(e.target[0].value=="high"){

            let freshArr=[...sam]
            freshArr.sort((a,b)=>{
     
              
              
              return (b.price-a.price)
             })
              
             setSam(freshArr)
          }
    }


    let res=sam.map((val,ind)=>{
        return (
            <Link to={`/seemore/${val.id}`} key={ind} className="card-link">
            <div className="card" key={ind}>
                <Card style={{ width: '18rem' ,border:"2px solid"}}>
            <Card.Img variant="top" src={val.image} width={180} />

            {/* <img src={val.image} alt="" width={180} /> */}
            <Card.Body>
              <Card.Title>{val.title}</Card.Title>
              <Card.Text style={{textAlign:"center"}}>
         Price:{val.price}
              </Card.Text>
            </Card.Body>
          </Card>
            </div>
           </Link>

            

        )
    })


    return(
        <>

{console.log(sam)
}
        <h1 style={{textAlign:"center"}}>My Products</h1>

        <form action="" onSubmit={subm}>
            <select name="" id="">
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewellery</option>

            </select>
            <input type="submit" value="Search" />

        </form>


        <form action="" onSubmit={sec_sub}>
            <select name="" id="">
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>

            </select>

            <input type="submit" value="Sort" />
        </form>

        <div className="products-container">
                {res}
            </div>

            <div className="nav-links">
  <Link to="/">Back Home</Link>
  <Link to="/weather">Weather Info</Link>
  <Link to="/products">Products</Link>
</div>

        </>
    )
}


export default Products