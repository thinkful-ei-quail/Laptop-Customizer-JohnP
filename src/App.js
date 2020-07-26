import React, { Component } from 'react';
import './App.css';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import TotalInCart from './ShoppingCart/TotalInCart';
import Customizer from './Customizer/Customizer';




class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }


  };

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  updateFeature = (feature, newValue) => {
    console.log(feature, newValue);
    const selected = Object.assign({}, this.state.selected);
    console.log(this.state.selected);
    selected[feature] = newValue;
    this.setState(prevState => (
      {
        selected

      }


    ));

  };

  render() {
    console.log(this.state)
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Customizer
              features={this.props.features}
              USCurrencyFormat={this.USCurrencyFormat}
              state={this.state}
              updateFeature={this.updateFeature}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>

            <ShoppingCart
              USCurrencyFormat={this.USCurrencyFormat}
              state={this.state}
            />

            <TotalInCart total={total}
              USCurrencyFormat={this.USCurrencyFormat}
            />

          </section>
        </main>
      </div>
    );
  }


  static defaultProps = {
    Processor: {
      name: 'default processor',
      cost: 1
    },
    'Operating System': {
      name: 'default OS',
      cost: 2
    },
    'Video Card': {
      name: 'default onboardd graphics',
      cost: 3
    },
    Display: {
      name: 'default CRT Monitor',
      cost: 4
    }

  };
}



export default App;
