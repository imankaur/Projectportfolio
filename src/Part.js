import React, { Component } from 'react'
import slugify from 'slugify';



class Part extends Component {
  
  render(props) {
    
    return (
    // <div>
    //   <h2>{this.props.featureName}</h2>
    //   {this.props.features.map((name, index) => <h2>{name.name} + {name.cost}</h2>) }
    // </div>

    // <div key={itemHash} className="feature__item"> <---KEEP THIS, FIX
    // htmlFor={itemHash} <--- add back to label tag below
    //add key to below fieldset
    <fieldset key={this.props.featureHash} className="feature">
      <legend className="feature__name">
        <h3>{this.props.featureName}</h3>
      </legend>
     {this.props.features.map((name, index) => 
      
      <div key={slugify(JSON.stringify(name))} className="feature__item">
      <input
        type="radio"
        id={slugify(JSON.stringify(name))}
        className="feature__option"
        name={slugify(this.props.featureName)}
        checked={name.name === this.props.selected[this.props.featureName].name}
        onChange={() => this.props.select(this.props.featureName, name)}
      />
      <label  htmlFor={slugify(JSON.stringify(name))} className="feature__label">
        {name.name} ({this.props.currency.format(name.cost)})
      </label>
      </div>
     )
    }
    </fieldset>
    )
  }
}
export default Part;