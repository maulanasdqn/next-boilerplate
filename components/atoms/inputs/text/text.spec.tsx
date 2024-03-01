import { InputText } from "./text";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Input Text Test", () => {
  it("should render input text", () => {
    render(<InputText size={"sm"} status={"default"} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});

describe("Input Text Size Test", () => {
  it("should render input text with size sm", () => {
    render(<InputText size={"sm"} status={"default"} />);
    expect(screen.getByRole("textbox")).toHaveClass("px-3 py-2");
  });

  it("should render input text with size md", () => {
    render(<InputText size={"md"} status={"default"} />);
    expect(screen.getByRole("textbox")).toHaveClass("px-4 py-3");
  });

  it("should render input text with size lg", () => {
    render(<InputText size={"lg"} status={"default"} />);
    expect(screen.getByRole("textbox")).toHaveClass("px-5 py-4");
  });
});

describe("Input Text Status Test", () => {
  it("should render input text with status default", () => {
    render(<InputText size={"sm"} status={"default"} />);
    expect(screen.getByRole("textbox")).toHaveClass("bg-white");
  });

  it("should render input text with status error", () => {
    render(<InputText size={"sm"} status={"error"} />);
    expect(screen.getByRole("textbox")).toHaveClass("bg-error-50");
  });

  it("should render input text with status warning", () => {
    render(<InputText size={"sm"} status={"warning"} />);
    expect(screen.getByRole("textbox")).toHaveClass("bg-warning-50");
  });

  it("should render input text with status success", () => {
    render(<InputText size={"sm"} status={"success"} />);
    expect(screen.getByRole("textbox")).toHaveClass("bg-success-50");
  });
});

describe("Input Text Disabled Test", () => {
  it("should render input text with disabled", () => {
    render(<InputText size={"sm"} status={"default"} disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});

describe("Input Text Property Test", () => {
  it("should render input text with name", () => {
    render(<InputText size={"sm"} status={"default"} name={"test"} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("name", "test");
  });

  it("should render input text with value", () => {
    render(
      <InputText
        size={"sm"}
        onChange={() => {}}
        status={"default"}
        value={"test"}
      />
    );
    expect(screen.getByRole("textbox")).toHaveAttribute("value", "test");
  });

  it("should render input text with tabIndex", () => {
    render(<InputText size={"sm"} status={"default"} tabIndex={0} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("tabIndex", "0");
  });

  it("should trigger onChange", () => {
    const onChange = jest.fn();
    render(<InputText size={"sm"} status={"default"} onChange={onChange} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });
    expect(onChange).toHaveBeenCalled();
  });

  it("should render input text with placeholder", () => {
    render(<InputText size={"sm"} status={"default"} placeholder={"test"} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "test");
  });

  it("should render input text with readOnly", () => {
    render(<InputText size={"sm"} status={"default"} readOnly />);
    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
  });

  it("should render input text with required", () => {
    render(<InputText size={"sm"} status={"default"} required />);
    expect(screen.getByRole("textbox")).toHaveAttribute("required");
  });

  it("should render input text with maxLength", () => {
    render(<InputText size={"sm"} status={"default"} maxLength={10} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("maxlength", "10");
  });

  it("should render input text with minLength", () => {
    render(<InputText size={"sm"} status={"default"} minLength={10} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("minlength", "10");
  });

  it("should render input text with pattern", () => {
    render(<InputText size={"sm"} status={"default"} pattern={"test"} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("pattern", "test");
  });

  it("should render input text with spellCheck", () => {
    render(<InputText size={"sm"} status={"default"} spellCheck />);
    expect(screen.getByRole("textbox")).toHaveAttribute("spellcheck", "true");
  });

  it("should render input text with autoComplete", () => {
    render(<InputText size={"sm"} status={"default"} autoComplete={"test"} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("autocomplete", "test");
  });

  it("should render input text with autoCorrect", () => {
    render(<InputText size={"sm"} status={"default"} autoCorrect="test" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("autocorrect", "test");
  });
});
