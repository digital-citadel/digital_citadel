import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound";
import SinglePage from "./Pages/SinglePage.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SinglePage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
