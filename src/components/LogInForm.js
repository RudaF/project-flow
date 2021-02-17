import React, { Component } from "react";
import axios from "axios";
import history from "../history";

class LogInForm extends Component {
  state = {
    username: "",
    password: "",
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
      const responseUsername = await axios.get(
        `https://ironrest.herokuapp.com/flowFinanceWDFTSP?username=${this.state.username}`
      );
      const responseEmail = await axios.get(
        `https://ironrest.herokuapp.com/flowFinanceWDFTSP?email=${this.state.username}`
      );

      console.log(history);
      if (this.state.password === responseUsername.data[0].password) {
        this.props.handleLogIn(true);
        history.push(`/${responseUsername.data[0].id}/`);
      } else if (this.state.password === responseEmail.data.password) {
        console.log("oi e-mail");
        this.props.handleLogIn(true);
        history.push(`/${responseEmail.data[0].id}/`);
      } else {
        window.alert("Wrong username or password!");
      }
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

export default LogInForm;
