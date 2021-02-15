import React, { Component } from "react";

class SignInForm extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
    termsAgreement: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: !this.state[event.target.name] });
  };

  handleCancelButton = () => {};

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://ih-crud-api.herokuapp.com/characters",
        this.state
      );

      console.log(response);
      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container columns is-mobile">
        <form className="column is-half is-offset-one-quarter">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                name="name"
                className="input"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="username"
                className="input is-success"
                type="text"
                placeholder="Text input"
                value="bulma"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            <p className="help is-success">This username is available</p>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="email"
                className="input is-danger"
                type="email"
                placeholder="Email input"
                value="hello@"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This password is too short</p>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="password"
                className="input is-danger"
                type="password"
                placeholder="password input"
                value="hello@"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" name="termsAgreement" />I agree to the{" "}
                <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
            <div className="control">
              <button className="button is-link" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
