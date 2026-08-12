import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utills/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render  Header Component with a login Button", () => {
  render(
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const loginButton = screen.getByRole("button");
  //const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

test("Should render Header Component with a Cart Item 0", () => {
  render(
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const cartItems = screen.getByText("Cart(0 items)");
  expect(cartItems).toBeInTheDocument();
});
test("Should change login button into logout on click", () => {
  render(
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
