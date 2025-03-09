import { useEffect, useState } from "react";
import { CustomizationContext } from "../context/CustomizationContext";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

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


  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    const total = toggledItems.reduce((sum, item) => {
      if (item.toggled) {
        return sum + item.price;
      }
      return sum;
    }, 0);
    setTotalPrice(total);
  };

  const [colors, setColors] = useState({
    jacketColor: "#3e3f41",
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
  const [sidebarValue, setSidebarValue] = useState("jacket");
  const [isSidebarOpen, SetisSidebarOpen] = useState(false);

  const [CustomColors, setCustomColors] = useState({
    jacketColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    jacketButtonColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    shirtColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    shirtButtonColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    tieColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    waistcoatColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    waistcoatButtonColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    pantsColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    pantsButtonColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    shoeColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    shoeStripeColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    shoeSoleColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    beltColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    pocketColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    socksColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    buckleColor:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
  });
  const [activeButton, setActiveButton] = useState({});

  // Load jacket textures with useLoader
  const jacketpinstripe = useLoader(
    TextureLoader,
    "/texture/pinstripe_2048.png"
  );
  const jacketchalkstripe = useLoader(
    TextureLoader,
    "/texture/chalkstripe.png"
  );
  const jacketwindowpane = useLoader(TextureLoader, "/texture/windowpane.png");
  const jackettattersall = useLoader(
    TextureLoader,
    "/texture/tattersall_2048.png"
  );
  const jacketherringbone = useLoader(
    TextureLoader,
    "/texture/herringbone.png"
  );
  const jacketbarleycorn = useLoader(
    TextureLoader,
    "/texture/barleycorn_3072.png"
  );
  const jacketnailshead = useLoader(
    TextureLoader,
    "/texture/nailshead_3072.png"
  );
  const jacketbirdseye = useLoader(TextureLoader, "texture/birdseye_3072.png");
  const jacketglencheck = useLoader(TextureLoader, "texture/princeOfWales.png");
  const jacketshepherdscheck = useLoader(
    TextureLoader,
    "/texture/shepherdsCheck.png"
  );
  const jackettartan = useLoader(TextureLoader, "/texture/madras2.png");
  const jackettartantwo = useLoader(TextureLoader, "/texture/tartan2.png");
  const jackethoundstooth = useLoader(
    TextureLoader,
    "/texture/houndstooth_3072.png"
  );
  const jacketpaisley = useLoader(TextureLoader, "/texture/paisley2.png");
  const jacketfloral = useLoader(TextureLoader, "/texture/floral.png");

  // Load shirt textures with useLoader
  const shirtpencilstripe = useLoader(
    TextureLoader,
    "/texture/pinstripe_2048.png"
  );
  const shirtstripe = useLoader(TextureLoader, "/texture/striped.png");
  const shirtawning = useLoader(TextureLoader, "/texture/awning.png");
  const shirtgingham = useLoader(TextureLoader, "/texture/gingham.png");
  const shirtgraphcheck = useLoader(TextureLoader, "/texture/graphCheck.png");
  const shirtwindowpane = useLoader(
    TextureLoader,
    "/texture/windowpaneShirt.png"
  );
  const shirttattersall = useLoader(
    TextureLoader,
    "/texture/tattersall_3072.png"
  );
  const shirtpindot = useLoader(TextureLoader, "/texture/pindot.png");
  const shirtpotkadot = useLoader(TextureLoader, "/texture/pindot.png");
  const shirttartan = useLoader(TextureLoader, "/texture/tartan.png");
  const shirtmadras = useLoader(TextureLoader, "/texture/madras_3072.png");
  const shirtpaisley = useLoader(TextureLoader, "/texture/paisley.png");
  const shirtfloral = useLoader(TextureLoader, "/texture/floral.png");

  // Load tie textures with useLoader
  const tiepencilstripe = useLoader(
    TextureLoader,
    "/texture/pinstripe_2048.png"
  );
  const tiestripe = useLoader(TextureLoader, "/texture/striped.png");
  const tieawning = useLoader(TextureLoader, "/texture/awning.png");
  const tiegingham = useLoader(TextureLoader, "/texture/gingham.png");
  const tiegraphcheck = useLoader(TextureLoader, "/texture/graphCheck.png");
  const tiewindowpane = useLoader(
    TextureLoader,
    "/texture/windowpaneShirt.png"
  );
  const tietattersall = useLoader(
    TextureLoader,
    "/texture/tattersall_3072.png"
  );
  const tiepindot = useLoader(TextureLoader, "/texture/pindot.png");
  const tiepotkadot = useLoader(TextureLoader, "/texture/pindot.png");
  const tietartan = useLoader(TextureLoader, "/texture/tartan.png");
  const tiemadras = useLoader(TextureLoader, "/texture/madras_3072.png");
  const tiepaisley = useLoader(TextureLoader, "/texture/paisley.png");
  const tiefloral = useLoader(TextureLoader, "/texture/floral.png");

  // Load waistcoat textures with useLoader
  const waistcoatpinstripe = useLoader(
    TextureLoader,
    "/texture/pinstripe_2048.png"
  );
  const waistcoatchalkstripe = useLoader(
    TextureLoader,
    "/texture/chalkstripe.png"
  );
  const waistcoatwindowpane = useLoader(
    TextureLoader,
    "/texture/windowpane.png"
  );
  const waistcoattattersall = useLoader(
    TextureLoader,
    "/texture/tattersall_2048.png"
  );
  const waistcoatherringbone = useLoader(
    TextureLoader,
    "/texture/herringbone.png"
  );
  const waistcoatbarleycorn = useLoader(
    TextureLoader,
    "/texture/barleycorn_3072.png"
  );
  const waistcoatnailshead = useLoader(
    TextureLoader,
    "/texture/nailshead_3072.png"
  );
  const waistcoatbirdseye = useLoader(
    TextureLoader,
    "texture/birdseye_3072.png"
  );
  const waistcoatglencheck = useLoader(
    TextureLoader,
    "texture/princeOfWales.png"
  );
  const waistcoatshepherdscheck = useLoader(
    TextureLoader,
    "/texture/shepherdsCheck.png"
  );
  const waistcoattartan = useLoader(TextureLoader, "/texture/madras2.png");
  const waistcoattartantwo = useLoader(TextureLoader, "/texture/tartan2.png");
  const waistcoathoundstooth = useLoader(
    TextureLoader,
    "/texture/houndstooth_3072.png"
  );
  const waistcoatpaisley = useLoader(TextureLoader, "/texture/paisley2.png");
  const waistcoatfloral = useLoader(TextureLoader, "/texture/floral.png");

  // Load Pants textures with useLoader
  const pantspinstripe = useLoader(
    TextureLoader,
    "/texture/pinstripe_2048.png"
  );
  const pantschalkstripe = useLoader(TextureLoader, "/texture/chalkstripe.png");
  const pantswindowpane = useLoader(TextureLoader, "/texture/windowpane.png");
  const pantstattersall = useLoader(
    TextureLoader,
    "/texture/tattersall_2048.png"
  );
  const pantsherringbone = useLoader(TextureLoader, "/texture/herringbone.png");
  const pantsbarleycorn = useLoader(
    TextureLoader,
    "/texture/barleycorn_3072.png"
  );
  const pantsnailshead = useLoader(
    TextureLoader,
    "/texture/nailshead_3072.png"
  );
  const pantsbirdseye = useLoader(TextureLoader, "texture/birdseye_3072.png");
  const pantsglencheck = useLoader(TextureLoader, "texture/princeOfWales.png");
  const pantsshepherdscheck = useLoader(
    TextureLoader,
    "/texture/shepherdsCheck.png"
  );
  const pantstartan = useLoader(TextureLoader, "/texture/madras2.png");
  const pantstartantwo = useLoader(TextureLoader, "/texture/tartan2.png");
  const pantshoundstooth = useLoader(
    TextureLoader,
    "/texture/houndstooth_3072.png"
  );
  const pantspaisley = useLoader(TextureLoader, "/texture/paisley2.png");
  const pantsfloral = useLoader(TextureLoader, "/texture/floral.png");

  //   Load Shoe Pattern / Shoe Texture
  const shoeSuede = useLoader(TextureLoader, "/texture/suede.png");
  const shoePaisley = useLoader(TextureLoader, "/texture/paisley.png");
  const shoeFloral = useLoader(TextureLoader, "/texture/floral.png");

  const handleSidebar = (sidebarType) => {
    SetisSidebarOpen(!isSidebarOpen);
    setSidebarValue(sidebarType);
  };
  // handleCustomColorChnage
  const handleCustomColorChnage = (e) => {
    const value = e.target.value;
    const target = e.target.getAttribute("data-target");

    setCustomColors((prevcolors) => ({
      ...prevcolors,
      [target]: value,
    }));

    setColors((prevColors) => ({
      ...prevColors,
      [target]: value,
    }));
  };

  // handle fixed color
  const handleFixedColor = (e) => {
    const value = e.target.getAttribute("data-value");
    const target = e.target.getAttribute("data-target");

    setColors((prevColors) => ({
      ...prevColors,
      [target]: value,
    }));

    setActiveButton((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  // handle reset all edit
  const handleResetEdit = () => {
    setColors({
      jacketColor: "#3e3f41",
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
      shoeSoleColor: "white",
      beltColor: "#6a4335",
      pocketColor: "white",
      socksColor: "white",
      buckleColor: "#6a4335",
    });
    setJacketTexture(null);
    setShirtTexture(null);
    setTieTexture(null);
    setWaistcoatTexture(null);
    setPantsTexture(null);
    setShoePattern(null);

    setToggledItems({
      jacket: true,
      waistCoat: true,
      tie: true,
      tieClip: true,
      pocketSquare: true,
      belt: true,
    });
    setActiveButton({});
    setCustomColors({
      jacketColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      jacketButtonColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      shirtColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      shirtButtonColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      tieColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      waistcoatColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      waistcoatButtonColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      pantsColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      pantsButtonColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      shoeColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      shoeStripeColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      shoeSoleColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      beltColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      pocketColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      socksColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      buckleColor:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    });
  };

  const [textures, setTextures] = useState({
    jacketTexture: null,
    shirtTexture: null,
    tieTexture: null,
    waistcoatTexture: null,
    pantsTexture: null,
    shoePattern: null,
  });


  const handleTexturesChange = (itemType, fabricType) => {
    const texture = getFabric(fabricType);
    console.log(itemType, fabricType);

    setTextures((prevTextures) => ({
      ...prevTextures,
      [itemType]: texture,
    }));
  };

  const getFabric = (fabricType) => {
    switch (fabricType) {
      case "jacketpinstripe":
        return jacketpinstripe;
      case "jacketchalkstripe":
        return jacketchalkstripe;
      case "jacketwindowpane":
        return jacketwindowpane;
      case "jackettattersall":
        return jackettattersall;
      case "jacketherringbone":
        return jacketherringbone;
      case "jacketbarleycorn":
        return jacketbarleycorn;
      case "jacketnailshead":
        return jacketnailshead;
      case "jacketbirdseye":
        return jacketbirdseye;
      case "jacketglencheck":
        return jacketglencheck;
      case "jacketshepherdscheck":
        return jacketshepherdscheck;
      case "jackettartan":
        return jackettartan;
      case "jackettartantwo":
        return jackettartantwo;
      case "jackethoundstooth":
        return jackethoundstooth;
      case "jacketpaisley":
        return jacketpaisley;
      case "jacketfloral":
        return jacketfloral;
      case "shirtpencilstripe":
        return shirtpencilstripe;
      case "shirtstripe":
        return shirtstripe;
      case "shirtawning":
        return shirtawning;
      case "shirtgingham":
        return shirtgingham;
      case "shirtgraphcheck":
        return shirtgraphcheck;
      case "shirtwindowpane":
        return shirtwindowpane;
      case "shirttattersall":
        return shirttattersall;
      case "shirtpindot":
        return shirtpindot;
      case "shirtpotkadot":
        return shirtpotkadot;
      case "shirttartan":
        return shirttartan;
      case "shirtmadras":
        return shirtmadras;
      case "shirtpaisley":
        return shirtpaisley;
      case "shirtfloral":
        return shirtfloral;
      case "tiepencilstripe":
        return tiepencilstripe;
      case "tiestripe":
        return tiestripe;
      case "tieawning":
        return tieawning;
      case "tiegingham":
        return tiegingham;
      case "tiegraphcheck":
        return tiegraphcheck;
      case "tiewindowpane":
        return tiewindowpane;
      case "tietattersall":
        return tietattersall;
      case "tiepindot":
        return tiepindot;
      case "tiepotkadot":
        return tiepotkadot;
      case "tietartan":
        return tietartan;
      case "tiemadras":
        return tiemadras;
      case "tiepaisley":
        return tiepaisley;
      case "tiefloral":
        return tiefloral;
      case "waistcoatpinstripe":
        return waistcoatpinstripe;
      case "waistcoatchalkstripe":
        return waistcoatchalkstripe;
      case "waistcoatwindowpane":
        return waistcoatwindowpane;
      case "waistcoattattersall":
        return waistcoattattersall;
      case "waistcoatherringbone":
        return waistcoatherringbone;
      case "waistcoatbarleycorn":
        return waistcoatbarleycorn;
      case "waistcoatnailshead":
        return waistcoatnailshead;
      case "waistcoatbirdseye":
        return waistcoatbirdseye;
      case "waistcoatglencheck":
        return waistcoatglencheck;
      case "waistcoatshepherdscheck":
        return waistcoatshepherdscheck;
      case "waistcoattartan":
        return waistcoattartan;
      case "waistcoattartantwo":
        return waistcoattartantwo;
      case "waistcoathoundstooth":
        return waistcoathoundstooth;
      case "waistcoatpaisley":
        return waistcoatpaisley;
      case "waistcoatfloral":
        return waistcoatfloral;
      case "pantspinstripe":
        return pantspinstripe;
      case "pantschalkstripe":
        return pantschalkstripe;
      case "pantswindowpane":
        return pantswindowpane;
      case "pantstattersall":
        return pantstattersall;
      case "pantsherringbone":
        return pantsherringbone;
      case "pantsbarleycorn":
        return pantsbarleycorn;
      case "pantsnailshead":
        return pantsnailshead;
      case "pantsbirdseye":
        return pantsbirdseye;
      case "pantsglencheck":
        return pantsglencheck;
      case "pantsshepherdscheck":
        return pantsshepherdscheck;
      case "pantstartan":
        return pantstartan;
      case "pantstartantwo":
        return pantstartantwo;
      case "pantshoundstooth":
        return pantshoundstooth;
      case "pantspaisley":
        return pantspaisley;
      case "pantsfloral":
        return pantsfloral;
      case "shoeSuede":
        return shoeSuede;
      case "shoePaisley":
        return shoePaisley;
      case "shoeFloral":
        return shoeFloral;
      default:
        return null;
    }
  };

  const providerValue = {
    toggledItems,
    setToggledItems,
    colors,
    setColors,
    isSidebarOpen,
    handleSidebar,
    sidebarValue,
    setSidebarValue,
    CustomColors,
    setCustomColors,
    handleCustomColorChnage,
    handleFixedColor,
    activeButton,
    handleResetEdit,
    handleTexturesChange,
    textures,
    totalPrice,
    calculateTotalPrice,
  };

  return (
    <CustomizationContext.Provider value={providerValue}>
      {children}
    </CustomizationContext.Provider>
  );
}

export default CustomizationProvider;
