import { BrowserRouter, Route, Switch } from "react-router-dom";

import SigninForm from "./components/SignInForm";

function App() {
  return (
    <BrowserRouter>
      <SigninForm />
    </BrowserRouter>
  );
}

export default App;
