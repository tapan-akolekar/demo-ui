import { OktaAuth } from "@okta/okta-auth-js";

interface OktaConfig {
  clientId: string;
  redirectUri: string;
  issuer: string;
}

const oktaConfig: OktaConfig = {
  clientId: "vj3J8Jsfdh1I7pxOLlAtCcFcfRnZD07i",
  redirectUri: "https://127.0.0.1:3000/",
  issuer: "https://dev-qtv5dgs8uks1pc4x.us.auth0.com/oauth2/default",
};

const oktaAuth = new OktaAuth(oktaConfig);

export default oktaAuth;
