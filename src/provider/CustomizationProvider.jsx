import { useEffect, useState } from "react";
import { CustomizationContext } from "../context/CustomizationContext";
import useGetFebrics from "../hooks/useGetFebrics";

function CustomizationProvider({ children }) {
  const [toggledItems, setToggledItems] = useState(() => {
    const storedItems = localStorage.getItem("toggledItems");
    return storedItems
      ? JSON.parse(storedItems)
      : [
          { name: "jacket", toggled: true, price: 200 },
          { name: "waistcoat", toggled: true, price: 120 },
          { name: "tie", toggled: true, price: 50 },
          { name: "tieClip", toggled: true, price: 20 },
          { name: "pocketSquare", toggled: true, price: 40 },
          { name: "belt", toggled: true, price: 75 },
          { name: "pant", toggled: true, price: 200 },
          { name: "shoe", toggled: true, price: 150 },
        ];
  });
  

  // Sync toggledItems with localStorage
  useEffect(() => {
    localStorage.setItem("toggledItems", JSON.stringify(toggledItems));
  }, [toggledItems]);

  useEffect(() => {
    calculateTotalPrice();
  }, [toggledItems]);

  const [sidebarValue, setSidebarValue] = useState("jacket");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSidebarOpen, SetisSidebarOpen] = useState(false);
  const {fabricData, loading:fabricLoading} = useGetFebrics({fabricType:sidebarValue});

  const calculateTotalPrice = () => {
    const total = toggledItems.reduce((sum, item) => {
      if (item.toggled) {
        return sum + item.price;
      }
      return sum;
    }, 0);
    setTotalPrice(total);
  };

  const handleSidebar = (sidebarType) => {
    SetisSidebarOpen(!isSidebarOpen);
    setSidebarValue(sidebarType);
  };

  // handle reset all edit
  const handleResetEdit = () => {
    console.log('reset');
  };

  const providerValue = {
    toggledItems,
    setToggledItems,
    isSidebarOpen,
    sidebarValue,
    setSidebarValue,
    handleSidebar,
    handleResetEdit,
    totalPrice,
    calculateTotalPrice,
    fabricData,
    fabricLoading
  };

  return (
    <CustomizationContext.Provider value={providerValue}>
      {children}
    </CustomizationContext.Provider>
  );
}

export default CustomizationProvider;
