import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { createStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import applicationSlice from "../features/application/applicationSlice";
import Home from "../components/Home";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const mockStore = createStore(combineReducers({ user: applicationSlice }));

const mockData = [
  {
    id: 1,
    appName: "App 1",
    clientOrOktaId: "client-1",
    oktaDomain: "okta-1",
    signOnMode: "mode-1",
    status: "active",
    appUrl: "https://app-1.com",
  },
  {
    id: 2,
    appName: "App 2",
    clientOrOktaId: "client-2",
    oktaDomain: "okta-2",
    signOnMode: "mode-2",
    status: "inactive",
    appUrl: "https://app-2.com",
  },
];

jest.mock("../app/hooks", () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: () => mockData,
}));

describe("Home component", () => {
  it("renders correctly", () => {
    render(
      <Provider store={mockStore}>
        <Home />
      </Provider>
    );
    expect(screen.getByText("Search Data")).toBeInTheDocument();
  });
});
