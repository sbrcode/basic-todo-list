import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

describe("input tests", () => {
  const setup = () => {
    render(<App />)
    return screen.getByRole("textbox") as HTMLInputElement
  }
  test("It should display input field", () => {
    const input = setup()
    expect(input).toBeInTheDocument()
  })
  test("type into an input field", () => {
    const input = setup()
    userEvent.type(input, "Task One")
    expect(input).toHaveValue("Task One")
  })
  test("It should add value within input field", () => {
    const input = setup()
    fireEvent.change(input, { target: { value: "123" } })
    expect(input.value).toBe("123")
  })
})

describe("add button tests", () => {
  const setup = () => {
    render(<App />)
    return screen.getByText("add Task") as HTMLInputElement
  }
  test("It should display add button", () => {
    const button = setup()
    expect(button).toBeInTheDocument()
  })
  // test("It should incement todoList length", () => {
  //   const button = setup()
  //   fireEvent.click(button)
  //   expect(todoList).toHaveLength(1)
  // })
})

