import { render, screen, fireEvent } from "@testing-library/react";
import { InputCheckbox } from "./checkbox";

describe("Input Checkbox Test", () => {
  it("should render checkbox", () => {
    render(<InputCheckbox size={"sm"} status={"default"} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
});

describe("Input Checkbox Size Test", () => {
  it("should render checkbox with size sm", () => {
    render(<InputCheckbox size={"sm"} status={"default"} />);
    expect(screen.getByRole("checkbox")).toHaveClass("w-4 h-4");
  });

  it("should render checkbox with size md", () => {
    render(<InputCheckbox size={"md"} status={"default"} />);
    expect(screen.getByRole("checkbox")).toHaveClass("w-5 h-5");
  });

  it("should render checkbox with size lg", () => {
    render(<InputCheckbox size={"lg"} status={"default"} />);
    expect(screen.getByRole("checkbox")).toHaveClass("w-6 h-6");
  });
});

describe("Input Checkbox Status Test", () => {
  it("should render checkbox with status default", () => {
    render(<InputCheckbox size={"sm"} status={"default"} />);
    expect(screen.getByRole("checkbox")).toHaveClass("bg-primary-2");
  });

  it("should render checkbox with status error", () => {
    render(<InputCheckbox size={"sm"} status={"error"} />);
    expect(screen.getByRole("checkbox")).toHaveClass("bg-error");
  });

  it("should render checkbox with status warning", () => {
    render(<InputCheckbox size={"sm"} status={"warning"} />);
    expect(screen.getByRole("checkbox")).toHaveClass("bg-warning");
  });

  it("should render checkbox with status success", () => {
    render(<InputCheckbox size={"sm"} status={"success"} />);
    expect(screen.getByRole("checkbox")).toHaveClass("bg-success");
  });
});

describe("Input Checkbox Disabled Test", () => {
  it("should render checkbox with disabled", () => {
    render(<InputCheckbox size={"sm"} status={"default"} disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });
});

describe("Input Checkbox Checked Test", () => {
  it("should render checkbox with checked", () => {
    render(
      <InputCheckbox
        size={"sm"}
        onChange={() => {}}
        status={"default"}
        checked
      />
    );
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("should render checkbox with not checked", () => {
    render(
      <InputCheckbox
        size={"sm"}
        onChange={() => {}}
        status={"default"}
        checked={false}
      />
    );
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });
});

describe("Input Checkbox Property Test", () => {
  it("should render checkbox with name", () => {
    render(<InputCheckbox size={"sm"} status={"default"} name={"test"} />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("name", "test");
  });

  it("should render checkbox with value", () => {
    render(<InputCheckbox size={"sm"} status={"default"} value={"test"} />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("value", "test");
  });

  it("should trigger onChange", () => {
    const onChange = jest.fn();
    render(
      <InputCheckbox size={"sm"} status={"default"} onChange={onChange} />
    );
    fireEvent.click(screen.getByRole("checkbox"));
    expect(onChange).toHaveBeenCalled();
  });

  it("should render checkbox with tabIndex", () => {
    render(<InputCheckbox size={"sm"} status={"default"} tabIndex={0} />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("tabIndex", "0");
  });
});
