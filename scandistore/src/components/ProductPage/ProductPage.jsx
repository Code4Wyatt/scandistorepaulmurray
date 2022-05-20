import React, { Component } from "react";
import "./ProductPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import { request, gql } from "graphql-request";
import { connect } from 'react-redux'
import { addCartItemAction } from "../../redux/actions/CartAction";

const mapStateToProps = state => ({
  products: [state.products.items]
})

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => {
    dispatch(addCartItemAction(product))
  },
})

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }

  componentDidMount() {
    
    const idFromParams = this.props.params.name;
    const id = idFromParams.split("-")[0];
    console.log(this.props);
  
    let GET_PRODUCT = gql`
      query GetProductById($id: String) {
           product (id: ${id})  {
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
    
    request("http://localhost:4000", GET_PRODUCT).then((data) => {
      console.log("Product Data: ", data);
      this.setState({ data: data.category.products });
      console.log("Products State: ", this.state.data);
    });
  }

  render() {
    let id = this.props.params;

    console.log(this.id);

    return <div product={this.props.product}>d</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)((props) => <ProductPage {...props} params={useParams()} />);
