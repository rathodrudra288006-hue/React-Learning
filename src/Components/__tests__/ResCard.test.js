import { getByText, render, screen } from "@testing-library/react";
import RestaruntCard from "../RestaruntCard";
import MOCK_DATA from "../Mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render RestaurantCard component with props Data", () => {
  render(<RestaruntCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});
