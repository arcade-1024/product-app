import { RootStore } from "../stores/RootStore";

let store: RootStore;

export function initializeStore(initialData = null) {
  const _store = store ?? new RootStore();

  if (initialData) {
    _store.hydrate(initialData);
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
}
