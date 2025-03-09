import { useContext, useEffect } from "react";
import { CustomizationContext } from "../context/CustomizationContext";
import gsap from "gsap";
import { ProductContext } from "../context/index";

function ToggleList() {
  const { toggledItems, setToggledItems, totalPrice } =
    useContext(CustomizationContext);
  const {setSelectedProducts } = useContext(ProductContext);

  const handleToggle = (itemName) => {
    setToggledItems((prevItems) => {
      const newItems = prevItems.map((item) => {
        if (item.name === itemName) {
          return { ...item, toggled: !item.toggled };
        }
        return item;
      });

      if (itemName === "jacket") {
        const jacketToggled = newItems.find(
          (item) => item.name === "jacket"
        ).toggled;

        if (!jacketToggled) {
          newItems.find((item) => item.name === "pocketSquare").toggled = false;
        } else {
          newItems.find((item) => item.name === "pocketSquare").toggled = true;
        }
      }

      return newItems;
    });
  };

  useEffect(() => {
    const SeletedItems = toggledItems
      .filter((item) => item.toggled)
      .map((item) => item.name);
    setSelectedProducts(SeletedItems);
  }, [toggledItems, setSelectedProducts]);

  useEffect(() => {
    gsap.fromTo(
      ".toggle-item-wrap",
      { y: 10, filter: "blur(5px)", opacity: 0 },
      {
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        delay: 0.2,
        opacity: 1,
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      ".toggle-item",
      { y: 10, filter: "blur(5px)", opacity: 0 },
      {
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        delay: 0.2,
        opacity: 1,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className="toggle-list pt-2 p-6 bg-white rounded-[12px] w-[240px] max-md:w-[220px] absolute top-[20%] custom-xs:top-auto custom-xs:bottom-[22%] left-[100px] custom-xl:left-[60px] custom-lg:left-[30px] custom-xs:!left-4 toggle-item-wrap max-md:left-6 max-md:p-4 max-md:pt-0 custom-xs:!w-[160px]">
      {toggledItems.map((item, index) => (
        <div
          className="toggle-item flex items-center justify-between mt-4"
          key={index}
        >
          <p className="item-label capitalize text-base text-[#060605]">
            {item.name}
            {/* <span className="ml-1">(${item?.price})</span> */}
          </p>
          <label className="switch relative inline-block w-10 h-5">
            <input
              className="opacity-0 w-0 h-0 toggle-input"
              type="checkbox"
              checked={item.toggled}
              onChange={() => handleToggle(item?.name)}
            />
            <span className="toggle-slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#dcdcdc] rounded-[20px] duration"></span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default ToggleList;
