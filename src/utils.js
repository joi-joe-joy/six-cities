
export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const noop = () => {
  // do nothing for test
};

const setPolyfillFromEntries = () => {
  if (!Object.fromEntries) {
    Object.defineProperty(Object, `fromEntries`, {
      value(entries) {
        if (!entries || !entries[Symbol.iterator]) {
          throw new Error(`Object.fromEntries() requires a single iterable argument`);
        }
        const object = {};
        Object.keys(entries).forEach((key) => {
          const [newKey, value] = entries[key];
          object[newKey] = value;
        });
        return object;
      },
    });
  }
};

// Checking nested objects
const processValue = (value) => {
  if (typeof value !== `object` || value === null) {
    return value;
  } else {
    return Array.isArray(value)
      ? value.map(processValue)
      : renameKeys(value);
  }
};

// Rename Object Keys from Snake Case to Camel Case
export const renameKeys = (object) => {
  setPolyfillFromEntries();
  return Object.fromEntries(
      Object.entries(object)
        .map(([key, value]) => [
          key.replace(/_(.)/g, (word) => word[1].toUpperCase()),
          processValue(value)
        ])
  );
};
