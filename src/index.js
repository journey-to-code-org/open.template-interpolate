function getPath(object, path) {
  return path.split(".").reduce((value, key) =>
    value != null && Object.prototype.hasOwnProperty.call(Object(value), key) ? value[key] : undefined,
  object);
}

export function interpolate(template, values, options = {}) {
  if (typeof template !== "string") throw new TypeError("Expected template to be a string");
  if (values === null || typeof values !== "object") throw new TypeError("Expected values to be an object");
  if (options === null || typeof options !== "object" || Array.isArray(options)) throw new TypeError("Expected options to be an object");
  const { open = "{", close = "}", missing = "keep" } = options;
  if (![open, close].every(v => typeof v === "string" && v.length > 0)) throw new TypeError("Expected open and close to be non-empty strings");
  if (!["keep","empty","throw"].includes(missing)) throw new RangeError("Expected missing to be keep, empty, or throw");

  const escape = s => s.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
  const pattern = new RegExp(`${escape(open)}\\s*([^${escape(close)}]+?)\\s*${escape(close)}`, "gu");

  return template.replace(pattern, (match, rawPath) => {
    const path = rawPath.trim();
    const value = getPath(values, path);
    if (value === undefined) {
      if (missing === "throw") throw new ReferenceError(`Missing template value: ${path}`);
      return missing === "empty" ? "" : match;
    }
    return String(value);
  });
}
