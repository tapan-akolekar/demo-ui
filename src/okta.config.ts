import { OktaAuth } from "@okta/okta-auth-js";

interface OktaConfig {
  clientId: string;
  redirectUri: string;
  issuer: string;
  initiateLoginUri: string;
}

const oktaConfig: OktaConfig = {
  clientId: "vj3J8Jsfdh1I7pxOLlAtCcFcfRnZD07i",
  redirectUri: "http://localhost:3000/login",
  issuer: "https://dev-qtv5dgs8uks1pc4x.us.auth0.com/oauth2/default",

  initiateLoginUri:
    process.env.NODE_ENV === "development"
      ? ""
      : "https://dev-qtv5dgs8uks1pc4x.us.auth0.com/login",
};

const oktaAuth = new OktaAuth(oktaConfig);

export default oktaAuth;
