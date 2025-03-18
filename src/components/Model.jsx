import React, { useContext, useEffect, useRef } from "react";
import { CustomizationContext } from "../context/CustomizationContext";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ColorContext, FabricContext } from "../context/index";

function Model(props) {
  const groupRef = useRef();
  const { toggledItems } = useContext(CustomizationContext);
  const {textures} = useContext(FabricContext);
  const {colors} = useContext(ColorContext);
  const { nodes, materials } = useGLTF("/suitNewV4.gltf");


  useEffect(() => {
    gsap.fromTo(
      groupRef.current.position,
      { y: -2 },
      {
        y: 0,
        duration: 2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      scale={1.1}
      rotation={[0.05, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shirt.geometry}
        material={nodes.Shirt.material.clone()}
        material-color={colors.shirtColor}
        material-map={textures.shirtTexture ? textures.shirtTexture : null}
        position={[0.004, -2.472, 0.191]}
        scale={0.029}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ShirtButton.geometry}
          material={nodes.ShirtButton.material.clone()}
          material-color={colors.shirtButtonColor}
          position={[0, -1, 0]}
        />
        {toggledItems.map((item, index) => {
          if (item.toggled) {
            switch (item.name) {
              case "belt":
                return (
                  <React.Fragment key={`belt-${index}`}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Belt.geometry}
                      material={nodes.Belt.material.clone()}
                      material-color={colors.beltColor}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.BeltMetal.geometry}
                      material={nodes.BeltMetal.material.clone()}
                      material-color={colors.buckleColor}
                    />
                  </React.Fragment>
                );
              case "jacket":
                return (
                  <React.Fragment key={`jacket-${index}`}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Jacket.geometry}
                      material={nodes.Jacket.material.clone()}
                      material-map={textures.jacketTexture || null}
                      material-color={colors.jacketColor}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.JacketButton.geometry}
                      material={nodes.JacketButton.material.clone()}
                      material-color={colors.jacketButtonColor}
                    />
                  </React.Fragment>
                );
              case "pocketSquare":
                return (
                  <mesh
                    key={`pocketSquare-${index}`}
                    castShadow
                    receiveShadow
                    geometry={nodes.PocketSquare.geometry}
                    material={nodes.PocketSquare.material.clone()}
                    material-color={colors.pocketColor}
                  />
                );
              case "tie":
                return (
                  <mesh
                    key={`tie-${index}`}
                    castShadow
                    receiveShadow
                    geometry={nodes.Tie.geometry}
                    material={nodes.Tie.material.clone()}
                    material-color={colors.tieColor}
                    material-map={textures.tieTexture || null}
                  />
                );
              case "tieClip":
                return (
                  <mesh
                    key={`tieClip-${index}`}
                    castShadow
                    receiveShadow
                    geometry={nodes.TieClip.geometry}
                    material={nodes.TieClip.material.clone()}
                    material-color={colors.tieClipColor}
                    position={[-0.651, 151.284, 8.02]}
                    scale={[1.364, 0.183, 0.183]}
                  />
                );
              case "waistcoat":
                return (
                  <React.Fragment key={`waistCoat-${index}`}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Waistcoat.geometry}
                      material={nodes.Waistcoat.material.clone()}
                      material-color={colors.waistcoatColor}
                      material-map={textures.waistcoatTexture || null}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.WaistcoatButton.geometry}
                      material={nodes.WaistcoatButton.material.clone()}
                      material-color={colors.waistcoatButtonColor}
                    />
                  </React.Fragment>
                );
              case "shoe":
                return (
                  <React.Fragment key={`shoe-${index}`}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Shoelaces.geometry}
                      material={nodes.Shoelaces.material.clone()}
                      material-color={colors.shoeStripeColor}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Shoes.geometry}
                      material={nodes.Shoes.material.clone()}
                      material-color={colors.shoeColor}
                      material-map={
                        textures.shoePattern || null
                      }
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.ShoesSole.geometry}
                      material={nodes.ShoesSole.material.clone()}
                      material-color={colors.shoeSoleColor}
                      material-map={
                        textures.shoePattern || null
                      }
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Socks.geometry}
                      material={nodes.Socks.material.clone()}
                    />
                  </React.Fragment>
                );
              case "pant":
                return (
                  <React.Fragment key={`pant-${index}`}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Pants.geometry}
                      material={nodes.Pants.material.clone()}
                      material-color={colors.pantsColor}
                      material-map={
                        textures.pantsTexture ? textures.pantsTexture : null
                      }
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.PantsButton.geometry}
                      material={nodes.PantsButton.material.clone()}
                      material-color={colors.pantsButtonColor}
                    />
                  </React.Fragment>
                );
              default:
                return null;
            }
          }
          return null;
        })}

        
      </mesh>
    </group>
  );
}

export default Model;
