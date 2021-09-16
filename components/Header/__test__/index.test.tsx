import { render, screen } from "@testing-library/react";
import Header from "..";

describe("Header", () => {
  it("should render the Header component", () => {
    render(<Header autoRefetch={() => console.log("clicked")} />);
  });

  it("should activate the checkbox when clicked", () => {
    let clicked = false;
    let autoRefetch = () => {
      clicked = true;
    };
    render(<Header autoRefetch={autoRefetch} />);
    const label = screen.getByText("Auto Refetching");
    expect(label).toBeInTheDocument();
    label.click();
    expect(clicked).toBe(true);
  });
});
