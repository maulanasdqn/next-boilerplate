import { render, screen } from "@testing-library/react";
import { Tag } from "./tag";

describe("Tag", () => {
  it("renders with error variant", () => {
    render(<Tag variant="error">Error Case</Tag>);
    expect(screen.getByTestId("tag")).toHaveClass(
      "bg-error-100 text-error-500"
    );
  });

  it("renders with warning variant", () => {
    render(<Tag variant="warning">Warning Case</Tag>);
    expect(screen.getByTestId("tag")).toHaveClass(
      "bg-warning-100 text-warning-500"
    );
  });

  it("renders with info variant", () => {
    render(<Tag variant="info">Info Case</Tag>);
    expect(screen.getByTestId("tag")).toHaveClass("bg-info-100 text-info-500");
  });

  it("renders with success variant", () => {
    render(<Tag variant="success">Success Case</Tag>);
    expect(screen.getByTestId("tag")).toHaveClass(
      "bg-success-100 text-success-500"
    );
  });
});
