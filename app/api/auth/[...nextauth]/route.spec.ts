import { createMocks } from "node-mocks-http";

describe("/api/auth/providers", () => {
  it("should return public routes", async () => {
    const { req, res } = createMocks({
      method: "GET",
      url: "/api/auth/providers",
    });

    expect(req.url).toEqual("/api/auth/providers");
    expect(res.statusCode).toEqual(200);
  });
});
