import React, { Component } from "react";
import axios from "axios";
import history from "../history";

class AddTransactionForm extends Component {
  state = {
    description: "",
    category: "expense",
    amount: 0,
    date: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCancelButton = () => {
    history.push(`/${this.props.match.params.id}`);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userResponse = await axios.get(
        `https://ironrest.herokuapp.com/findOne/flowFinanceWDFTSP?id=${this.props.match.params.id}`
      );
      console.log(this.state);
      const amount =
        this.state.category === "expense"
          ? Number(this.state.amount) * -1
          : this.state.amount;
      console.log("amount:", amount);
      this.setState({ amount });
      console.log("state amount:", this.state.amount);
      const financeData = [...userResponse.data.financeData, this.state];
      // console.log(financeData);
      // console.log({ ...userResponse.data, financeData });
      const userUpdateResponse = await axios.put(
        `https://ironrest.herokuapp.com/flowFinanceWDFTSP/${userResponse.data._id}`,
        { ...userResponse.data[0], financeData }
      );
      this.setState({ description: "", category: "", amount: "", date: "" });
      window.alert("Transaction added to list!");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    console.log("in render:", this.state.category);
    return (
      <div className="container columns is-mobile mt-6">
        <form
          className="column is-half is-offset-one-quarter"
          onSubmit={this.handleSubmit.bind(this)}
        >
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

          <div className="field has-addons m-2 d-flex flex-column">
            <label className="label">Amount</label>
            <div>
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
          </div>

          <div className="control m-2">
            <label className="label">Is it an Income or Expense?</label>
            <div className="select">
              <select
                name="category"
                onChange={this.handleChange}
                value={this.state.category}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
          </div>

          <div className="control m-2">
            <label className="label">When is it from?</label>
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
              <button className="button is-light">Submit</button>
            </p>
            <p className="control m-2">
              <button
                onClick={this.handleCancelButton}
                className="button is-primary"
              >
                Cancel
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
