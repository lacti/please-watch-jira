// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useStorage({
  storage = chrome.storage.local,
}: { storage?: chrome.storage.StorageArea } = {}) {
  async function getString(key: string): Promise<string | null> {
    return new Promise<string>((resolve, reject) =>
      storage.get(key, (items) =>
        chrome.runtime.lastError
          ? reject(chrome.runtime.lastError)
          : resolve(key in items ? items[key] : null)
      )
    );
  }

  async function putString(key: string, value: string): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      storage.set({ [key]: value }, () =>
        chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve()
      )
    );
  }

  async function remove(key: string): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      storage.remove(key, () =>
        chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve()
      )
    );
  }

  async function get<T>(key: string): Promise<T | null> {
    const maybe = await getString(key);
    return maybe === null ? null : (JSON.parse(maybe) as T);
  }

  async function put<T>(key: string, value: T | null): Promise<void> {
    return value === null ? remove(key) : putString(key, JSON.stringify(value));
  }

  return { getString, putString, remove, get, put };
}
