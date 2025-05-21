import { test, expect } from "vitest";
import { msisdn } from "../../MSISDN.js";

test("it returns true if number is valid TNM number", () => {
    expect(msisdn("0888800900", { country: "MW", type: "TNM" }).isValid()).toBe(true);
    expect(msisdn("0888 800 900", { country: "MW", type: "TNM" }).isValid()).toBe(true);
    expect(msisdn("265 888 800 900", { country: "MW", type: "TNM" }).isValid()).toBe(true);
    expect(msisdn("+265 888 800 900", { country: "MW", type: "TNM" }).isValid()).toBe(true);
    expect(msisdn("888 800 900", { country: "MW", type: "TNM" }).isValid()).toBe(true);
});

test("it returns false if number is an invalid TNM number", () => {
    expect(msisdn("088880090", { country: "MW", type: "TNM" }).isValid()).toBe(false);
    expect(msisdn("0988800900", { country: "MW", type: "TNM" }).isValid()).toBe(false);
});