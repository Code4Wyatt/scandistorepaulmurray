import React, { Component } from 'react'
import './ProductPage.scss'
import { useParams } from "react-router-dom";

const GET_PRODUCT = gql`
{
    product (id: ${id} )  {
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
   
  render() {
    const id = useParams.id;
    console.log(this.props)
    return (
      <div product={this.props.product}>d</div>
    )
  }
}
