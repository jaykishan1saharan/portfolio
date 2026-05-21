"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
    return (
        <div className="relative flex items-center justify-center py-10 bg-transparent overflow-hidden">
            <div className="absolute inset-0 bg-black -z-10" />

            {/* Left Line */}
            <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />

            {/* Center Glow Dot */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
                className="relative mx-4"
            >
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

                {/* Glow */}
                <div className="absolute inset-0 blur-xl bg-cyan-400 opacity-40 rounded-full" />
            </motion.div>

            {/* Right Line */}
            <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-40" />

        </div>
    );
}