import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound";
import MainPage from "./Pages/MainPage.js";
import GalleryPage from "./Pages/GalleryPage";
import BlogPage from "./Pages/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/gallery' component={GalleryPage} />
        <Route exact path='/blog' component={BlogPage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
