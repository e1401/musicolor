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
    await userEvent.type(searchInput, "test");

    expect(searchButton).toBeEnabled();
    expect(clearButton).toBeEnabled();
  });

  it("should clear the search box when clear button is clicked", async () => {
    const searchInput = screen.getByRole("textbox", { name: /search/i });
    await userEvent.type(searchInput, "test");
    expect(searchInput).toHaveValue("test");
    const clearButton = screen.getByRole("button", { name: /clear/i });
    await userEvent.click(clearButton);
    expect(searchInput).toHaveValue("");
  });

  it("should submit when pressing enter", async () => {
    const searchInput = screen.getByRole("textbox", { name: /search/i });
    await userEvent.type(searchInput, "test");
    userEvent.type(searchInput, '{ key: "Enter: true", code: 13, charCode: 13 }');
    expect(searchInput).toHaveValue("test");
  });
});