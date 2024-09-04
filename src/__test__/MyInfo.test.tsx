import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import MyInfo from "../components/MyInfo";

jest.mock("../features/myInfo/myInfoSlice", () => ({
  fetchUserInfo: jest.fn(),
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
        <MyInfo />
      </Provider>
    );
  });
});
