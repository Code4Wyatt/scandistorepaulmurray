import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product extends Component {
  render() {
    return (
      <div className="col-4 product">
        <img
          alt="productpic"
          src={this.props.product.gallery[0]}
          className="product__image"
        />
        <h5>{this.props.product.name}</h5>
        <p className="prices">
          <b>£{this.props.product.prices[0].amount}</b>
        </p>
        <Link to={this.props.product.id}>
            Go To Product
        </Link>
        {/* {product.prices.map((price) => {
          return (
            <p>
              {price.currency.symbol}
              {price.amount}
            </p>
          );
        })} */}
        {/* <p className="prices">
          <b>{product.prices.amount}</b>
        </p> */}
      </div>
    );
  }
}
