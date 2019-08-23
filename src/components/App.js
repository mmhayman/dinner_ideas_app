import React, { Component } from "react";
import MealInventory from "./MealInventory";
import Meal from "./Meal";
import MenuForWeek from './MenuForWeek';
import base from '../base';

class App extends Component {
  state = {
    meals: {},
    menu: {}
  };

  // syncing state between firebase and state
  componentDidMount() {
    //first reinstate our localstorage
    const localStorageRef = localStorage.getItem(`http://localhost:3000/`);
    if(localStorageRef) {
      this.setState({ menu: JSON.parse(localStorageRef )});
    }
    this.ref = base.syncState(`/meals`, {
      context: this,
      state: 'meals'
    });
  };

  componentDidUpdate () {
    localStorage.setItem(`http://localhost:3000/`, JSON.stringify(this.state.menu));
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
  };

  addMeal = meal => {
    // 1. Take a copy of the existing state
    const meals = { ...this.state.meals };
    // 2. Add our new meal to that meals variable
    meals[`meal${Date.now()}`] = meal;
    // 3. Set the new meals object to state
    this.setState({ meals });
  };

  updateMeal = (key, updatedMeal) => {
    // 1. Take a copy of the current state
    const meals = { ...this.state.meals };
    // 2. Update that state
    meals[key] = updatedMeal;
    // 3. Set that to state
    this.setState({ meals });
  };

  deleteMeal = key => {
    // 1. Take a copy of the current state
    const meals = { ...this.state.meals };
    // 2. Update the state
    meals[key] = null;
    // 3. Update state
    this.setState({ meals });
  };

  addToMenu = key => {
    // 1. Take a copy of state
    const menu = { ...this.state.menu };
    // 2. Either add to the menu or update the number in our menu
    menu[key] = menu[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ menu });
  };

  removeFromMenu = key => {
    // 1. Take a copy of state
    const menu = { ...this.state.menu };
    // 2. Remove that item from order
    delete menu[key];
    // 3. Call setState to update our state object
    this.setState({ menu });
  };

  render() {
    return (
      <div className="meal-tracker">
        <MealInventory
          addMeal={this.addMeal}
          updateMeal={this.updateMeal}
          deleteMeal={this.deleteMeal}
          meals={this.state.meals}
        />
        <div className="dinner-ideas-list">
          <h2>Dinner Options</h2>
          <ul className="meals">
            {Object.keys(this.state.meals).map(key => (
              <Meal
                key={key}
                index={key}
                details={this.state.meals[key]}
                addToMenu={this.addToMenu}
              />
            ))}
          </ul>
        </div>
        <MenuForWeek
          meals={this.state.meals}
          menu={this.state.menu}
          removeFromMenu={this.removeFromMenu}
        />
      </div>
    );
  }
}

export default App;
