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
