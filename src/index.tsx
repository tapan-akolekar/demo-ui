import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Auth0Provider } from "@auth0/auth0-react";

const onRedirectCallback = (appState: any) => {
  window.history.pushState({}, document.title, appState?.returnTo || "/home");
  window.location.href = appState?.returnTo || "/home";
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Auth0Provider
    domain={process.env.APP_CLIENT_DOMAIN ? process.env.APP_CLIENT_DOMAIN : ""}
    clientId={process.env.APP_CLIENT_ID ? process.env.APP_CLIENT_ID : ""}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: process.env.APP_AUDIENCE ? process.env.APP_AUDIENCE : "",
      scope: "openid profile email",
    }}
    onRedirectCallback={onRedirectCallback}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
reportWebVitals();
