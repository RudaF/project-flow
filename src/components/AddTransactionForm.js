import React, { Component } from "react";
import axios from "axios";

class AddTransactionForm extends Component {
  state = {
    description: "",
    category: "",
    value: "",
    date: "",
  };

  handleChange(event) {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  }

  handleCancelButton() {
    this.props.history.push("/");
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userResponse = await axios.get(
        `https://ironrest.herokuapp.com/flowFinanceWDFTSP/${this.props.match.params.id}`
      );
      //   const response = await axios.post(
      //     `https://ironrest.herokuapp.com/flowFinanceWDFTSP/${this.props.match.params.id}`,
      //     this.state
      //   );

      console.log(userResponse);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <form>
        <div clasName="field">
          <label clasName="label">Description</label>
          <div className="control">
            <input
              onChange={this.handleChange}
              className="input"
              type="text"
              placeholder="e.g rent"
              name="description"
              value={this.state.description}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">category</label>
          <div className="control">
            <input
              onChange={this.handleChange}
              className="input"
              type="text"
              placeholder="e.g home or food, etc ..."
              name="category"
              value={this.state.category}
            />
          </div>
        </div>

        <div className="field has-addons">
          <p className="control">
            <span className="select">
              <select>
                <option>$</option>
                <option>R$</option>
              </select>
            </span>
          </p>
          <p className="control">
            <input
              onChange={this.handleChange}
              className="input"
              type="text"
              placeholder="Amount of money"
              name="value"
              value={this.state.value}
            />
          </p>
        </div>

        <div className="control">
          <div className="select">
            <select onChange={this.handleChange}>
              <option>Spent</option>
              <option>Recipe</option>
            </select>
          </div>
        </div>
        <div>
          <input
            onChange={this.handleChange}
            className="input is-primary"
            type="date"
            name="date"
            value={this.state.date}
          ></input>
        </div>

        <div className="field is-grouped">
          <p className="control">
            <a onClick={this.handleCancelButton} className="button is-primary">
              Cancel
            </a>
          </p>
          <p className="control">
            <a onClick={this.handleSubmit} className="button is-light">
              Submit
            </a>
          </p>
        </div>
      </form>
    );
  }
}

export default AddTransactionForm;
