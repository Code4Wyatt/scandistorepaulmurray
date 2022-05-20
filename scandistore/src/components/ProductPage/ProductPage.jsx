import React, { Component } from "react";
import "./ProductPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import { request, gql } from "graphql-request";
import { connect } from "react-redux";
import { addCartItemAction } from "../../redux/actions/CartAction";
import Nav from "../../components/Nav/Nav";

const mapStateToProps = (state) => ({
  products: [state.products.products],
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => {
    dispatch(addCartItemAction(product));
  },
});

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, gallery: [], attributes: [], name: "", brand: "" };
  }

  componentDidMount() {
    // const idFromParams = this.props.params.name;
    // const id = idFromParams.split("-")[0];

    const id = this.props.params.name;

    console.log("id", id);
    console.log(this.props.products[0][0].category.products);

    const productArray = this.props.products[0][0].category.products;

    let product = productArray.filter(function (product) {
      return id.indexOf(product.id) >= 0;
    });
    this.setState({ product: product });

    console.log("Attributes >>>", product[0].attributes);
    this.setState({ name: product[0].name });
    this.setState({ brand: product[0].brand });
    this.setState({ gallery: product[0].gallery });
    this.setState({ attributes: product[0].attributes });
  }

  render() {
    console.log(this.state.product[0]);
    console.log("Gallery", this.state.gallery);

    return (
      <>
        <Nav />
        <div className="product-page-section">
        <div className="product-gallery">
          {this.state.gallery.map((img, i) => {
            return <img src={this.state.gallery[i]} className="gallery-img" />;
          })}
        </div>
        <div className="product-image">
          <img src={this.state.gallery[0]} className="product-img" />
        </div>
        <div className="product-options">
          <div className="product-title">
            <h1>{this.state.name}</h1>
            <h2>{this.state.brand}</h2>
          </div>
          <div>
            <h4>SIZE</h4> 
            <div className="product-size">
              <div className="size-box">
                <p className="size-text">XS</p>
              </div>
              <div className="size-box">
                <p className="size-text">S</p>
              </div>
              <div className="size-box">
                <p className="size-text">M</p>
              </div>
              <div className="size-box">
                <p className="size-text">L</p>
              </div>
            </div>
            </div>
            <div className="attributes">
              {this.state.attributes.map((attribute) => {
                return (<div>
                  <h1>{attribute.name}</h1>
                  <div className="colors">
                  {attribute.items.map((item) => {
                    return <div style={{ backgroundColor: `${item.value}`, color: `${item.value}` }} className="colors"></div>
                  })}
                  </div>
                  </div>
                )
              })}
            </div>
        </div>
      </div>
      </>
      
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => <ProductPage {...props} params={useParams()} />);
