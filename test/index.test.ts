// Import dependences
// External
import request from "supertest";

// Personal
import app from "../src";

// Constants and variables
const email: string = "test@mail.com";
const emailWithoutApiKey: string = "emailWithoutApikey@mail.com";
let apiKey: undefined | string = undefined;

// Test create api key
describe("POST /api/v1/api-key", () => {
  test("Should return 200 with new email", async () => {
    const res = await request(app).post("/api/v1/api-key").send({
      email,
      description: "This is a test",
    });
    expect(res.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("apiKey");
    expect(res.body.data.apiKey).toBeDefined();
    apiKey = res.body.data.apiKey;
  });

  test("Should return 400 without fields, without email and with repeated email ", async () => {
    const fields = [
      {},
      {description: "This is a test"},
      {email},
      {email, description: "This is a test"}
    ]
    for (const field of fields) {
      const res = await request(app).post("/api/v1/api-key").send(field);
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
      expect(res.status).toBe(400);
    }
  });
});

// Test refresh api key
describe("POST /api/v1/api-key/refresh", () => {
  test("Should return 200 with exist api key", async () => {
    const res = await request(app).post("/api/v1/api-key/refresh").send({
      email,
      apiKey,
    });
    expect(res.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
    expect(res.status).toBe(200);
  });

  test("Should return 400 without fields, without email, without apiKey and with email without api key", async () => {
    const fields = [
      {},
      { apiKey },
      { email },
      { email: emailWithoutApiKey, apiKey },
    ];
    for (const field of fields) {
      const res = await request(app)
        .post("/api/v1/api-key/refresh")
        .send(field);
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
      expect(res.status).toBe(400);
    }
  });
});

// Test delete api key
describe("DELETE /api/v1/api-key", () => {
  test("Should return 200 with exist api key", async () => {
    const res = await request(app).delete("/api/v1/api-key").send({
      email,
      apiKey,
    });
    expect(res.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
    expect(res.status).toBe(200);
  });

  test("Should return 400 without fields, without email, without apiKey and with email without api key", async () => {
    const fields = [
      {},
      { apiKey },
      { email },
      { email: emailWithoutApiKey, apiKey },
    ];
    for (const field of fields) {
      const res = await request(app)
        .delete("/api/v1/api-key")
        .send(field);
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
      expect(res.status).toBe(400);
    }
  });
});
