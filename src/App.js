import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import Navbar from "./components/Navbar";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import HomePage from "./components/HomePage";
import AddTransactionForm from "./components/AddTransactionForm";

class App extends Component {
  state = {
    isLogedIn: false,
  };

  handleLogIn = (isLogedIn) => {
    this.setState({ isLogedIn: isLogedIn });
  };

  render() {
    return (
      <BrowserRouter>
        {this.state.isLogedIn ? (
          <Route path="/:id">
            <Navbar isLogedIn={this.state.isLogedIn} />
          </Route>
        ) : (
          <Route path="/" component={Navbar} />
        )}
        <Switch>
          {this.state.isLogedIn ? (
            <Route exact path="/:id" component={HomePage} />
          ) : (
            <Route exact path="/" component={HomePage} />
          )}
          <Route exact path="/login">
            <LogInForm
              handleLogIn={this.handleLogIn}
              history={this.props.history}
            />
          </Route>
          <Route exact path="/signup">
            <SignUpForm
              handleLogIn={this.handleLogIn}
              history={this.props.history}
            />
          </Route>
          <Route
            exact
            path="/:id/addtransaction"
            component={AddTransactionForm}
          />
          <Route
            exact
            path="/:id/transactionlist"
            component={AddTransactionForm}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
