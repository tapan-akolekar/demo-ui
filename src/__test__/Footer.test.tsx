import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer component", () => {
  it('renders "footer" text', () => {
    render(<Footer />);
    expect(screen.getByText(/This is Footer/i)).toBeInTheDocument();
  });
});
