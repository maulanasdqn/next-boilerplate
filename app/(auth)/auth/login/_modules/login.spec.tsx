import { render, screen } from "@testing-library/react";
import { AuthLoginModule } from "./";

describe("Auth Login Module", () => {
  it("should render login module with google text", () => {
    render(<AuthLoginModule />);
    expect(screen.getByText("Google")).toBeInTheDocument();
  });

  it("should render login module with github text", () => {
    render(<AuthLoginModule />);
    expect(screen.getByText("Github")).toBeInTheDocument();
  });

  it("should render login module with or text", () => {
    render(<AuthLoginModule />);
    expect(screen.getByText("or")).toBeInTheDocument();
  });
});
