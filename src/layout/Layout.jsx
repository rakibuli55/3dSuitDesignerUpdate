import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Bg from "../assets/images/bg.svg";
import Preloader from "../components/Preloader";
import ColorProviders from "../provider/ColorProviders";
import CustomizationProvider from "../provider/CustomizationProvider";
import FabricsProvider from "../provider/FabricsProvider";
import ProductProvider from "../provider/ProductProvider";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function Layout() {
  const location = useLocation();

  const isCustomizationPage = location.pathname === "/customize";

  return (
    <Suspense fallback={<Preloader />}>
      <ProductProvider>
        <CustomizationProvider>
          <FabricsProvider>
            <ColorProviders>
              <div className="app-main min-h-screen overflow-x-hidden bg-cover bg-no-repeat bg-center font-cambria relative z-[1]">
                <div
                  className={`${
                    !isCustomizationPage
                      ? "opacity-1 visible duration-500 ease-in-out"
                      : "opacity-0 invisible"
                  }`}
                >
                  <Navbar />
                </div>
                <main>
                  <Outlet />
                </main>
                <div className={`${!isCustomizationPage ? "flex" : "hidden"}`}>
                  <Footer />
                </div>
                <img
                  className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
                  src={Bg}
                  alt=""
                />
              </div>
            </ColorProviders>
          </FabricsProvider>
        </CustomizationProvider>
      </ProductProvider>
    </Suspense>
  );
}
