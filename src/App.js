import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
