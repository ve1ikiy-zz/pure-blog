import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "./Blog";
import Single from "./Single";
import Header from "./Header";


const Router = () => (
  <BrowserRouter>
    <Header title={"Pure Blog"}></Header>
    <Switch>
      <Route exact path="/" component={Blog} />
      <Route path="/views/:postId" component={Single} />
    </Switch>
  </BrowserRouter>
);

export default Router;