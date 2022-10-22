import { StoreContext } from "../contexts/StoreContext";
import { initializeStore } from "../utils/useStores";

export function StoreProvider({ children, initialState: initialValues }): any {
  const store = initializeStore(initialValues);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
