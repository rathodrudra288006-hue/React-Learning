import { render, screen } from "@testing-library/react";
import Contact from "../Contect";
import "@testing-library/jest-dom";

describe("Contect Us Test Cases", () => {
  test("Should load contect us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  test("Should load button inside contect component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });
});
