// Import dependences
// External
import request from "supertest";

// Personal
import app from "../src";

// Constants and variables
const email: string = "testneed1@mail.com";
const content = "This is a test without password";
const nonexistent = "sdsa-432432-gsffsd-423423-fsdfsdf-534343-dfsdfsd-33434";
let passwordUser = "sda-fgh-456-7634-oe";
let apiKey: undefined | string = undefined;
let uniqueString: undefined | string = undefined;

describe("Neccesary for other proves", () => {
  // Antes de todas las pruebas, crear el apiKey
  beforeAll(async () => {
    const res = await request(app).post("/api/v1/api-key").send({
      email,
      description: "This is a test",
    });
    apiKey = res.body.data.apiKey;
  });

  // Test create message
  describe("POST /api/v1/message", () => {
    test("Should return 200 with new message", async () => {
      const res = await request(app).post("/api/v1/message").send({
        content,
        apiKey,
      });
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toHaveProperty("uniqueString");
      expect(res.body.data.uniqueString).toBeDefined();
      uniqueString = res.body.data.uniqueString;
    });

    test("Should return 400 without fields, without content, without api key, with nonexistent api key, with failed expiretAt", async () => {
      const fields = [
        {},
        { apiKey },
        { content },
        {
          content,
          nonexistent,
        },
        {
          apiKey,
          content,
          expireAt: "2024-03-23",
        },
      ];
      for (const field of fields) {
        const res = await request(app).post("/api/v1/message").send(field);
        expect(res.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );
        expect(res.status).toBe(400);
      }
    });
  });

  // Test to desencrypt
  describe("POST /api/v1/message/decipher", () => {
    test("Should return 200 with correct unique string", async () => {
      const res = await request(app).post("/api/v1/message/decipher").send({
        uniqueString,
        apiKey,
      });
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toHaveProperty("message");
      expect(res.body.data.message).toBe(content);
    });

    test("Should return 400 without fields, without uniqueString, without api key, with nonexistent api key, with password for message without password", async () => {
      const fields = [
        {},
        { apiKey },
        { uniqueString },
        {
          uniqueString,
          nonexistent,
        },
        {
          apiKey,
          uniqueString,
          passwordUser,
        },
      ];
      for (const field of fields) {
        const res = await request(app)
          .post("/api/v1/message/decipher")
          .send(field);
        expect(res.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );
        expect(res.status).toBe(400);
      }
    });
  });

  // Después de todas las pruebas, eliminar el apiKey
  afterAll(async () => {
    const res = await request(app).delete("/api/v1/api-key").send({
      email,
      apiKey,
    });
    expect(res.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
    expect(res.status).toBe(200);
  });
});
