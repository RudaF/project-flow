import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LogInForm} />
      <Route path="/signin" component={SignUpForm} />
    </BrowserRouter>
  );
}

export default App;
