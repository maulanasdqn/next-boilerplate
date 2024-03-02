import { screen, render, fireEvent } from "@testing-library/react";
import { InputRadio } from "./radio";

describe("Input Radio Test", () => {
  it("should render radio", () => {
    render(<InputRadio size={"sm"} status={"default"} />);
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });
});

describe("Input Radio Size Test", () => {
  it("should render radio with size sm", () => {
    render(<InputRadio size={"sm"} status={"default"} />);
    expect(screen.getByRole("radio")).toHaveClass("w-4 h-4");
  });

  it("should render radio with size md", () => {
    render(<InputRadio size={"md"} status={"default"} />);
    expect(screen.getByRole("radio")).toHaveClass("w-5 h-5");
  });

  it("should render radio with size lg", () => {
    render(<InputRadio size={"lg"} status={"default"} />);
    expect(screen.getByRole("radio")).toHaveClass("w-6 h-6");
  });
});

describe("Input Radio Status Test", () => {
  it("should render radio with status default", () => {
    render(<InputRadio size={"sm"} status={"default"} />);
    expect(screen.getByRole("radio")).toHaveClass("bg-primary-2");
  });

  it("should render radio with status error", () => {
    render(<InputRadio size={"sm"} status={"error"} />);
    expect(screen.getByRole("radio")).toHaveClass("bg-error");
  });

  it("should render radio with status warning", () => {
    render(<InputRadio size={"sm"} status={"warning"} />);
    expect(screen.getByRole("radio")).toHaveClass("bg-warning");
  });

  it("should render radio with status success", () => {
    render(<InputRadio size={"sm"} status={"success"} />);
    expect(screen.getByRole("radio")).toHaveClass("bg-success");
  });

  it("should render radio with disabled", () => {
    render(<InputRadio size={"sm"} status={"default"} disabled />);
    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("should render radio with checked", () => {
    render(
      <InputRadio size={"sm"} onChange={() => {}} status={"default"} checked />
    );
    expect(screen.getByRole("radio")).toBeChecked();
  });

  it("should render radio with not checked", () => {
    render(
      <InputRadio
        size={"sm"}
        onChange={() => {}}
        status={"default"}
        checked={false}
      />
    );
    expect(screen.getByRole("radio")).not.toBeChecked();
  });
});

describe("Input Radio Property Test", () => {
  it("should render radio with name", () => {
    render(<InputRadio size={"sm"} status={"default"} name={"test"} />);
    expect(screen.getByRole("radio")).toHaveAttribute("name", "test");
  });

  it("should render radio with value", () => {
    render(
      <InputRadio
        size={"sm"}
        onChange={() => {}}
        status={"default"}
        value={"test"}
      />
    );
    expect(screen.getByRole("radio")).toHaveAttribute("value", "test");
  });

  it("should trigger onChange", () => {
    const onChange = jest.fn();
    render(<InputRadio size={"sm"} status={"default"} onChange={onChange} />);
    fireEvent.click(screen.getByRole("radio"));
    expect(onChange).toHaveBeenCalled();
  });

  it("should render radio with tabIndex", () => {
    render(<InputRadio size={"sm"} status={"default"} tabIndex={0} />);
    expect(screen.getByRole("radio")).toHaveAttribute("tabIndex", "0");
  });
});
