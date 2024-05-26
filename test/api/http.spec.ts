import { describe } from "vitest";
import http from "@/apis/http";

describe("Axios API Tests", () => {
  it("should get config from the axios", () => {
    const baseURL = "https://leexiao.site/gk-api";
    expect(http.defaults.baseURL).toBe(baseURL);
    expect(http.defaults.timeout).toBe(150*1000)
  });
  it("should get code from the API", async () => {
    const res: any = await http.request({
      url: "/util/translate?word=good",
    });
    expect(res.code).toBe(2000);
  });
});
