import { useContext } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import closeImg from "../assets/images/close.svg";
import { options } from "../configData/configData";
import { CustomizationContext } from "../context/CustomizationContext";
import { ColorContext, FabricContext } from "../context/index";
import { GrFormEdit } from "react-icons/gr";

function Sidebar() {
  const {
    handleSidebar,
    isSidebarOpen,
    sidebarValue,
    fabricData,
  } = useContext(CustomizationContext);
  const { handleTexturesChange, handleButtonClick, selectedFabrics } =
    useContext(FabricContext);
  const { colors, handleColorChange, selectedColor, handleActiveColorButton } =
    useContext(ColorContext);
    

  return (
    <div
      className={`sidebar absolute top-0 bottom-0 w-[396px] max-md:w-[300px] bg-[#f5f5f5] shadow-lg p-6 duration-300 ease-in-out overflow-hidden z-[50] max-md:bg-[rgba(255,255,255,0.3)] max-md:backdrop-blur-sm ${
        isSidebarOpen
          ? "right-0 visible opacity-100"
          : "right-[-396px] invisible opacity-0"
      }`}
    >
      <div
        className="absolute top-5 left-5 h-10 w-10 bg-[#d9e1e6] flex items-center justify-center cursor-pointer rounded-full z-20"
        onClick={handleSidebar}
      >
        <img src={closeImg} alt="" />
      </div>
      {/* edit sidebar options  */}
      <div className="mt-[70px]">
        {sidebarValue === "jacket" ? (
          <div>
            <Tabs className="my-custom-tabs">
              <TabList>
                <Tab>Jacket</Tab>
                <Tab>Button</Tab>
                <Tab>Fabric & Patterns</Tab>
              </TabList>

              <div className="fabric-container overflow-y-auto">
                <TabPanel className="mt-7">
                  <div className="grid grid-cols-5 gap-5 ">
                    <div className="relative">
                      <input
                        id="jacketColor"
                        data-target="jacketColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        type="color"
                        value={colors.jacketColor}
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="jacketColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.jacketColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                      
                    </div>
                    {options.jacket &&
                      options.jacket.fabricColors &&
                      Object.entries(options.jacket.fabricColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full duration-200 ease-in-out ml-[2px] ${selectedColor.jacketColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''}`}
                              data-value={value}
                              data-target="jacketColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('jacketColor', value)
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="jacketButtonColor"
                        data-target="jacketButtonColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="jacketButtonColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.jacketButtonColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.jacket &&
                      options.jacket.buttonColors &&
                      Object.entries(options.jacket.buttonColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ml-[2px] ${selectedColor.jacketButtonColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''}`}
                              data-value={value}
                              data-target="jacketButtonColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('jacketButtonColor', value);
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  {fabricData &&
                    fabricData.map((fabric) => (
                      <button
                        key={fabric?.id}
                        value={fabric?.fabric}
                        data-fabric={fabric?.fabric.toLowerCase()}
                        onClick={() => {
                          handleTexturesChange(
                            "jacketTexture",
                            `jacket${fabric?.fabric.toLowerCase()}`
                          );
                          handleButtonClick("jacket", fabric);
                        }}
                        className={`block py-3 px-4 text-left capitalize  rounded-[8px] bg-[#EBEFF2] text-sm w-full text-[#060605] mt-3 ${
                          selectedFabrics?.jacket ===
                          fabric.fabric.toLowerCase()
                            ? "bg-theme-color"
                            : ""
                        }`}
                      >
                        {fabric?.fabric}
                      </button>
                    ))}
                </TabPanel>
              </div>
            </Tabs>
          </div>
        ) : (
          ""
        )}
        {/* shirt  */}
        {sidebarValue === "shirt" ? (
          <div>
            <Tabs className="my-custom-tabs">
              <TabList>
                <Tab>Shirt Color</Tab>
                <Tab>Button</Tab>
                <Tab>Fabric & Patterns</Tab>
              </TabList>

              <div className="fabric-container overflow-y-auto">
                <TabPanel className="mt-7">
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="shirtColor"
                        data-target="shirtColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        type="color"
                        value={colors.shirtColor}
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="shirtColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.shirtColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.shirt &&
                      options.shirt.fabricColors &&
                      Object.entries(options.shirt.fabricColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ml-[2px] ${selectedColor.shirtColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''}`}
                              data-value={value}
                              data-target="shirtColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('shirtColor', value);
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="shirtButtonColor"
                        data-target="shirtButtonColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.shirtButtonColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="shirtButtonColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.shirtButtonColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.shirt &&
                      options.shirt.buttonColors &&
                      Object.entries(options.shirt.buttonColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ${selectedColor.shirtButtonColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''} ml-[2px]`}
                              data-value={value}
                              data-target="shirtButtonColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e),
                                handleActiveColorButton('shirtButtonColor', value);
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  {fabricData &&
                    fabricData.map((fabric) => (
                      <button
                        key={fabric?.id}
                        value={fabric?.fabric}
                        data-fabric={fabric?.fabric.toLowerCase()}
                        onClick={() => {
                          handleTexturesChange(
                            "shirtTexture",
                            `shirt${fabric?.fabric.toLowerCase()}`
                          );
                          handleButtonClick("shirt", fabric);
                        }}
                        className={`block py-3 px-4 text-left capitalize  rounded-[8px] bg-[#EBEFF2] text-sm w-full text-[#060605] mt-3 ${
                          selectedFabrics?.shirt ===
                          fabric.fabric.toLowerCase()
                            ? "bg-theme-color"
                            : ""
                        }`}
                      >
                        {fabric?.fabric}
                      </button>
                    ))}
                </TabPanel>
              </div>
            </Tabs>
          </div>
        ) : (
          ""
        )}
        {/* tie  */}
        {sidebarValue === "tie" ? (
          <div>
            <Tabs className="my-custom-tabs">
              <TabList>
                <Tab>Tie Color</Tab>
                <Tab>Fabric & Patterns</Tab>
              </TabList>

              <div className="fabric-container overflow-y-auto">
                <TabPanel className="mt-7">
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="tieColor"
                        data-target="tieColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.tieColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="tieColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.tieColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.tie &&
                      options.tie.fabricColors &&
                      Object.entries(options.tie.fabricColors).map(([key, value]) => (
                        <div key={key}>
                          <button
                            className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ${selectedColor.tieColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''} ml-[2px] `}
                            data-value={value}
                            data-target="tieColor"
                            style={{ backgroundColor: value }}
                            onClick={(e) => {
                              handleColorChange(e),
                              handleActiveColorButton('tieColor', value)
                            }}
                          ></button>
                        </div>
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                {fabricData &&
                    fabricData.map((fabric) => (
                      <button
                        key={fabric?.id}
                        value={fabric?.fabric}
                        data-fabric={fabric?.fabric.toLowerCase()}
                        onClick={() => {
                          handleTexturesChange(
                            "tieTexture",
                            `tie${fabric?.fabric.toLowerCase()}`
                          );
                          handleButtonClick("tie", fabric);
                        }}
                        className={`block py-3 px-4 text-left capitalize  rounded-[8px] bg-[#EBEFF2] text-sm w-full text-[#060605] mt-3 ${
                          selectedFabrics?.tie ===
                          fabric.fabric.toLowerCase()
                            ? "bg-theme-color"
                            : ""
                        }`}
                      >
                        {fabric?.fabric}
                      </button>
                    ))}
                </TabPanel>
              </div>
            </Tabs>
          </div>
        ) : (
          ""
        )}
        {/* waistcoat  */}
        {sidebarValue === "waistcoat" ? (
          <div>
            <Tabs className="my-custom-tabs">
              <TabList>
                <Tab>Waistcoat Color</Tab>
                <Tab>Button</Tab>
                <Tab>Fabric & Patterns</Tab>
              </TabList>

              <div className="fabric-container overflow-y-auto">
                <TabPanel className="mt-7">
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="waistcoatColor"
                        data-target="waistcoatColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.waistcoatColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="waistcoatColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.waistcoatColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.waistcoat &&
                      options.waistcoat.fabricColors &&
                      Object.entries(options.waistcoat.fabricColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ${selectedColor.waistcoatColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''} `}
                              data-value={value}
                              data-target="waistcoatColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('waistcoatColor', value)
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="waistcoatButtonColor"
                        data-target="waistcoatButtonColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.waistcoatButtonColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="waistcoatButtonColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{
                          background: colors.waistcoatButtonColor,
                        }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.waistcoat &&
                      options.waistcoat.buttonColors &&
                      Object.entries(options.waistcoat.buttonColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ${selectedColor.waistcoatButtonColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''} ml-[2px] `}
                              data-value={value}
                              data-target="waistcoatButtonColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('waistcoatButtonColor', value)
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                {fabricData &&
                    fabricData.map((fabric) => (
                      <button
                        key={fabric?.id}
                        value={fabric?.fabric}
                        data-fabric={fabric?.fabric.toLowerCase()}
                        onClick={() => {
                          handleTexturesChange(
                            "waistcoatTexture",
                            `waistcoat${fabric?.fabric.toLowerCase()}`
                          );
                          handleButtonClick("waistcoat", fabric);
                        }}
                        className={`block py-3 px-4 text-left capitalize  rounded-[8px] bg-[#EBEFF2] text-sm w-full text-[#060605] mt-3 ${
                          selectedFabrics?.waistcoat ===
                          fabric.fabric.toLowerCase()
                            ? "bg-theme-color"
                            : ""
                        }`}
                      >
                        {fabric?.fabric}
                      </button>
                    ))}
                </TabPanel>
              </div>
            </Tabs>
          </div>
        ) : (
          ""
        )}
        {/* pant  */}
        {sidebarValue === "pants" ? (
          <div>
            <Tabs className="my-custom-tabs">
              <TabList>
                <Tab>Pant Color</Tab>
                <Tab>Button</Tab>
                <Tab>Fabric & Patterns</Tab>
              </TabList>

              <div className="fabric-container overflow-y-auto">
                <TabPanel className="mt-7">
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="pantsColor"
                        data-target="pantsColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.pantsColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="pantsColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.pantsColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.pants &&
                      options.pants.fabricColors &&
                      Object.entries(options.pants.fabricColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ${selectedColor.pantsColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''} ml-[2px]`}
                              data-value={value}
                              data-target="pantsColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('pantsColor', value)
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="pantsButtonColor"
                        data-target="pantsButtonColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.pantsButtonColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="pantsButtonColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.pantsButtonColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.pants &&
                      options.pants.buttonColors &&
                      Object.entries(options.pants.buttonColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ${selectedColor.pantsButtonColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''} ml-[2px]`}
                              data-value={value}
                              data-target="pantsButtonColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('pantsButtonColor', value)
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                {fabricData &&
                    fabricData.map((fabric) => (
                      <button
                        key={fabric?.id}
                        value={fabric?.fabric}
                        data-fabric={fabric?.fabric.toLowerCase()}
                        onClick={() => {
                          handleTexturesChange(
                            "pantsTexture",
                            `pants${fabric?.fabric.toLowerCase()}`
                          );
                          handleButtonClick("pant", fabric);
                        }}
                        className={`block py-3 px-4 text-left capitalize  rounded-[8px] bg-[#EBEFF2] text-sm w-full text-[#060605] mt-3 ${
                          selectedFabrics?.pant ===
                          fabric.fabric.toLowerCase()
                            ? "bg-theme-color"
                            : ""
                        }`}
                      >
                        {fabric?.fabric}
                      </button>
                    ))}
                </TabPanel>
              </div>
            </Tabs>
          </div>
        ) : (
          ""
        )}
        {/* shoe  */}
        {sidebarValue === "shoe" ? (
          <div>
            <Tabs className="my-custom-tabs">
              <TabList>
                <Tab>Shoe Color</Tab>
                <Tab>Shoe Strips</Tab>
                <Tab>Shoe Sole</Tab>
                <Tab>Fabric & Patterns</Tab>
              </TabList>

              <div className="fabric-container overflow-y-auto">
                <TabPanel className="mt-7">
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="shoeColor"
                        data-target="shoeColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.shoeColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="shoeColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.shoeColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.shoe &&
                      options.shoe.fabricColors &&
                      Object.entries(options.shoe.fabricColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ml-[2px] ${selectedColor.shoeColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''}`}
                              data-value={value}
                              data-target="shoeColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('shoeColor', value)
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="shoeStripeColor"
                        data-target="shoeStripeColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.shoeStripeColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="shoeStripeColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.shoeStripeColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.shoe &&
                      options.shoe.stripColors &&
                      Object.entries(options.shoe.stripColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ${selectedColor.shoeStripeColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''} ease-in-out ml-[2px]`}
                              data-value={value}
                              data-target="shoeStripeColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('shoeStripeColor', value)
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="shoeSoleColor"
                        data-target="shoeSoleColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.shoeSoleColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="shoeSoleColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.shoeSoleColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.shoe &&
                      options.shoe.soleColors &&
                      Object.entries(options.shoe.soleColors).map(([key, value]) => (
                        <div key={key}>
                          <button
                            className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ${selectedColor.shoeSoleColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''} ml-[2px]`}
                            data-value={value}
                            data-target="shoeSoleColor"
                            style={{ backgroundColor: value }}
                            onClick={(e) => {
                              handleColorChange(e);
                              handleActiveColorButton('shoeSoleColor', value)
                            }}
                          ></button>
                        </div>
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                {fabricData &&
                    fabricData.map((fabric) => (
                      <button
                        key={fabric?.id}
                        value={fabric?.fabric}
                        data-fabric={fabric?.fabric.toLowerCase()}
                        onClick={() => {
                          handleTexturesChange(
                            "shoeTexture",
                            `shoe${fabric?.fabric.toLowerCase()}`
                          );
                          handleButtonClick("shoe", fabric);
                        }}
                        className={`block py-3 px-4 text-left capitalize  rounded-[8px] bg-[#EBEFF2] text-sm w-full text-[#060605] mt-3 ${
                          selectedFabrics?.shoe ===
                          fabric.fabric.toLowerCase()
                            ? "bg-theme-color"
                            : ""
                        }`}
                      >
                        {fabric?.fabric}
                      </button>
                    ))}
                </TabPanel>
              </div>
            </Tabs>
          </div>
        ) : (
          ""
        )}
        {/* belt & pocket  */}
        {sidebarValue === "belt" ? (
          <div>
            <Tabs className="my-custom-tabs">
              <TabList>
                <Tab>Belt</Tab>
                <Tab>Pocket Square</Tab>
                <Tab>Socks</Tab>
                <Tab>Buckle</Tab>
                <Tab>Tie Clip</Tab>
              </TabList>

              <div className="fabric-container overflow-y-auto">
                <TabPanel className="mt-7">
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="beltColor"
                        data-target="beltColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.beltColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="beltColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.beltColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.beltPocket &&
                      options.beltPocket.beltColors &&
                      Object.entries(options.beltPocket.beltColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ${selectedColor.beltColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''}`}
                              data-value={value}
                              data-target="beltColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('beltColor', value)
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-5 gap-5">
                    <div>
                      <input
                        id="pocketColor"
                        data-target="pocketColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.pocketColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="pocketColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.pocketColor }}
                      ></label>
                    </div>
                    {options.beltPocket &&
                      options.beltPocket.pocketSquareColors &&
                      Object.entries(options.beltPocket.pocketSquareColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ${selectedColor.pocketSquareColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''} ml-[2px]`}
                              data-value={value}
                              data-target="pocketColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('pocketSquareColor', value)
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="socksColor"
                        data-target="socksColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.socksColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="socksColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.socksColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.beltPocket &&
                      options.beltPocket.sockColors &&
                      Object.entries(options.beltPocket.sockColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ${selectedColor.sockColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''} ml-[2px] `}
                              data-value={value}
                              data-target="socksColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('sockColor', value);
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="buckleColor"
                        data-target="buckleColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.buckleColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="buckleColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.buckleColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.beltPocket &&
                      options.beltPocket.buckleColors &&
                      Object.entries(options.beltPocket.buckleColors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ${selectedColor.buckleColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''} ml-[2px]`}
                              data-value={value}
                              data-target="buckleColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('buckleColor', value)
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-5 gap-5">
                    <div className="relative">
                      <input
                        id="tieClipColor"
                        data-target="tieClipColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={colors.buckleColor}
                        type="color"
                        onChange={handleColorChange}
                      />
                      <label
                        htmlFor="tieClipColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: colors.tieClipColor }}
                      >
                        <p className="absolute h-10 w-10 max-md:h-8 max-md:w-8 top-0 left-[2px] flex items-center justify-center text-[20px] text-white bg-[rgba(0,0,0,0.1)] rounded-full"><GrFormEdit /></p>
                      </label>
                    </div>
                    {options.tieClip &&
                      options.tieClip.colors &&
                      Object.entries(options.tieClip.colors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full ${selectedColor.tieClipColor === value ? 'border-[3px] border-theme-color duration-75 ease-out' : ''} ml-[2px]`}
                              data-value={value}
                              data-target="tieClipColor"
                              style={{ backgroundColor: value }}
                              onClick={(e) => {
                                handleColorChange(e);
                                handleActiveColorButton('tieClipColor', value)
                              }}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Sidebar;
