import React, { Component } from 'react';
import Nav from "../components/Nav/Nav";
import { removeCartItemAction } from "../redux/actions/CartAction";
import { connect } from "react-redux";

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
      console.log("PROPS", this.props)
    return (
        <>
         <Nav />
         <div>
             <h3>Cart</h3>
             {this.props.cart.map((product) => {
                 return <div onClick={() => this.props.removeFromCart(product)}>hi</div>
             })}
         </div>
        </>
     
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)