import React from "react";
import { Home, Browse, Singin, Singup } from "./pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.SING_IN}>
        <Singin />
      </Route>
      <Route exact path={ROUTES.SING_UP}>
        <Singup />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
