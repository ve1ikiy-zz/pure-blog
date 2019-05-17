import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "./Blog";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Blog} />
    </Switch>
  </BrowserRouter>
);

export default Router;