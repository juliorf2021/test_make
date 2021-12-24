import React from "react";


import Products from "../products/products";
import "./ListOfProducts.css";

class ListOfProducts extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
        products:[]
    };
} 


  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
    .then(response =>{
        return response.json();
    })
    .then(products=>{
        this.setState({products});
    });
  }

  render() {
    const products = this.state.products.map((product) => {
      return (
          <Products
            src={product.image}
            alt={product.title}
            id={product.id}
          />
      );
    });
    
    return <div className="grid-of-products">{products}</div>;
  }
}

export default ListOfProducts;
