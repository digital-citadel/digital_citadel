import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound";
import MainPage from "./Pages/MainPage.js";
import GalleryPage from "./Pages/GalleryPage";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <ScrollToTop>
          <Switch>
            <Route path='/gallery' component={GalleryPage} />
          </Switch>
        </ScrollToTop>
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
