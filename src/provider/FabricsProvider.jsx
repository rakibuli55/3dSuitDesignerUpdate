import { useContext, useEffect, useState } from "react";
import { TextureLoader } from "three";
import { CustomizationContext } from "../context/CustomizationContext";
import { FabricContext } from "../context/index";

const FabricsProvider = ({ children }) => {
  const [textures, setTextures] = useState({
    jacketTexture: null,
    shirtTexture: null,
    tieTexture: null,
    waistcoatTexture: null,
    pantsTexture: null,
    shoePattern: null,
  });
  const [selectedFabrics, setSelectedFabrics] = useState({
    jacket: null,
    shirt: null,
    tie:null,
    waistcoat: null,
    pant:null,
    shoe:null,
  });

  const [loadedfarbics, setLoadedFabrics] = useState({});

  const { fabricData } = useContext(CustomizationContext);

  const loadTexture = (imagePath) => {
    try {
      const texture = new TextureLoader().load(imagePath);
      return texture;
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    if (fabricData && fabricData.length > 0) {
      const newTexture = {};
      fabricData.forEach((fabric) => {
        const texture = loadTexture(
          `${import.meta.env.VITE_SERVER_URL}/backend/images/texture/${
            fabric.id
          }`
        );
        if (texture) {
          newTexture[`${fabric.type}${fabric.fabric.toLowerCase()}`] =
            texture || null;
        }
      });
      setLoadedFabrics(newTexture);
    }
  }, [fabricData]);

  const handleTexturesChange = (itemType, fabricType) => {
    const texture = getFabric(fabricType);
    setTextures((prevTextures) => ({
      ...prevTextures,
      [itemType]: texture,
    }));
  };

  const getFabric = (fabricType) => {
    if (loadedfarbics?.hasOwnProperty(fabricType)) {
      return loadedfarbics[fabricType];
    }
  };

  const handleButtonClick = (category, fabric) => {
    setSelectedFabrics((prev) => ({
      ...prev,
      [category]: fabric?.fabric.toLowerCase(),
    }));
  };

  return (
    <FabricContext.Provider
      value={{
        textures,
        handleTexturesChange,
        selectedFabrics,
        handleButtonClick,
      }}
    >
      {children}
    </FabricContext.Provider>
  );
};

export default FabricsProvider;
