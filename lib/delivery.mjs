export const DELIVERY_PHONE = "919560370201";
export const isValidPin = (value) =>
  /^[1-9][0-9]{5}$/.test(String(value).trim());
export function cleanSelection(value, products) {
  if (!Array.isArray(value)) return [];
  const allowed = new Set(products.map((product) => product.name));
  return value.filter((name) => typeof name === "string" && allowed.has(name));
}
export function createDeliveryEnquiry(pin, selection = []) {
  const code = String(pin).trim();
  if (!isValidPin(code))
    throw new Error("A valid six-digit Indian PIN code is required.");
  const chosen = selection.length
    ? [...new Set(selection)].join(", ")
    : "the FreshDay dairy range";
  const message = `Hello FreshDay, please confirm home delivery availability and timings for PIN ${code}. I am interested in ${chosen}.`;
  return `https://wa.me/${DELIVERY_PHONE}?text=${encodeURIComponent(message)}`;
}
