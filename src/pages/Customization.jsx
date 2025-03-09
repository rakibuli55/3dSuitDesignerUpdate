import { Environment, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { Suspense, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import EditOptions from "../components/EditOptions";
import Model from "../components/Model";
import Sidebar from "../components/Sidebar";
import ToggleList from "../components/ToggleList";
import Button from "../components/button/Button";
import { CustomizationContext } from "../context/CustomizationContext";

function Loader() {
  const { progress } = useProgress();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80">
      <p className="text-xl font-semibold text-gray-700">
        {Math.round(progress)}%
      </p>
    </div>
  );
}

function Customization() {
  const {totalPrice} = useContext(CustomizationContext);

  useEffect(() => {
    gsap.fromTo(
      '.donate-btn',
      { y: 10, filter: "blur(5px)", opacity:0 },
      { y: 0, filter: "blur(0px)", duration: 1, delay:0.2,  opacity:1, stagger:0.1 }
    )
  }, [])
  return (
    <div className="min-h-screen">
      <div className="min-h-full">
          <Suspense fallback={<Loader />}>
          <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 4, 5]} intensity={5} />
                <directionalLight position={[-2, -4, -5]} intensity={4} />
                <hemisphereLight
                  skyColor={"#ffffff"}
                  groundColor={"#888888"}
                  intensity={0.6}
                />
                <Model />
                <Environment preset="city" />
                <OrbitControls
                  enablePan={false}
                  enableZoom={true}
                  enableRotate={true}
                />
            </Canvas>
          </Suspense>
      </div>
      {/* edit opttions  */}
      <EditOptions />
      {/* toggleList  */}
      <ToggleList />
      {/* sidebar  */}
      <Sidebar />
      <Link to={'/checkout'} className="donate-btn absolute bottom-6 left-1/2 font-semibold translate-x-[-50%] cursor-pointer">
        <Button type="small" text="Proceed to Checkout" />
      </Link>
      <div className="absolute bottom-[100px] left-10 custom-xs:left-5 custom-xs:bottom-[120px] py-2 px-4 custom-xs:px-2 custom-xs:py-1 bg-white rounded-[8px]">
          <p className="text-base font-semibold custom-xs:text-sm">
            <span>Total:</span>
            <span className="ml-1 text-[18px] custom-xs:text-base">${totalPrice}</span>
          </p>
      </div>
    </div>
  );
}

export default Customization;
