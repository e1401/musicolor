import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  beforeEach(() => {
    render(<SearchBox />);
  });

  it("should render the search box", () => {
    const input = screen.getByRole("textbox", { name: /search/i });
    expect(input).toBeInTheDocument();
  });

  it("should have buttons enabled when user types", async () => {
    const searchButton = screen.getByRole("button", { name: /search/i });
    const clearButton = screen.getByRole("button", { name: /clear/i });
    expect(searchButton).toBeDisabled();
    expect(clearButton).toBeDisabled();
    const textbox = screen.getByRole("textbox", { name: /search/i });
    userEvent.type(textbox, "test");

    expect(searchButton).toBeEnabled();
    expect(clearButton).toBeEnabled();
  });

  it("should clear the search box when clear button is clicked", async () => {
    const textbox = screen.getByRole("textbox", { name: /search/i });
    userEvent.type(textbox, "test");
    expect(textbox).toHaveValue("test");
    userEvent.click(screen.getByRole("button", { name: /clear/i }));
    expect(screen.getByRole("textbox", { name: /search/i })).toHaveValue("");
  });
});
