import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TechSpecs from './components/TechSpecs';
import Summary from './components/Summary';
import Features from './components/Features';
import PriceDisplay from './components/PriceDisplay';
import Specs from './components/Specs';
import SummaryOptions from './components/SummaryOptions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.features.selected,
      unselected: this.props.features.unselected
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    return (
      <div className="App">
      <NavBar />
        <main>
          <TechSpecs  unselected={this.state.unselected} selected={this.state.selected} updateFeature={this.updateFeature.bind(this)}/>
          <Summary selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;  