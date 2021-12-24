import React from "react";
import { useParams } from 'react-router-dom'
import {useEffect, useState} from "react";
import axios from "axios";


import "./Cart.css";

function Cart() {
  const { id } = useParams()
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('https://fakestoreapi.com/products/'+id)
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <div className="product-container">
    <img className="product" src="" alt="" id="" />
  </div>
  <div className="product-information">
    <h2 >{JSON.stringify(data.title)}</h2>
    <h3 className="author information-el">Categoria: {JSON.stringify(data.category)}</h3>
    <h3 className="value information-el">Precio: {JSON.stringify(data.price)}</h3>

    <p>
    {JSON.stringify(data.description)}
    </p>
  
    <button className="add-to-cart" type="submit">
      Agregar Carrito
    </button>
  </div>
  </>
  );
}

export default Cart;