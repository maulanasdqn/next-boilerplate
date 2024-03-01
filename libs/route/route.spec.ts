import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  apiTrpcPrefix,
  authRoutes,
  publicRoutes,
} from "./";

describe("Route Test", () => {
  it("should return public routes", () => {
    expect(publicRoutes).toEqual(["/"]);
  });

  it("should return auth routes", () => {
    expect(authRoutes).toEqual(["/auth/login"]);
  });

  it("should return api auth prefix", () => {
    expect(apiAuthPrefix).toEqual("/api/auth");
  });

  it("should return api trpc prefix", () => {
    expect(apiTrpcPrefix).toEqual("/api/trpc");
  });

  it("should return default login redirect", () => {
    expect(DEFAULT_LOGIN_REDIRECT).toEqual("/dashboard");
  });
});
