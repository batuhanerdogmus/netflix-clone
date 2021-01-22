import React from "react";
import { Home, Browse, Singin, Singup } from "./pages";
import { BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListner } from "./hooks";

export default function App() {
  const user = useAuthListner();

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggeddInPath={ROUTES.BROWSE}
        path={ROUTES.SING_IN}
        exact
      >
        <Singin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggeddInPath={ROUTES.BROWSE}
        path={ROUTES.SING_UP}
        exact
      >
        <Singup />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        user={user}
        loggeddInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
