import { render, fireEvent, screen } from "@testing-library/react"
import App from "./App"

test("It should display input field", () => {
  render(<App />)
  const input = screen.getByLabelText("input")
  expect(input).toBeInTheDocument()
  // fireEvent.change(input, { target: { value: "123" } })
  // expect(input.value).toBeCalledWith("123")
})

