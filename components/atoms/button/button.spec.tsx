import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button Variant Test", () => {
  it("should render button with variant primary", () => {
    render(
      <Button variant={"primary"} size={"sm"}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toHaveClass("bg-primary");
  });

  it("should render button with variant secondary", () => {
    render(
      <Button variant={"secondary"} size={"sm"}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toHaveClass("bg-primary-2");
  });

  it("should render button with variant error", () => {
    render(
      <Button variant={"error"} size={"sm"}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toHaveClass("bg-error");
  });

  it("should render button with variant warning", () => {
    render(
      <Button variant={"warning"} size={"sm"}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toHaveClass("bg-warning");
  });

  it("should render button with variant success", () => {
    render(
      <Button variant={"success"} size={"sm"}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toHaveClass("bg-success");
  });

  it("should render button with variant info", () => {
    render(
      <Button variant={"info"} size={"sm"}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toHaveClass("bg-info");
  });
});

describe("Button Size Test", () => {
  it("should render button with size sm", () => {
    render(
      <Button variant={"primary"} size={"sm"}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toHaveClass("text-sm");
  });

  it("should render button with size md", () => {
    render(
      <Button variant={"primary"} size={"md"}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toHaveClass("text-md");
  });

  it("should render button with size lg", () => {
    render(
      <Button variant={"primary"} size={"lg"}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toHaveClass("text-lg");
  });
});

describe("Button State Test", () => {
  it("should render button with state loading", () => {
    render(
      <Button variant={"primary"} size={"sm"} state={"loading"}>
        Loading...
      </Button>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render button with state default", () => {
    render(
      <Button variant={"primary"} size={"sm"} state={"default"}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
  });
});

describe("Button Link Test", () => {
  it("should render button with href", () => {
    render(
      <Button variant={"primary"} size={"sm"} href={"https://google.com"}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toHaveAttribute(
      "href",
      "https://google.com"
    );
  });
});

describe("Button Disabled Test", () => {
  it("should render button with disabled", () => {
    render(
      <Button variant={"primary"} size={"sm"} disabled>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toBeDisabled();
  });
});

describe("Button VariantType Test", () => {
  it("should render button with variantType outline", () => {
    render(
      <Button variant={"primary"} size={"sm"} variantType={"outline"}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toHaveClass("border");
  });

  it("should render button with variantType solid", () => {
    render(
      <Button variant={"primary"} size={"sm"} variantType={"solid"}>
        Button
      </Button>
    );
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toHaveClass("bg-primary");
  });
});
