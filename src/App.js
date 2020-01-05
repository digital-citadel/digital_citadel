import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound";
import MainPage from "./Pages/MainPage.js";
import GalleryPage from "./Pages/GalleryPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/gallery' component={GalleryPage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
