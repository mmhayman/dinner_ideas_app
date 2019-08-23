import React, { Component } from "react";
import PropTypes from "prop-types";

class EditDinnerForm extends Component {
  static propTypes = {
    meal: PropTypes.shape({
      name: PropTypes.string,
      status: PropTypes.string,
      desc: PropTypes.string,
      diff: PropTypes.string
    }),
    updateMeal: PropTypes.func,
    index: PropTypes.string
  };
  
  handleChange = event => {
    const updatedMeal = {
      ...this.props.meal,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateMeal(this.props.index, updatedMeal);
  };

  render() {
    return (
    <div className="dinner-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.meal.name}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.meal.status}
        >
          <option value="Add to Menu">Add to Menu</option>
          <option value="Added to Menu">Added to Menu!</option>
        </select>

        <select
          type="text"
          name="diff"
          onChange={this.handleChange}
          value={this.props.meal.diff}
        >
          <option value="Easy Peasy">Easy</option>
          <option value="You Should Be Okay">Normal</option>
          <option value="Good Luck">Hard</option>
        </select>

        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.meal.desc}
        />

        <button onClick={() => this.props.deleteMeal(this.props.index)}>Remove Meal</button>
      </div>
    );
  }
}

export default EditDinnerForm;
