import React, { Component, setState } from "react";
import { graphql, Query } from "react-apollo";
import { request, gql } from "graphql-request";
import "./Clothes.scss";
import Product from "../../components/Product/Product";
import { useSelector, connect, useDispatch } from "react-redux";
import { addCartItemAction } from "../../redux/actions/CartAction";
import { addProductsAction } from "../../redux/actions/ProductsAction";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
  cart: state.cart.items
})

const mapDispatchToProps = (dispatch) => ({
  addToProducts: (products) => {
    dispatch(addProductsAction(products))
  }
})

const GET_CLOTHES = gql`
  {
    category {
      products {
        id
        name
        brand
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
      }
    }
  }
`;

export class Clothes extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  
  

  componentDidMount() {
    request("http://localhost:4000", GET_CLOTHES).then((data) => {
      console.log(data);
      this.setState({ data: data.category.products });
      console.log("Products State: ", this.state.data);
      this.props.addToProducts(data);

    }).then(() => {
      let handleAddProducts = () => {
        addCartItemAction(this.state.data)
      }

      handleAddProducts();
    });
  }

  render() {
    console.log("read", this.state.data);
    return (
      <>

        <div className="container-fluid clothes-container">
          <h2 className="header">All Products</h2>
          <div className="row">
            {this.state.data.map((product, i) => {
              let cleanString = product.description;
              let cleaned = cleanString.replace(/<\/?[^>]+(>|$)/g, "");
              let trimmed = cleaned.substring(0, 31);
              console.log("name", product.name)
              return (
                <div className="col-4 products">
                  <Product product={product}/>
                {/* <div key={i} className="col-4 product">
                  <img
                    alt="productpic"
                    src={product.gallery[0]}
                    className="product__image"
                  />
                  <h5>{product.name}</h5>
                  <p className="prices">
                    <b>{product.prices[0].amount}</b>
                  </p>
                  {/* {product.prices.map((price) => {
                    return (
                      <p>
                        {price.currency.symbol}
                        {price.amount}
                      </p>
                    );
                  })} */}
                
               
                </div>
              );
            })}
          </div>
         
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clothes);
