import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext(null);

const BasketProvider = ({ children }) => {
  let storage = localStorage.getItem('basket_product')
  const [store, setStore] = useState(JSON.parse(storage) || []);


  useEffect(()=>{
    localStorage.setItem('basket_product', JSON.stringify(store))
  },[store])
  return (
    <BasketContext.Provider value={ {store,setStore} }>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider
