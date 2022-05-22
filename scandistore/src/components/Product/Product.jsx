import "./Product.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addCartItemAction } from "../../redux/actions/CartAction";

const mapStateToProps = (state) => ({
  cart: state.cart.items,
  currency: state.currency.value,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => {
    dispatch(addCartItemAction(product));
  },
});

class Product extends Component {
  render() {
    console.log("PROD PROP", this.props.currency[0].items);
    return (
      <div className="col-4 product">
        <img
          alt="productpic"
          src={this.props.product.gallery[0]}
          className="product__image"
        />
        <h5>{this.props.product.name}</h5>
        <div className="prices d-flex">
       
            <div>
              {(this.props.currency[0].items === "USD" && <p>$</p>) ||
                (this.props.currency[0].items === "GBP" && <p>£</p>) ||
                (this.props.currency[0].items === "RUB" && <p>₽</p>) ||
                (this.props.currency[0].items === "JPY" && <p>¥</p>) ||
                (this.props.currency[0].items === "AUD" && <p>A$</p>)}
            </div>
            <div>{this.props.product.prices[0].amount}</div>
          
        </div>
        <Link to={this.props.product.id} className="product-link">
          View Product
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
