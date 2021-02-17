import { Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import NavbarB4 from "./components/NavbarB4";
import NavbarAl from "./components/NavbarAl";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import HomePage from "./components/HomePage";
import AddTransactionForm from "./components/AddTransactionForm";
import history from "./history";

class App extends Component {
  state = {
    isLogedIn: false,
  };

  handleLogIn = (isLogedIn) => {
    this.setState({ isLogedIn: isLogedIn });
  };

  render() {
    return (
      <Router history={history}>
        {this.state.isLogedIn ? (
          <Route path="/:id" component={NavbarAl} />
        ) : (
          <Route path="/" component={NavbarB4} />
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
      </Router>
    );
  }
}

export default App;
