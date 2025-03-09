import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import closeImg from "../assets/images/close.svg";
import { useContext } from "react";
import { CustomizationContext } from "../context/CustomizationContext";
import { options } from "../configData/configData";


function Sidebar() {
    
  const {handleSidebar, isSidebarOpen, sidebarValue, CustomColors, activeButton, handleCustomColorChnage, handleFixedColor, handleTexturesChange} = useContext(CustomizationContext)
  return (
    <div
      className={`sidebar absolute top-0 bottom-0 w-[396px] max-md:w-[300px] bg-white p-6 duration-300 ease-in-out overflow-hidden z-[50] max-md:bg-[rgba(255,255,255,0.3)] max-md:backdrop-blur-sm ${
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
                  <div className="grid grid-cols-5 gap-5">
                    <div>
                      <input
                        id="jacketColor"
                        data-target="jacketColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.jacketColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="jacketColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.jacketColor }}
                      ></label>
                    </div>
                    {options.jacket &&
                      options.jacket.colors &&
                      Object.entries(options.jacket.colors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.jacketColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : "outline-transparent"
                              } ${
                                value === "#ffffff"
                                  ? "!outline-gray-300"
                                  : "outline-transparent"
                              } `}
                              data-value={value}
                              data-target="jacketColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
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
                        id="jacketButtonColor"
                        data-target="jacketButtonColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.jacketButtonColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="jacketButtonColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.jacketButtonColor }}
                      ></label>
                    </div>
                    {options.jacket &&
                      options.jacket.colors &&
                      Object.entries(options.jacket.buttons).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.jacketButtonColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : "outline-transparent"
                              } ${
                                value === "#ffffff"
                                  ? "!outline-gray-300"
                                  : "outline-transparent"
                              } `}
                              data-value={value}
                              data-target="jacketButtonColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  {options.jacket &&
                    options.jacket.fabrics &&
                    Object.entries(options.jacket.fabrics).map(
                      ([key, value]) => (
                        <button
                          key={key}
                          value={key}
                          data-fabric={value}
                          onClick={() =>
                            handleTexturesChange("jacketTexture", value)
                          }
                          className="block py-3 px-4 text-left capitalize  rounded-[8px] bg-[#EBEFF2] text-sm w-full text-[#060605] mt-3"
                        >
                          {key}
                        </button>
                      )
                    )}
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
                    <div>
                      <input
                        id="shirtColor"
                        data-target="shirtColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.shirtColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="shirtColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.shirtColor }}
                      ></label>
                    </div>
                    {options.shirt &&
                      options.shirt.colors &&
                      Object.entries(options.shirt.colors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.shirtColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : "outline-transparent"
                              } ${
                                value === "#ffffff"
                                  ? "!outline-gray-300"
                                  : "border-transparent"
                              } `}
                              data-value={value}
                              data-target="shirtColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
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
                        id="shirtButtonColor"
                        data-target="shirtButtonColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.shirtButtonColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="shirtButtonColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.shirtButtonColor }}
                      ></label>
                    </div>
                    {options.shirt &&
                      options.shirt.buttons &&
                      Object.entries(options.shirt.buttons).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-transparent outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.shirtButtonColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : ""
                              } ${
                                value === "#ffffff" ? "!outline-gray-300" : ""
                              } `}
                              data-value={value}
                              data-target="shirtButtonColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  {options.shirt &&
                    options.shirt.fabrics &&
                    Object.entries(options.shirt.fabrics).map(
                      ([key, value]) => (
                        <button
                          key={key}
                          value={key}
                          data-fabric={value}
                          onClick={() =>
                            handleTexturesChange("shirtTexture", value)
                          }
                          className="block py-3 px-4 text-left capitalize  rounded-[8px] bg-[#EBEFF2] text-sm w-full text-[#060605] mt-3"
                        >
                          {key}
                        </button>
                      )
                    )}
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
                    <div>
                      <input
                        id="tieColor"
                        data-target="tieColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.tieColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="tieColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.tieColor }}
                      ></label>
                    </div>
                    {options.tie &&
                      options.tie.colors &&
                      Object.entries(options.tie.colors).map(([key, value]) => (
                        <div key={key}>
                          <button
                            className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-transparent outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                              activeButton.tieColor === value
                                ? "active-button !outline-[#4da6ff]"
                                : ""
                            } ${
                              value === "#ffffff"
                                ? "!outline-gray-300"
                                : "border-transparent"
                            } `}
                            data-value={value}
                            data-target="tieColor"
                            style={{ backgroundColor: value }}
                            onClick={handleFixedColor}
                          ></button>
                        </div>
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  {options.tie &&
                    options.tie.fabrics &&
                    Object.entries(options.tie.fabrics).map(([key, value]) => (
                      <button
                        key={key}
                        value={key}
                        data-fabric={value}
                        onClick={() =>
                          handleTexturesChange("tieTexture", value)
                        }
                        className="block py-3 px-4 text-left capitalize  rounded-[8px] bg-[#EBEFF2] text-sm w-full text-[#060605] mt-3"
                      >
                        {key}
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
                    <div>
                      <input
                        id="waistcoatColor"
                        data-target="waistcoatColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.waistcoatColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="waistcoatColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.waistcoatColor }}
                      ></label>
                    </div>
                    {options.waistcoat &&
                      options.waistcoat.colors &&
                      Object.entries(options.waistcoat.colors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.waistcoatColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : "outline-transparent"
                              } ${
                                value === "#ffffff"
                                  ? "!outline-gray-300"
                                  : "border-transparent"
                              } `}
                              data-value={value}
                              data-target="waistcoatColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
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
                        id="waistcoatButtonColor"
                        data-target="waistcoatButtonColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.shirtButtonColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="waistcoatButtonColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{
                          background: CustomColors.waistcoatButtonColor,
                        }}
                      ></label>
                    </div>
                    {options.waistcoat &&
                      options.waistcoat.buttons &&
                      Object.entries(options.waistcoat.buttons).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-transparent outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.waistcoatButtonColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : ""
                              } ${
                                value === "#ffffff" ? "!outline-gray-300" : ""
                              } `}
                              data-value={value}
                              data-target="waistcoatButtonColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  {options.waistcoat &&
                    options.waistcoat.fabrics &&
                    Object.entries(options.waistcoat.fabrics).map(
                      ([key, value]) => (
                        <button
                          key={key}
                          value={key}
                          data-fabric={value}
                          onClick={() =>
                            handleTexturesChange("waistcoatTexture", value)
                          }
                          className="block py-3 px-4 text-left capitalize  rounded-[8px] bg-[#EBEFF2] text-sm w-full text-[#060605] mt-3"
                        >
                          {key}
                        </button>
                      )
                    )}
                </TabPanel>
              </div>
            </Tabs>
          </div>
        ) : (
          ""
        )}
        {/* waistcoat  */}
        {sidebarValue === "pant" ? (
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
                    <div>
                      <input
                        id="pantsColor"
                        data-target="pantsColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.pantsColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="pantsColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.pantsColor }}
                      ></label>
                    </div>
                    {options.pants &&
                      options.pants.colors &&
                      Object.entries(options.pants.colors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.pantsColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : "outline-transparent"
                              } ${
                                value === "#ffffff"
                                  ? "!outline-gray-300"
                                  : "border-transparent"
                              } `}
                              data-value={value}
                              data-target="pantsColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
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
                        id="pantsButtonColor"
                        data-target="pantsButtonColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.shirtButtonColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="pantsButtonColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.pantsButtonColor }}
                      ></label>
                    </div>
                    {options.pants &&
                      options.pants.buttons &&
                      Object.entries(options.pants.buttons).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-transparent outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.pantsButtonColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : ""
                              } ${
                                value === "#ffffff" ? "!outline-gray-300" : ""
                              } `}
                              data-value={value}
                              data-target="pantsButtonColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
                            ></button>
                          </div>
                        )
                      )}
                  </div>
                </TabPanel>
                <TabPanel>
                  {options.pants &&
                    options.pants.fabrics &&
                    Object.entries(options.pants.fabrics).map(
                      ([key, value]) => (
                        <button
                          key={key}
                          value={key}
                          data-fabric={value}
                          onClick={() =>
                            handleTexturesChange("pantsTexture", value)
                          }
                          className="block py-3 px-4 text-left capitalize  rounded-[8px] bg-[#EBEFF2] text-sm w-full text-[#060605] mt-3"
                        >
                          {key}
                        </button>
                      )
                    )}
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
                    <div>
                      <input
                        id="shoeColor"
                        data-target="shoeColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.shoeColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="shoeColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.shoeColor }}
                      ></label>
                    </div>
                    {options.shoe &&
                      options.shoe.colors &&
                      Object.entries(options.shoe.colors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.shoeColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : "outline-transparent"
                              } ${
                                value === "#ffffff"
                                  ? "!outline-gray-300"
                                  : "border-transparent"
                              } `}
                              data-value={value}
                              data-target="shoeColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
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
                        id="shoeStripeColor"
                        data-target="shoeStripeColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.shoeStripeColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="shoeStripeColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.shoeStripeColor }}
                      ></label>
                    </div>
                    {options.shoe &&
                      options.shoe.strips &&
                      Object.entries(options.shoe.strips).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-transparent outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.shoeStripeColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : ""
                              } ${
                                value === "#ffffff" ? "!outline-gray-300" : ""
                              } `}
                              data-value={value}
                              data-target="shoeStripeColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
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
                        id="shoeSoleColor"
                        data-target="shoeSoleColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.shoeSoleColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="shoeSoleColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.shoeSoleColor }}
                      ></label>
                    </div>
                    {options.shoe &&
                      options.shoe.sole &&
                      Object.entries(options.shoe.sole).map(([key, value]) => (
                        <div key={key}>
                          <button
                            className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-transparent outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                              activeButton.shoeSoleColor === value
                                ? "active-button !outline-[#4da6ff]"
                                : ""
                            } ${
                              value === "#ffffff" ? "!outline-gray-300" : ""
                            } `}
                            data-value={value}
                            data-target="shoeSoleColor"
                            style={{ backgroundColor: value }}
                            onClick={handleFixedColor}
                          ></button>
                        </div>
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  {options.shoe &&
                    options.shoe.pattern &&
                    Object.entries(options.shoe.pattern).map(([key, value]) => (
                      <button
                        key={key}
                        value={key}
                        data-fabric={value}
                        onClick={() =>
                          handleTexturesChange("shoePattern", value)
                        }
                        className="block py-3 px-4 text-left capitalize  rounded-[8px] bg-[#EBEFF2] text-sm w-full text-[#060605] mt-3"
                      >
                        {key}
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
              </TabList>

              <div className="fabric-container overflow-y-auto">
                <TabPanel className="mt-7">
                  <div className="grid grid-cols-5 gap-5">
                    <div>
                      <input
                        id="beltColor"
                        data-target="beltColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.beltColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="beltColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.beltColor }}
                      ></label>
                    </div>
                    {options.beltPocket &&
                      options.beltPocket.colors &&
                      Object.entries(options.beltPocket.colors).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.beltColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : "outline-transparent"
                              } ${
                                value === "#ffffff"
                                  ? "!outline-gray-300"
                                  : "border-transparent"
                              } `}
                              data-value={value}
                              data-target="beltColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
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
                        value={CustomColors.pocketColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="pocketColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.pocketColor }}
                      ></label>
                    </div>
                    {options.beltPocket &&
                      options.beltPocket.pocketSquare &&
                      Object.entries(options.beltPocket.pocketSquare).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-transparent outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.pocketColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : ""
                              } ${
                                value === "#ffffff" ? "!outline-gray-300" : ""
                              } `}
                              data-value={value}
                              data-target="pocketColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
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
                        id="socksColor"
                        data-target="socksColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.socksColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="socksColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.socksColor }}
                      ></label>
                    </div>
                    {options.beltPocket &&
                      options.beltPocket.socks &&
                      Object.entries(options.beltPocket.socks).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-transparent outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.socksColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : ""
                              } ${
                                value === "#ffffff" ? "!outline-gray-300" : ""
                              } `}
                              data-value={value}
                              data-target="socksColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
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
                        id="buckleColor"
                        data-target="buckleColor"
                        className="h-0 w-0 opacity-0 ml-[2px]"
                        value={CustomColors.buckleColor}
                        type="color"
                        onChange={handleCustomColorChnage}
                      />
                      <label
                        htmlFor="buckleColor"
                        className="inline-block h-10 w-10 max-md:h-8 max-md:w-8 rounded-full cursor-pointer"
                        style={{ background: CustomColors.buckleColor }}
                      ></label>
                    </div>
                    {options.beltPocket &&
                      options.beltPocket.buckle &&
                      Object.entries(options.beltPocket.buckle).map(
                        ([key, value]) => (
                          <div key={key}>
                            <button
                              className={`h-10 w-10 max-md:h-8 max-md:w-8 color-option rounded-full outline outline-1 outline-transparent outline-offset-1 duration-200 ease-in-out ml-[2px] ${
                                activeButton.buckleColor === value
                                  ? "active-button !outline-[#4da6ff]"
                                  : ""
                              } ${
                                value === "#ffffff" ? "!outline-gray-300" : ""
                              } `}
                              data-value={value}
                              data-target="buckleColor"
                              style={{ backgroundColor: value }}
                              onClick={handleFixedColor}
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

export default Sidebar