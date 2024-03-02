import { render, screen } from "@testing-library/react";
import { Typography } from "./typography";

describe("Test Typography", () => {
  it("should render typography", () => {
    render(
      <Typography type="p" variant="regular" size="base" color="default" />
    );
    expect(screen.getByTestId("typography")).toBeInTheDocument();
  });
});

describe("Test Typography Type", () => {
  it("should render h1", () => {
    render(
      <Typography type="h1" variant="regular" size="base" color="default" />
    );
    expect(screen.getByTestId("typography").tagName).toBe("H1");
  });

  it("should render h2", () => {
    render(
      <Typography type="h2" variant="regular" size="base" color="default" />
    );
    expect(screen.getByTestId("typography").tagName).toBe("H2");
  });

  it("should render h3", () => {
    render(
      <Typography type="h3" variant="regular" size="base" color="default" />
    );
    expect(screen.getByTestId("typography").tagName).toBe("H3");
  });

  it("should render h4", () => {
    render(
      <Typography type="h4" variant="regular" size="base" color="default" />
    );
    expect(screen.getByTestId("typography").tagName).toBe("H4");
  });

  it("should render h5", () => {
    render(
      <Typography type="h5" variant="regular" size="base" color="default" />
    );
    expect(screen.getByTestId("typography").tagName).toBe("H5");
  });

  it("should render h6", () => {
    render(
      <Typography type="h6" variant="regular" size="base" color="default" />
    );
    expect(screen.getByTestId("typography").tagName).toBe("H6");
  });

  it("should render p", () => {
    render(
      <Typography type="p" variant="regular" size="base" color="default" />
    );
    expect(screen.getByTestId("typography").tagName).toBe("P");
  });

  it("should render span", () => {
    render(
      <Typography type="span" variant="regular" size="base" color="default" />
    );
    expect(screen.getByTestId("typography").tagName).toBe("SPAN");
  });
});

describe("Test Typography Variant", () => {
  it("should render regular", () => {
    render(
      <Typography type="p" variant="regular" size="base" color="default" />
    );
    expect(screen.getByTestId("typography")).toHaveClass("font-regular");
  });

  it("should render medium", () => {
    render(
      <Typography type="p" variant="medium" size="base" color="default" />
    );
    expect(screen.getByTestId("typography")).toHaveClass("font-medium");
  });

  it("should render semi-bold", () => {
    render(
      <Typography type="p" variant="semi-bold" size="base" color="default" />
    );
    expect(screen.getByTestId("typography")).toHaveClass("font-semibold");
  });

  it("should render bold", () => {
    render(<Typography type="p" variant="bold" size="base" color="default" />);
    expect(screen.getByTestId("typography")).toHaveClass("font-bold");
  });
});

describe("Test Typography Color", () => {
  it("should render default", () => {
    render(
      <Typography type="p" variant="regular" size="base" color="default" />
    );
    expect(screen.getByTestId("typography")).toHaveClass("text-black");
  });

  it("should render ghost", () => {
    render(<Typography type="p" variant="regular" size="base" color="ghost" />);
    expect(screen.getByTestId("typography")).toHaveClass("text-grey-100");
  });

  it("should render error", () => {
    render(<Typography type="p" variant="regular" size="base" color="error" />);
    expect(screen.getByTestId("typography")).toHaveClass("text-error");
  });

  it("should render warning", () => {
    render(
      <Typography type="p" variant="regular" size="base" color="warning" />
    );
    expect(screen.getByTestId("typography")).toHaveClass("text-warning");
  });

  it("should render success", () => {
    render(
      <Typography type="p" variant="regular" size="base" color="success" />
    );
    expect(screen.getByTestId("typography")).toHaveClass("text-success");
  });

  it("should render primary", () => {
    render(
      <Typography type="p" variant="regular" size="base" color="primary" />
    );
    expect(screen.getByTestId("typography")).toHaveClass("text-primary");
  });

  it("should render secondary", () => {
    render(
      <Typography type="p" variant="regular" size="base" color="secondary" />
    );
    expect(screen.getByTestId("typography")).toHaveClass("text-primary-2");
  });

  it("should render info", () => {
    render(<Typography type="p" variant="regular" size="base" color="info" />);
    expect(screen.getByTestId("typography")).toHaveClass("text-info");
  });
});
