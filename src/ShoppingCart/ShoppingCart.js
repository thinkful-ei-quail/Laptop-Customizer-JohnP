import React, { Component } from 'react';
import PartInCart from './PartInCart';
import './ShoppingCart.css';
import TotalInCart from './TotalInCart';


export default class ShoppingCart extends Component {


  render() {
    const cartSum = Object.keys(this.props.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.state.selected[feature];
      return (
        <PartInCart
          key={featureHash}
          feature={feature}
          featureHash={featureHash}
          selectedOption={selectedOption}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      )
    });
    return (
      <>
        {cartSum}

        <TotalInCart total={this.props.total}
              USCurrencyFormat={this.props.USCurrencyFormat}
            />
      </>
    )
  }
}
