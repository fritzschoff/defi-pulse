import handler from "..";
import { createMocks } from "node-mocks-http";

describe("Gas Station API", () => {
  beforeEach(() => {
    process.env["GAS_STATION_API_URI"] = "http://test.com";
    process.env["GAS_STATION_API_KEY"] = "key";
  });
  it("should throw if API key and API URI is not defined", async () => {
    process.env["GAS_STATION_API_URI"] = "";
    process.env["GAS_STATION_API_KEY"] = "";
    const { req, res } = createMocks({
      method: "POST",
    });
    const response = await handler(req, res);
    expect(response?.statusCode).toBe(404);
  });

  it("should throw if method is not GET", async () => {
    const { req, res } = createMocks({
      method: "POST",
    });
    const response = await handler(req, res);
    expect(response?.statusCode).toBe(405);
  });

  it("should throw if method is not GET", async () => {
    const { req, res } = createMocks({
      method: "POST",
    });
    const response = await handler(req, res);
    expect(response?.statusCode).toBe(405);
  });

  it("should throw if method is not GET", async () => {
    const { req, res } = createMocks({
      method: "POST",
    });
    const response = await handler(req, res);
    expect(response?.statusCode).toBe(405);
  });
});
