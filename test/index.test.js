import test from "node:test";
import assert from "node:assert/strict";
import { interpolate } from "../src/index.js";
test("interpolates values", () => assert.equal(interpolate("Hi {name}", {name:"Ada"}), "Hi Ada"));
test("supports nested paths", () => assert.equal(interpolate("{user.name}", {user:{name:"Mikey"}}), "Mikey"));
test("keeps missing values by default", () => assert.equal(interpolate("{missing}", {}), "{missing}"));
test("supports empty missing values", () => assert.equal(interpolate("x{missing}y", {}, {missing:"empty"}), "xy"));
test("can throw for missing values", () => assert.throws(() => interpolate("{x}", {}, {missing:"throw"}), ReferenceError));
