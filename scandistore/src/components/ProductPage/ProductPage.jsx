import React, { Component } from "react";
import "./ProductPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import { request, gql } from "graphql-request";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <WrappedComponent
            {...props}
            params={params}
            navigate={navigate}
        />
    );
};

// let GET_PRODUCT = gql`
// query GetProductById($id: String!) {
//      product (id: ${id} )  {
//      id
//      name
//      inStock
//      gallery
//      description
//      category
//      attributes {
//        id
//        name
//        type
//        items {
//          displayValue
//          value
//          id
//        }
//      }
//      prices {
//        currency {
//          label
//          symbol
//        }
//        amount
//      }
//      brand
//      }
//  }

//  `;

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }

  
//   componentDidMount() {
//     request("http://localhost:4000", {
//         body: `
//         query GetProductById($id: String!) {
//              product (id: ${this.id} )  {
//              id
//              name
//              inStock
//              gallery
//              description
//              category
//              attributes {
//                id
//                name
//                type
//                items {
//                  displayValue
//                  value
//                  id
//                }
//              }
//              prices {
//                currency {
//                  label
//                  symbol
//                }
//                amount
//              }
//              brand
//              }
//          }
       
//          `
//     }).then((data) => {
//       console.log("Product Data: ", data);
//       this.setState({ data: data.category.products });
//       console.log("Products State: ", this.state.data);
      

//     })
//   };



  render() {
    
    let id = this.props.params;
 
    console.log(this.id)
       
    return (<div product={this.props.product}>d</div>);
  }
}

export default withRouter(ProductPage)