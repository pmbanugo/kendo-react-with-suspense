import { Suspense } from "react";
import logo from "./logo.svg";
import GridContainer from "./GridContainerWithSuspense";
import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";

import { fetchUsers } from "./data/user-service";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Hello React Suspense!</h1>
      </header>
      <Suspense fallback={<h2>Loading container</h2>}>
        <GridContainer resource={fetchUsers()} />
      </Suspense>
    </div>
  );
}

export default App;
