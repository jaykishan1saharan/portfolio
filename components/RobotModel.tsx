"use client";

import { Canvas } from "@react-three/fiber";

import {
    OrbitControls,
    Float,
    Environment,
    useGLTF,
    useAnimations,
} from "@react-three/drei";

import { useEffect, useRef } from "react";

function Robot() {

    const group = useRef<any>(null);

    const { scene, animations } = useGLTF("/models/robot.glb");

    const { actions } = useAnimations(animations, group);

    useEffect(() => {

        if (actions) {

            const firstAction = Object.values(actions)[0];

            if (firstAction) {
                firstAction.play();
            }
        }

    }, [actions]);

    return (
        <primitive
            ref={group}
            object={scene}
            scale={0.7}
            position={[0, -2.2, 0]}
        />
    );
}

export default function RobotModel() {

    return (

        <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>

            <ambientLight intensity={2} />

            <directionalLight
                position={[5, 5, 5]}
                intensity={2}
            />

            <Float
                speed={2}
                rotationIntensity={0.5}
                floatIntensity={1.5}
            >

                <Robot />

            </Float>

            <Environment preset="city" />

            <OrbitControls
                enableZoom={false}
            />

        </Canvas>
    );
}