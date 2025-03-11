import { useState } from "react";
import { ColorContext } from "../context/index";

const ColorProviders = ({ children }) => {
  const [colors, setColors] = useState({
    jacketColor: "#506C91",
    jacketButtonColor: "white",
    shirtColor: "white",
    shirtButtonColor: "#000000",
    tieColor: "#19397d",
    waistcoatColor: "gray",
    waistcoatButtonColor: "white",
    pantsColor: "#3e3f41",
    pantsButtonColor: "white",
    shoeColor: "#6a4335",
    shoeStripeColor: "white",
    shoeSoleColor: "#1d1d1e",
    beltColor: "#6a4335",
    pocketColor: "white",
    socksColor: "white",
    buckleColor: "#6a4335",
  });

  const [selectedColor, setSelectedColor] = useState({
    jacketColor:null,
    jacketButtonColor:null,
    shirtColor:null,
    shirtButtonColor:null,
    tieColor:null,
    waistcoatColor:null,
    waistcoatButtonColor:null,
    pantsColor:null,
    pantsButtonColor:null,
    shoeColor:null,
    shoeStripeColor:null,
    shoeSoleColor:null,
    beltColor:null,
    pocketSquareColor:null,
    sockColor:null,
    buckleColor:null,
  })

  const handleColorChange = (e) => {
    const value = e.target.value;
    const target = e.target.getAttribute("data-target");

    if(e.target.type === "color"){
      setColors((prevColors) => ({
        ...prevColors,
        [target]:value,
      }))
    }else if(e.target.tagName === "BUTTON"){
      const colorValue = e.target.getAttribute("data-value");
      setColors((prevColors) => ({
        ...prevColors,
        [target]:colorValue,
      }))
    }

  }

  const handleActiveColorButton = (target, value) => {
    setSelectedColor((prevColors) => ({
      ...prevColors,
      [target]:value,
    }))
  }

  console.log(colors);


  return <ColorContext.Provider value={{colors, setColors, handleColorChange, selectedColor, handleActiveColorButton }}>{children}</ColorContext.Provider>;
};

export default ColorProviders;
