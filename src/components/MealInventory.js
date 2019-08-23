import React, { Component } from "react";
import AddDinnerForm from "./AddDinnerForm";
import EditDinnerForm from "./EditDinnerForm";
import PropTypes from 'prop-types';

class MealInventory extends Component {
  static propTypes = {
    meals: PropTypes.object,
    updateMeal: PropTypes.func,
    deleteMeal: PropTypes.func,
    addMeal: PropTypes.func 
  };

  render() {
    return (
      <div className="meal-inventory">
        <h2>Meal Inventory</h2>
        {Object.keys(this.props.meals).map(key => (
          <EditDinnerForm
            key={key}
            index={key}
            meal={this.props.meals[key]}
            updateMeal={this.props.updateMeal}
            deleteMeal={this.props.deleteMeal}
          />
        ))}
        <AddDinnerForm addMeal={this.props.addMeal} />
      </div>
    );
  }
}

export default MealInventory;
