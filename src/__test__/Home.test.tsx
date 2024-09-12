import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from "../components/Home";
import { store } from "../app/store";
import { fetchUserData } from "../features/application/applicationSlice";

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

  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText("Search Term")).toBeInTheDocument();
  });

  it("calls fetchUserData when search button is clicked", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(fetchUserData());
  });
});
