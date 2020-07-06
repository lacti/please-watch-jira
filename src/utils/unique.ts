export default function unique<T>(
  input: T[],
  getKey: (each: T) => string
): T[] {
  const result: T[] = [];
  const visited = new Set<string>();
  for (const each of input) {
    const key = getKey(each);
    if (visited.has(key)) {
      continue;
    }
    visited.add(key);
    result.push(each);
  }
  return result;
}
