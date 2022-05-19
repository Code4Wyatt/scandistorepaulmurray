import React, { Component } from "react";
import "./ProductPage.scss";
import { useParams } from "react-router-dom";
import { request, gql } from "graphql-request";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }

  render() {
    const id = useParams.id;
    console.log(this.props);

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
componentDidMount() {
    request("http://localhost:4000", GET_CLOTHES).then((data) => {
      console.log(data);
      this.setState({ data: data.category.products });
      console.log("Products State: ", this.state.data);
      

    }).then(() => {
      let handleAddProducts = () => {
        this.props.addCartItemAction(this.state.data)
      }

      handleAddProducts();
    });
  }


    return (<div product={this.props.product}>d</div>);
  }
}
