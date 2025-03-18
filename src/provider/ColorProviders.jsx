import { useContext, useState } from "react";
import { CustomizationContext } from "../context/CustomizationContext";
import { ColorContext, FabricContext } from "../context/index";

const ColorProviders = ({ children }) => {
  const [colors, setColors] = useState({
    jacketColor: "#506C91",
    jacketButtonColor: "#ffffff",
    shirtColor: "#ffffff",
    shirtButtonColor: "#000000",
    tieColor: "#19397d",
    tieClipColor: "#ffffff",
    waistcoatColor: "#8c8c8c",
    waistcoatButtonColor: "#ffffff",
    pantsColor: "#3e3f41",
    pantsButtonColor: "#ffffff",
    shoeColor: "#6a4335",
    shoeStripeColor: "#ffffff",
    shoeSoleColor: "#1d1d1e",
    beltColor: "#6a4335",
    pocketColor: "#ffffff",
    socksColor: "#ffffff",
    buckleColor: "#6a4335",
  });

  const [selectedColor, setSelectedColor] = useState({
    jacketColor: null,
    jacketButtonColor: null,
    shirtColor: null,
    shirtButtonColor: null,
    tieColor: null,
    waistcoatColor: null,
    waistcoatButtonColor: null,
    pantsColor: null,
    pantsButtonColor: null,
    shoeColor: null,
    shoeStripeColor: null,
    shoeSoleColor: null,
    beltColor: null,
    pocketSquareColor: null,
    sockColor: null,
    buckleColor: null,
    tieClipColor: null,
  });
  const { toggledItems, totalPrice, setToggledItems } =
    useContext(CustomizationContext);
  const { selectedFabrics, setSelectedFabrics, setTextures } =
    useContext(FabricContext);

  const finalPrice = totalPrice + parseFloat(30);

  const handleColorChange = (e) => {
    const value = e.target.value;
    const target = e.target.getAttribute("data-target");

    if (e.target.type === "color") {
      setColors((prevColors) => ({
        ...prevColors,
        [target]: value,
      }));
    } else if (e.target.tagName === "BUTTON") {
      const colorValue = e.target.getAttribute("data-value");
      setColors((prevColors) => ({
        ...prevColors,
        [target]: colorValue,
      }));
    }
  };

  const handleActiveColorButton = (target, value) => {
    setSelectedColor((prevColors) => ({
      ...prevColors,
      [target]: value,
    }));
  };

  const getFinalObj = () => {
    let CustomizationObj = {
      components: {},
      amount: finalPrice,
      success_url: "http://localhost:5174/payment-success",
      cancel_url: "http://localhost:5174/payment-error",
    };

    toggledItems.forEach((item) => {
      if (item.toggled) {
        const itemName = item.name;
        let itemObj = {};

        // For each item, add the dynamic properties (color, buttonColor, fabric, etc.)
        if (itemName === "jacket") {
          itemObj = {
            jacketColor: colors.jacketColor || "default",
            jacketButtonColor: colors.jacketButtonColor || "default",
            jacketFabric: selectedFabrics.jacket || "default",
          };
        } else if (itemName === "shirt") {
          itemObj = {
            shirtColor: colors.shirtColor || "default",
            shirtButtonColor: colors.shirtButtonColor || "default",
            shirtFabric: selectedFabrics.shirt || "default",
          };
        } else if (itemName === "tie") {
          itemObj = {
            tieColor: colors.tieColor || "default",
            tieFabric: selectedFabrics.tie || "default",
          };
        } else if (itemName === "waistcoat") {
          itemObj = {
            waistcoatColor: colors.waistcoatColor || "default",
            waistcoatButtonColor: colors.waistcoatButtonColor || "default",
            waistcoatFabric: selectedFabrics.waistcoat || "default",
          };
        } else if (itemName === "pant") {
          itemObj = {
            pantColor: colors.pantsColor || "default",
            pantButtonColor: colors.pantsButtonColor || "default",
            pantFabric: selectedFabrics.pant || "default",
          };
        } else if (itemName === "shoe") {
          itemObj = {
            shoeColor: colors.shoeColor || "default",
            shoeStripeColor: colors.shoeStripeColor || "default",
            shoeSoleColor: colors.shoeSoleColor || "default",
            shoeSockColor: colors.socksColor || "default",
            shoeFabric: selectedFabrics.shoe || "default",
          };
        } else if (itemName === "belt") {
          itemObj = {
            beltColor: colors.beltColor || "default",
            buckleColor: colors.buckleColor || "default",
          };
        } else if (itemName === "pocketSquare") {
          itemObj = {
            pocketSqureColor: colors.pocketColor || "default",
          };
        }

        // Add the constructed item object to the components
        CustomizationObj.components[itemName] = itemObj;
      }
    });

    return CustomizationObj;
  };
  // handle reset all edit
  const handleResetEdit = () => {
    setToggledItems([
      { name: "jacket", toggled: true, price: 200 },
      { name: "shirt", toggled: true, price: 100 },
      { name: "waistcoat", toggled: true, price: 120 },
      { name: "tie", toggled: true, price: 50 },
      { name: "tieClip", toggled: true, price: 20 },
      { name: "pocketSquare", toggled: true, price: 40 },
      { name: "belt", toggled: true, price: 75 },
      { name: "pant", toggled: true, price: 100 },
      { name: "shoe", toggled: true, price: 150 },
    ]);
    setColors({
      jacketColor: "#506C91",
      jacketButtonColor: "#ffffff",
      shirtColor: "#ffffff",
      shirtButtonColor: "#000000",
      tieColor: "#19397d",
      tieClipColor: "#ffffff",
      waistcoatColor: "#8c8c8c",
      waistcoatButtonColor: "#ffffff",
      pantsColor: "#3e3f41",
      pantsButtonColor: "#ffffff",
      shoeColor: "#6a4335",
      shoeStripeColor: "#ffffff",
      shoeSoleColor: "#1d1d1e",
      beltColor: "#6a4335",
      pocketColor: "#ffffff",
      socksColor: "#ffffff",
      buckleColor: "#6a4335",
    });
    setSelectedColor({
      jacketColor: null,
      jacketButtonColor: null,
      shirtColor: null,
      shirtButtonColor: null,
      tieColor: null,
      waistcoatColor: null,
      waistcoatButtonColor: null,
      pantsColor: null,
      pantsButtonColor: null,
      shoeColor: null,
      shoeStripeColor: null,
      shoeSoleColor: null,
      beltColor: null,
      pocketSquareColor: null,
      sockColor: null,
      buckleColor: null,
      tieClipColor: null,
    });
    setSelectedFabrics({
      jacket: null,
      shirt: null,
      tie: null,
      waistcoat: null,
      pant: null,
      shoe: null,
    });
    setTextures({
      jacketTexture: null,
      shirtTexture: null,
      tieTexture: null,
      waistcoatTexture: null,
      pantsTexture: null,
      shoePattern: null,
    });
  };

  return (
    <ColorContext.Provider
      value={{
        colors,
        setColors,
        handleColorChange,
        selectedColor,
        handleActiveColorButton,
        getFinalObj,
        handleResetEdit,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProviders;
