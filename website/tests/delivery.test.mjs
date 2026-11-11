import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  cleanSelection,
  createDeliveryEnquiry,
  isValidPin,
} from "../lib/delivery.mjs";
const products = JSON.parse(
  readFileSync(new URL("../data/products.json", import.meta.url)),
);
test("PIN validation rejects incomplete, leading-zero and nonnumeric values", () => {
  assert.equal(isValidPin("201301"), true);
  for (const input of ["", "20130", "020130", "20130a", "2013011"])
    assert.equal(isValidPin(input), false);
});
test("Delivery enquiry encodes the PIN and selected products without implying a booking", () => {
  const url = new URL(
    createDeliveryEnquiry("201301", ["Desi Ghee", "Paneer", "Desi Ghee"]),
  );
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, "/919319330201");
  assert.match(
    url.searchParams.get("text"),
    /confirm home delivery availability and timings for PIN 201301/,
  );
  assert.equal(url.searchParams.get("text").match(/Desi Ghee/g).length, 1);
  assert.throws(() => createDeliveryEnquiry("000000"));
});
test("Malformed or obsolete saved products cannot populate the selection", () => {
  assert.deepEqual(cleanSelection({ name: "A2 Milk" }, products), []);
  assert.deepEqual(
    cleanSelection(
      ["A2 Milk", "Buffalo Milk", null, "<script>", "Khoya"],
      products,
    ),
    ["A2 Milk", "Khoya"],
  );
});
test("Catalogue retains the supplied rates and units, including Dahi per kilogram", () => {
  assert.equal(products.length, 7);
  assert.deepEqual(
    products.map(({ price, unit }) => [price, unit]),
    [
      [110, "L"],
      [450, "kg"],
      [50, "L"],
      [160, "kg"],
      [1550, "kg"],
      [2850, "kg"],
      [650, "kg"],
    ],
  );
});
