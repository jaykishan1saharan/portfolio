"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import * as Icons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

export default function SkillCard({ skill, onClick }: any) {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const Icon =
        (Icons as any)[skill.icon] || (SiIcons as any)[skill.icon];

    function handleMouseMove(e: any) {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientY - rect.top;
        const y = e.clientX - rect.left;

        // 🔥 stronger tilt effect
        const rotateX = -(x - rect.height / 2) / 5;
        const rotateY = (y - rect.width / 2) / 5;

        setRotate({ x: rotateX, y: rotateY });
    }

    function reset() {
        setRotate({ x: 0, y: 0 });
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            onClick={onClick}
            style={{
                transform: `
                perspective(800px)
                rotateX(${rotate.x}deg)
                rotateY(${rotate.y}deg)
                scale(1.05)
            `,
                transition: "transform 0.08s ease-out",
                boxShadow: `${rotate.y * 3}px ${rotate.x * 3}px 30px rgba(0,255,255,0.25)`
            }}
            className="cursor-pointer p-6 rounded-2xl bg-white/3 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400 hover:shadow-cyan-500/30 hover:shadow-xl w-[180px] h-[180px] flex flex-col items-center"
        >
            <motion.div whileHover={{ scale: 1.1 }}>
                <Icon className="text-4xl text-cyan-400 mb-3" />
            </motion.div>

            <p className="text-white">{skill.name}</p>
        </div>
    );
}