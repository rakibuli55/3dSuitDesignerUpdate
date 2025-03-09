import { ProductContext } from "../context/index";
import { useEffect, useState } from "react";

function ProductProvider({ children }) {

   const [selectedProducts, setSelectedProducts] = useState(() => {
     const savedProducts = localStorage.getItem("selectedProducts");
     return savedProducts ? JSON.parse(savedProducts) : [];
   });

    useEffect(() => {
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(selectedProducts)
      );
    }, [selectedProducts]);

  return (
    <ProductContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
