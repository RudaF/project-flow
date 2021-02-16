import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LogInForm} />
      <Route exact path="/signup" component={SignUpForm} />
    </BrowserRouter>
  );
}

export default App;
