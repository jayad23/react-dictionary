import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";

const MockAppComponent = () => {
  return (
    <div>
      <h1>Global</h1>
      <button>Show</button>
    </div>
  )
}

describe("It tests that all requirements for testing env are synched", () => {
  afterEach(cleanup);

  it("should log an h1 message in terminal", () => {
    render(<MockAppComponent />);
    screen.getAllByText("Global");
  });

  it('should render the button Element', () => {
    const Element = render(<MockAppComponent />);
    Element.getByRole("button")
  })
})

