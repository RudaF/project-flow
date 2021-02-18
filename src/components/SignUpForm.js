import React, { Component } from "react";
import axios from "axios";
import history from "../history";

class SignUpForm extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    username: "",
    password: "",
    termsAgreement: false,
    financeData: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: !this.state[event.target.name] });
  };

  handleCancelButton = () => {
    history.push(`/${this.props.match.params.id}`);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const userId = "_" + Math.random().toString(36).substr(2, 9);
    this.setState({ id: userId });
    try {
      const response = await axios.post(
        "https://ironrest.herokuapp.com/flowFinanceWDFTSP",
        this.state
      );
      this.props.handleLogIn(true);
      history.push(`/${this.state.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container columns is-mobile mt-6">
        <form
          className="column is-half is-offset-one-quarter"
          onSubmit={this.handleSubmit}
        >
          {/* Name */}
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                name="name"
                className="input"
                type="text"
                placeholder="Your name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
          </div>
          {/* Name */}
          {/* Username */}
          <div className="field">
            <label className="label">Username</label>

            <div className="control has-icons-left has-icons-right">
              <input
                name="username"
                className="input"
                type="text"
                placeholder="Choose your Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              {/* <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span> */}
            </div>
            {/* <p className="help is-success">
              {this.state.validUsername
                ? "This username is available"
                : "This username is not available"}
            </p> */}
          </div>
          {/* Username */}
          {/* E-mail */}
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="email"
                className="input"
                type="email"
                placeholder="Your e-mail"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              {/* <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span> */}
            </div>
            {/* <p className="help is-danger">
              {this.state.validEmail ? "" : "This email is invalid"}
            </p> */}
          </div>
          {/* E-mail */}
          {/* Password */}
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="password"
                className="input"
                type="password"
                placeholder="password input"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
              {/* <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span> */}
            </div>
            {/* <p className="help is-danger">
              {this.state.password.length < 5
                ? "This password is too short"
                : "Valid password"}
            </p> */}
          </div>
          {/* Password */}
          {/* Terms and Conditions */}
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  onChange={this.handleChangeCheckbox}
                  type="checkbox"
                  name="termsAgreement"
                />{" "}
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>
          {/* Terms and Conditions */}
          {/* Buttons */}
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">
                Submit
              </button>
            </div>
            <div className="control">
              <button
                onClick={this.handleCancelButton}
                className="button is-link is-light"
              >
                Cancel
              </button>
            </div>
          </div>
          {/* Buttons */}
        </form>
      </div>
    );
  }
}

export default SignUpForm;
