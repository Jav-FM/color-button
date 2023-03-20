import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial text and color", () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to blue'
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
  // expect the background color to be red
  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked and has the correct text", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
  // click button
  fireEvent.click(buttonElement);
  // expect the background color to be blue
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
  // expect the button text to be 'Change to red'
  expect(buttonElement).toHaveTextContent("Change to red");
});

test("initial condicions for button and checkbox", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to blue" });
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

test("Disabled button has gray background and reverts to red", () => {
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
  // expect the button to be red
  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });
});

test("Disabled button has gray background and reverts to blue", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable button",
  });
  // click button to change color to blue
  fireEvent.click(buttonElement);
  // click checkbox to check
  fireEvent.click(checkboxElement);
  // expect the button to be gray
  expect(buttonElement).toHaveStyle({ backgroundColor: "gray" });
  // click checkbox to uncheck
  fireEvent.click(checkboxElement);
  // expect the button to be blue
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});
