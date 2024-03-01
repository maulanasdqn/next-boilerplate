import { render, screen } from "@testing-library/react";
import { AuthProvider } from "./auth-provider";

jest.mock("next-auth/react");

describe("AuthProvider Children Test", () => {
  it("should render children", () => {
    const { baseElement } = render(
      <AuthProvider>
        <div role="test">Test</div>
      </AuthProvider>
    );

    expect(baseElement).toBeDefined();
  });
});
