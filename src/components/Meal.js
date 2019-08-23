import React, { Component } from "react";
import PropTypes from "prop-types";

class Meal extends Component {
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      status: PropTypes.string,
      desc: PropTypes.string,
      diff: PropTypes.string
    }),
    addToMenu: PropTypes.func
  };
  render() {
    const { status, name, desc, diff } = this.props.details;
    const isAvailable = status === 'Add to Menu';
    return (
      <li className="menu-meal">
        <div className="statDiff">
          <span className="difficulty">Difficulty: {diff}</span>
          <h4 className="meal-name">{name}</h4>
        </div>

        
        
        <div className="description">
          <span className="notes">Notes: </span>
          <span className="desc">{desc}</span>
        </div>
        <button disabled={!isAvailable} onClick={() => this.props.addToMenu(this.props.index)} >
         {isAvailable ? 'Add to Menu' : 'Added to Menu'}
        </button>
      </li>
    );
  }
}

export default Meal;
