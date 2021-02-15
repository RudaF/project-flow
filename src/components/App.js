import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bulma/css/bulma.css';
import HomePage from "./HomePage";
import Navbar from "./Navbar";

function App() {
  return <div>
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route exact path="/" component={HomePage} />  
    </Switch>
    </BrowserRouter>
  </div>;
}

export default App;
