import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial text and color", () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to midnightBlue'
  const buttonElement = screen.getByRole("button", {
    name: "Change to midnight Blue",
  });
  // expect the background color to be mediumVioletRed
  expect(buttonElement).toHaveStyle({ backgroundColor: "mediumVioletRed" });
});

test("button turns midnightBlue when clicked and has the correct text", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: "Change to midnight Blue",
  });
  // click button
  fireEvent.click(buttonElement);
  // expect the background color to be midnightBlue
  expect(buttonElement).toHaveStyle({ backgroundColor: "midnightBlue" });
  // expect the button text to be 'Change to mediumVioletRed'
  expect(buttonElement).toHaveTextContent("Change to medium Violet Red");
});

test("initial condicions for button and checkbox", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: "Change to midnight Blue",
  });
  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  // check that the button starts out enabled
  expect(buttonElement).toBeEnabled();
  //check that the checkbox out unchecked
  expect(checkboxElement).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  // click checkbox to check
  fireEvent.click(checkboxElement);
  // expect the button to be disabled
  expect(buttonElement).toBeDisabled();
  // click checkbox to uncheck
  fireEvent.click(checkboxElement);
  // expect the button to be enabled
  expect(buttonElement).toBeEnabled();
});

test("Disabled button has gray background and reverts to mediumVioletRed", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  // click on checkbox to check
  fireEvent.click(checkboxElement);
  // expect the button to be gray
  expect(buttonElement).toHaveStyle({ backgroundColor: "gray" });
  // click checkbox to uncheck
  fireEvent.click(checkboxElement);
  // expect the button to be mediumVioletRed
  expect(buttonElement).toHaveStyle({ backgroundColor: "mediumVioletRed" });
});

test("Disabled button has gray background and reverts to midnightBlue", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  // click button to change color to midnightBlue
  fireEvent.click(buttonElement);
  // click checkbox to check
  fireEvent.click(checkboxElement);
  // expect the button to be gray
  expect(buttonElement).toHaveStyle({ backgroundColor: "gray" });
  // click checkbox to uncheck
  fireEvent.click(checkboxElement);
  // expect the button to be midnightBlue
  expect(buttonElement).toHaveStyle({ backgroundColor: "midnightBlue" });
});
