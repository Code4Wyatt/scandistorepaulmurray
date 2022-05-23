import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import { removeCartItemAction } from "../../redux/actions/CartAction";
import { connect } from "react-redux";
import "./Cart.scss";

const mapStateToProps = (state) => ({
  currency: state.currency.value,
  cart: state.cart.cart,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (value) => {
    dispatch(removeCartItemAction(value));
  },
});

class Cart extends Component {
  render() {
    console.log("PROPS", this.props);
    console.log(this.props.currency[0].items);
    console.log(this.props.cart[0][0][1][0][0]);
    return (
      <>
        <Nav />
        <div>
          <h3>Cart</h3>
          {this.props.cart.map((product) => {
            console.log(product[0][0][0].name);
            console.log(product[0][0][0].attributes);
            return (
              <div
                onClick={() => this.props.removeFromCart(product)}
                className="cart-item"
              >
                <div className="cart-left">
                  <b>{product[0][0][0].brand}</b>
                  <p>{product[0][0][0].name}</p>
                  {(this.props.currency[0].items === "USD" && (
                    <b>
                      {product[0][0][0].prices[0].currency.symbol}
                      {product[0][0][0].prices[0].amount}
                    </b>
                  )) ||
                    (this.props.currency[0].items === "GBP" && (
                      <b>
                        {product[0][0][0].prices[1].currency.symbol}
                        {product[0][0][0].prices[1].amount}
                      </b>
                    )) ||
                    (this.props.currency[0].items === "AUD" && (
                      <b>
                        {product[0][0][0].prices[2].currency.symbol}
                        {product[0][0][0].prices[2].amount}
                      </b>
                    )) ||
                    (this.props.currency[0].items === "JPY" && (
                      <b>
                        {product[0][0][0].prices[3].currency.symbol}
                        {product[0][0][0].prices[3].amount}
                      </b>
                    )) ||
                    (this.props.currency[0].items === "RUB" && (
                      <b>
                        {product[0][0][0].prices[4].currency.symbol}
                        {product[0][0][0].prices[4].amount}
                      </b>
                    ))}
                  {product[0][0][0].attributes.map((attribute) => {
                    return (
                      <div>
                        <h5>{attribute.name}</h5>
                        <div className="colors d-flex">
                          {attribute.items.map((item, i) => {
                            return (
                              <div
                                style={{
                                  backgroundColor: `${item.value}`,
                                  color: `${item.value}`,
                                }}
                                className="option m-1"
                                onClick={() =>
                                  this.setState({
                                    selectedAttributes: [
                                      ...this.state.selectedAttributes,
                                      `${item.value}`, `${i}`
                                    ],
                                  })
                                }
                              >
                                <div className="option-value">
                                  <p className="value">{item.value}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="cart-right">
                  <img
                    src={product[0][0][0].gallery[0]}
                    className="cart-image"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
