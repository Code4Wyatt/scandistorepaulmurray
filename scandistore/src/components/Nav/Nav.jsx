import "./Nav.scss";
import React, { Component } from "react";
import logo from "../../media/logo.png";
import { setCurrencyAction } from "../../redux/actions/CurrencyAction.js";
import { connect, useDispatch } from "react-redux";

const mapStateToProps = state => ({
  currency: state.currency.value
});

const mapDispatchToProps = (dispatch) => ({
  setCurrency: (value) => {
    dispatch(setCurrencyAction(value))
  }
});

class Nav extends Component {
  constructor(props) {
     super(props);
      this.state = { currency: 'GBP'};
  };

  
componentDidMount() {
  console.log("Currency state: ", this.props.currency[0].items)
}

  render() {

  
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col nav-links">
            <div>
              <a className="nav-link" href="/">Women</a>
            </div>
            <div>
              <a className="nav-link" href="/">Men</a>
            </div>
            <div>
              <a className="nav-link" href="/">Tech</a>
            </div>
          </div>
          <div className="col nav-logo">
            <img src={logo} className="logo" />
          </div>
          <div className="col nav-options">
            <div className="currency-section">
              <ul>
                <li>
                  <div className="currency-button">
                  
                  {this.props.currency[0].items === "USD" && <p>$</p> ||
                  this.props.currency[0].items === "GBP" && <p>£</p> || this.props.currency[0].items === "AUD" && <p>A$</p> || this.props.currency[0].items === "JPY" && <p>¥</p> || this.props.currency[0].items === "RUB" && <p>₽</p>
                  
                  
                  
                  }
                  </div>
                  <ul className="dropdown">
                    <li>
                      <div className="currency-options" onClick={() => this.props.setCurrency({items: 'USD'})}>$</div>
                    </li>
                    <li>
                      <div onClick={() => this.props.setCurrency({items: 'GBP'})}>£</div>
                    </li>
                    <li>
                      <div onClick={() => this.props.setCurrency({items: 'AUD'})}>A$</div>
                    </li>
                    <li>
                      <div onClick={() => this.props.setCurrency({items: 'JPY'})}>¥</div>
                    </li>
                    <li>
                      <div onClick={() => this.props.setCurrency({items: 'RUB'})}>₽</div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="cart-option">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);