import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  beforeEach(() => {
    render(<SearchBox />);
  });

  it("should render the search box", () => {
    const searchInput = screen.getByRole("textbox", { name: /search/i });
    expect(searchInput).toBeInTheDocument();
  });

  it("should have buttons enabled when user types", async () => {
    const searchButton = screen.getByRole("button", { name: /search/i });
    const clearButton = screen.getByRole("button", { name: /clear/i });
    expect(searchButton).toBeDisabled();
    expect(clearButton).toBeDisabled();
    const searchInput = screen.getByRole("textbox", { name: /search/i });
    userEvent.type(searchInput, "test");

    expect(searchButton).toBeEnabled();
    expect(clearButton).toBeEnabled();
  });

  it("should clear the search box when clear button is clicked", async () => {
    const searchInput = screen.getByRole("textbox", { name: /search/i });
    userEvent.type(searchInput, "test");
    expect(searchInput).toHaveValue("test");
    userEvent.click(screen.getByRole("button", { name: /clear/i }));
    expect(screen.getByRole("textbox", { name: /search/i })).toHaveValue("");
  });
});
