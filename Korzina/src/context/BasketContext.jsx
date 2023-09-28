import { createContext, useState } from "react";

export const BasketContext = createContext(null);

const BasketProvider = ({ children }) => {
  const [store, setStore] = useState([]);
  return (
    <BasketContext.Provider value={ {store,setStore} }>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider
