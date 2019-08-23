import React, { Component } from "react";
import PropTypes from 'prop-types';

class AddDinnerForm extends Component {
  nameRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  diffRef = React.createRef();

  static propTypes = {
    addMeal:PropTypes.func
  };

  createMeal = event => {
    //1 . Stop the from from submitting
    event.preventDefault();
    const meal = {
      name: this.nameRef.current.value,
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      diff: this.diffRef.current.value
    };
    this.props.addMeal(meal);
    // refresh the form after adding meal
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="dinner-edit" onSubmit={this.createMeal}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />

        <select name="status" ref={this.statusRef}>
          <option value="Add to Menu">Add to Menu</option>
          <option value="Added to Menu">Added to Menu!</option>
        </select>

        <select name="diff" ref={this.diffRef}>
          <option value="Easy Peasy">Easy</option>
          <option value="You Should Be Good">Normal</option>
          <option value="Good Luck">Hard</option>
        </select>

        <textarea
          name="desc"
          ref={this.descRef}
          type="text"
          placeholder="Desc"
        />

        <button type="submit">+ Add Meal</button>
      </form>
    );
  }
}

export default AddDinnerForm;
