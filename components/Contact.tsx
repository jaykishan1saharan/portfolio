"use client";

import { motion } from "framer-motion";
import RobotModel from "./RobotModel";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen relative flex items-center justify-center px-6 py-24 overflow-hidden bg-[#020617]"
        >

            {/* BACKGROUND GLOW */}
            <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full top-20 left-20"></div>

            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center z-10">

                {/* LEFT SIDE */}
                <div>

                    <h2 className="text-6xl font-bold text-white leading-tight">
                        Let’s Build Something{" "}
                        <span className="text-cyan-400">
                            Amazing
                        </span>
                    </h2>

                    <p className="text-gray-400 mt-8 text-lg leading-relaxed max-w-xl">
                        Have a project idea, collaboration, or just want to say hello?
                        Send me a message and let’s create futuristic digital experiences together.
                    </p>

                    {/* INFO */}
                    <div className="mt-10 space-y-6">

                        <div className="flex items-center gap-4">

                            <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-400 flex items-center justify-center text-cyan-400 text-2xl">
                                📧
                            </div>

                            <div>
                                <p className="text-gray-400 text-sm">
                                    Email
                                </p>

                                <p className="text-white text-lg">
                                    jaikishansaharan@gmail.com
                                </p>
                            </div>

                        </div>

                        <div className="flex items-center gap-4">

                            <div className="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-400 flex items-center justify-center text-purple-400 text-2xl">
                                📍
                            </div>

                            <div>
                                <p className="text-gray-400 text-sm">
                                    Location
                                </p>

                                <p className="text-white text-lg">
                                    India
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="relative flex items-center justify-center">

                    {/* MAIN CARD */}
                    <div className="relative w-[700px] h-[600px] rounded-[35px] border border-cyan-500/20 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.15)]">

                        {/* GIRL MESSAGE */}

                        <motion.div
                            className="absolute top-10 left-6 z-20"
                            animate={{
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <div className=" relative px-6 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-pink-400/40 shadow-[0_0_35px_rgba(236,72,153,0.35)] text-white text-sm leading-relaxed max-w-[260px] animate-pulse">
                                Oye TinCan! 👀 <br />
                                Kaam kar na dhang se,<br />
                                warna scrap kar dungi! 😤

                                {/* bubble tail */}
                                <div className=" absolute -bottom-7 left-25 w-6 h-6 rotate-45 bg-white/5 border-r border-b border-pink-400/40 backdrop-blur-xl" />
                            </div>
                        </motion.div>

                        {/* GIRL IMAGE */}
                        <img
                            src="/girl.png"
                            alt="girl"
                            className="absolute left-6 bottom-28 h-[300px] w-[300px] z-20 animate-float"
                        />

                        {/* ROBOT MESSAGE */}

                        <motion.div
                            className="absolute top-8 right-6 z-20"
                            animate={{
                                y: [0, -8, 0]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <div className=" relative px-6 py-4 rounded-full bg-cyan-400/5 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_35px_rgba(34,211,238,0.35)] text-white text-sm leading-relaxed max-w-[240px] animate-pulse">
                                Hey Human! 👋 <br />
                                Choose an option <br />
                                below to contact me!

                                {/* bubble tail */}

                                <div className=" absolute -bottom-7 right-20 w-6 h-6 rotate-65 bg-cyan-400/5 border-r border-b border-cyan-400/40 backdrop-blur-xl" />
                            </div>
                        </motion.div>

                        {/* ROBOT PLACEHOLDER */}
                        <div className="absolute right-0 top-0 w-[420px] h-[420px] flex items-center justify-center">

                            <div className="w-[450px] h-[400px]">
                                <div
                                    className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
                                <motion.div
                                    className="absolute top-101 right-30 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 backdrop-blur-xl border border-green-400/30 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                                    animate={{
                                        opacity: [0.7, 1, 0.7],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    <motion.span
                                        className="w-3 h-3 rounded-full bg-green-400"
                                        animate={{
                                            scale: [1, 1.4, 1],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                        }}
                                    />
                                    <span
                                        className="text-green-400 text-sm font-medium"
                                    >
                                        AI Assistant Online
                                    </span>

                                </motion.div>
                                <RobotModel />
                            </div>

                        </div>

                        {/* BUTTON GLOW */}

                        <div
                            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-80 h-24 rounded-full bg-cyan-500/10 blur-3xl animate-pulse z-10"
                        />

                        {/* FLOATING PARTICLES */}

                        <motion.div
                            className="absolute top-20 left-20 text-cyan-400 opacity-70"
                            animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 360] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            ✦
                        </motion.div>

                        <motion.div
                            className="absolute top-52 right-16 text-pink-400 opacity-70"
                            animate={{ y: [0, -15, 0], rotate: [0, 360] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            ◉
                        </motion.div>

                        <motion.div
                            className="absolute bottom-48 left-12 text-green-400 opacity-70"
                            animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        >
                            ✧
                        </motion.div>

                        <motion.div
                            className="absolute bottom-56 right-10 text-cyan-300 opacity-70"
                            animate={{ y: [0, -25, 0], rotate: [0, -360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        >
                            ⬢
                        </motion.div>

                        <motion.div
                            className="absolute top-16 left-32 text-cyan-300 opacity-70"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            ✦
                        </motion.div>

                        <motion.div
                            className="absolute top-52 right-32 text-pink-300 opacity-60"
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                        >
                            ◉
                        </motion.div>

                        <motion.div
                            className="absolute bottom-60 left-12 text-green-300 opacity-70"
                            animate={{ y: [0, -18, 0] }}
                            transition={{ duration: 7, repeat: Infinity }}
                        >
                            ❖
                        </motion.div>

                        <motion.div
                            className="absolute top-72 right-20 text-cyan-300 opacity-60"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 10, repeat: Infinity }}
                        >
                            ⬢
                        </motion.div>

                        {/* BUTTONS */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6 z-30">

                            {/* CALL BUTTON */}
                            <a
                                href="tel:+919881900876"
                                className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] active:scale-95"
                            >
                                📞 Call Me
                            </a>

                            {/* WHATSAPP BUTTON */}
                            <a
                                href="https://wa.me/919881900876?text=Hi%20Jaykishan,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-2xl bg-green-500 text-white font-bold transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,197,94,0.8)] active:scale-95"
                            >
                                💬 WhatsApp
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}