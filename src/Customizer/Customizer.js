import React, { Component } from 'react';
import PartListInCustomizer from './PartListInCustomizer'
import './Customizer.css'

export default class Customizer extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx
      return (
        <PartListInCustomizer

          key={featureHash}
          features={this.props.features}
          feature={feature} idx={idx}
          state={this.props.state}
          USCurrencyFormat={this.props.USCurrencyFormat}
          updateFeature={this.props.updateFeature}
        />)
    });
    return (
      <>
        {features}
      </>
    )
  }
}
