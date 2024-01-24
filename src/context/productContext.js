import { createContext, useContext } from "react";
import { useState } from "react";
import productsData from "../data/products.json";

export const productContext = createContext();

export function useProductContext() {
    return useContext(productContext);
}


export default function CustomProductContext({ children }) {
    const [productsArray, setProductsArray] = useState(productsData);
    const [cartArray, setCartArray] = useState([]);

    return (

        <productContext.Provider value={{ productsArray, cartArray }}>

            {children}

        </productContext.Provider>
    )
}
