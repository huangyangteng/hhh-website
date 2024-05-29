import { describe, expect, it } from "vitest";
import { qs } from "@/utils";

describe("qs", () => {
  it("json to queryString", () => {
    const input = {
      name: "Jack",
      role: "Admin",
    };
    const output = "name=Jack&role=Admin";
    expect(qs(input)).toBe(output);
  });
});
