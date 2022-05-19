import React, { Component } from "react";
import "./ProductPage.scss";
import { useParams } from "react-router-dom";
import { request, gql } from "graphql-request";

const id = useParams.id;

const GET_PRODUCT = gql`
  {
      product (id: "huarache-x-stussy-le" )  {
      id
       name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
      }
  }
  `;

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }

  

  componentDidMount() {
    request("http://localhost:4000", GET_PRODUCT).then((data) => {
      console.log("Product Data: ", data);
      this.setState({ data: data.category.products });
      console.log("Products State: ", this.state.data);
      

    })
  }

  render() {
    
    console.log(this.props);

   




    return (<div product={this.props.product}>d</div>);
  }
}
