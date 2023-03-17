import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Login from "./componets/login/login";
import Signup from "./componets/signup/signup";
import Home from "./home";
import service from "./service";
import about from "./about";
import contact from "./contact";
import Navbar from "./navbar";
import Expensetracker from "./componets/expensetracker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Invoiceform from "./componets/Invoiceform";

function App() {
  return (
    <Router>
      <div className="App ">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about" component={about} />
          <Route exact path="/service" component={service} />
          <Route exact path="/contact" component={contact} />
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/invoice" component={Invoiceform}></Route>
          <Route path="/expensetracker" component={Expensetracker}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
