import React, { Component } from 'react'
import Part from './Part'

class Customize extends Component {
  
  render(props) {
    return (
      <div className="App">
        <h2>Customize Your Laptop</h2>
        {Object.keys(this.props.features).map((feature, index) => 
        <Part featureHash={feature + '-' + index} 
              selected={this.props.selected} 
              currency={this.props.currency} key={index} 
              featureName={feature} 
              features={this.props.features[feature]} 
              select={this.props.select}/>)}
      </div>
    );
  }
}

export default Customize;