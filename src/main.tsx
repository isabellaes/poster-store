import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.scss";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import Router from "./Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
