import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from "../components/Home";
import { store } from "../app/store";

jest.mock("../features/application/applicationSlice", () => ({
  fetchUserData: jest.fn(),
  useAppSelector: jest.fn(),
}));

const mockDispatch = jest.fn();
const mockSelector = jest.fn(() => ({ data: [], loading: false, error: null }));

describe("Home component", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    mockSelector.mockReturnValue({ data: [], loading: false, error: null });
  });

  it("renders the search button and initially shows no data", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });
});
