import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from 'prop-types';

class MenuForWeek extends Component {
  static propTypes = {
    meals: PropTypes.object,
    menu: PropTypes.object,
    removeFromMenu: PropTypes.func
  };
  
  renderMenu = key => {
    const meal = this.props.meals[key];
    // make sure the meal is loaded before we continue
    if (!meal) return null;

    return (
      <CSSTransition
        classNames="menu"
        key={key}
        timeout={{ enter: 250, exit: 250 }}
      >
        <li key={key}>
          <span>
            <span>{meal.name}</span>
            <button onClick={() => this.props.removeFromMenu(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const menuIds = Object.keys(this.props.menu);
    return (
      <div className="menu-wrap">
        <h2>Menu For The Week</h2>
        <TransitionGroup component="ul" className="menu">
          {menuIds.map(this.renderMenu)}
        </TransitionGroup>
        <ul>
          <li />
        </ul>
      </div>
    );
  }
}

export default MenuForWeek;
