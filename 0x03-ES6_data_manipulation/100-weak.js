export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint);

  if (!count) weakMap.set(endpoint, 1);
  else if (count < 5) weakMap.set(endpoint, count + 1);
  else throw new Error('Endpoint load is high');
}
