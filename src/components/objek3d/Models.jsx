
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/tailors_scissors.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="353ba5108f494617a6e9a40ef4e3da64fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="1_high"
                  position={[28.666, 24.019, 0.008]}
                  rotation={[-Math.PI / 2, -0.001, 0]}
                  scale={100}>
                  <mesh
                    name="1_high__0"
                    castShadow
                    receiveShadow
                    geometry={nodes['1_high__0'].geometry}
                    material={materials['Scene_-_Root']}
                  />
                </group>
                <group
                  name="2_high"
                  position={[28.666, 24.019, 0.008]}
                  rotation={[-Math.PI / 2, 0.001, 0]}
                  scale={100}>
                  <mesh
                    name="2_high__0"
                    castShadow
                    receiveShadow
                    geometry={nodes['2_high__0'].geometry}
                    material={materials['Scene_-_Root']}
                  />
                </group>
                <group
                  name="3_high"
                  position={[28.666, 24.019, 0.008]}
                  rotation={[-Math.PI / 2, 0.001, 0]}
                  scale={100}>
                  <mesh
                    name="3_high__0"
                    castShadow
                    receiveShadow
                    geometry={nodes['3_high__0'].geometry}
                    material={materials['Scene_-_Root']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tailors_scissors.glb')
