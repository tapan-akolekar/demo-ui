import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Home from "../components/Home";
import { fetchUserData } from "../features/application/applicationSlice";
import { useAppSelector } from "../app/hooks";
import { store } from "../app/store";

// Mock the application slice actions and selectors
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

  // it('fetches user data on button click and displays it in a table', async () => {
  //   const mockUserData = [
  //     { id: 1, appName: 'MyApp', clientOrOktaId: '...', oktaDomain: '...', ... },
  //     // ... more user data
  //   ];

  //   mockSelector.mockReturnValue({ data: mockUserData, loading: false, error: null });

  //   render(
  //     <Provider store={{ dispatch: mockDispatch }}>
  //       <Home />
  //     </Provider>
  //   );

  //   const button = screen.getByRole('button', { name: /Search Data/i });
  //   userEvent.click(button);

  //   expect(mockDispatch).toHaveBeenCalledWith(fetchUserData());

  //   // Wait for the data to be fetched (if necessary) and re-render the component
  //   await new Promise(resolve => setTimeout(resolve, 0));

  //   const tableHeaders = screen.getAllByRole('th');
  //   expect(tableHeaders.length).toBe(6); // Should have 6 headers

  //   const appNames = screen.getAllByText(/MyApp/i);
  //   expect(appNames.length).toBe(1); // Should display one app name
  // });

  // it("displays loading message while fetching data", () => {
  //   mockSelector.mockReturnValue({ data: [], loading: true, error: null });

  //   render(<Home />);

  //   expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  // });

  // it('displays error message if data fetching fails', () => {
  //   const mockError = new Error('Failed to fetch user data');
  //   mockSelector.mockReturnValue({ data: [], loading: false, error: mockError });

  //   render(<Home />);

  //   expect(screen.getByText(/Error:/i)).toBeInTheDocument();
  //   expect(screen.getByText(mockError.message)).toBeInTheDocument();
  // });
});
