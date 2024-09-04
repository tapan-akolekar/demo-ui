import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Auth0Provider
    domain="dev-qtv5dgs8uks1pc4x.us.auth0.com"
    clientId="vj3J8Jsfdh1I7pxOLlAtCcFcfRnZD07i"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-qtv5dgs8uks1pc4x.us.auth0.com/api/v2/",
    }}
    onRedirectCallback={(appState) => {
      window.location.replace(appState?.returnTo || "/home");
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
reportWebVitals();
