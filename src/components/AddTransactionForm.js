import React, { Component } from "react";
import axios from "axios";

class AddTransactionForm extends Component {
  state = {
    description: "",
    category: "",
    amount: "",
    date: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCancelButton = () => {
    this.props.history.push("/");
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userResponse = await axios.get(
        `https://ironrest.herokuapp.com/findOne/flowFinanceWDFTSP?id=${this.props.match.params.id}`
      );
      console.log(userResponse);
      const financeData = [...userResponse.data.financeData, this.state];
      console.log(financeData);
      console.log({ ...userResponse.data, financeData });
      const userUpdateResponse = await axios.put(
        `https://ironrest.herokuapp.com/flowFinanceWDFTSP/${userResponse.data._id}`,
        { ...userResponse.data[0], financeData }
      );
      console.log(userUpdateResponse);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container columns is-mobile mt-6">
        <form className="column is-half is-offset-one-quarter">
          <div className="field m-2">
            <label className="label">Description</label>
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
          <div className="field m-2">
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

          <div className="field has-addons m-2">
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
                type="number"
                placeholder="Amount of money"
                name="amount"
                value={this.state.amount}
              />
            </p>
          </div>

          <div className="control m-2">
            <div className="select">
              <select onChange={this.handleChange}>
                <option>Spent</option>
                <option>Recipe</option>
              </select>
            </div>
          </div>
          <div className="control m-2">
            <input
              onChange={this.handleChange}
              className="input is-primary"
              type="date"
              name="date"
              value={this.state.date}
            ></input>
          </div>

          <div className="field is-grouped">
            <p className="control m-2">
              <button
                onClick={this.handleCancelButton}
                className="button is-primary"
              >
                Cancel
              </button>
            </p>
            <p className="control m-2">
              <button onClick={this.handleSubmit} className="button is-light">
                Submit
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
