import "./App.css";
import Search from "./Components/Search";
import Display from "./Components/Display";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Search />
      <Switch>
        <Route path="/:search/:id">
          <Display />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
