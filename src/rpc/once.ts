export default function once<Args extends unknown[], ReturnType>(
  fn: (...args: Args) => ReturnType
): (...args: Args) => ReturnType | void {
  let executed = false;
  return function delegate(...args: Args): ReturnType | void {
    if (executed) {
      return;
    }
    executed = true;
    return fn(...args);
  };
}
