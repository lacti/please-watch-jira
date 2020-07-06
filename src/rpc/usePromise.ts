// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function usePromise<T = unknown>() {
  let resolve: (value: T) => void;
  let reject: (error?: Error) => void;
  const promise = new Promise<T>((resolveIn, rejectIn) => {
    resolve = resolveIn;
    reject = rejectIn;
  });
  return { promise, resolve: resolve!, reject: reject! };
}
