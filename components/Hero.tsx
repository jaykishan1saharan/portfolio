"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import ThreeModel from "./ThreeModel";
import { FaReact, FaJava, FaDocker, FaNodeJs, FaPython } from "react-icons/fa";
import { useEffect } from "react";
import ParticlesBackground from "./ParticlesBackground";

import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiBlender, SiMysql, SiJavascript, SiFigma, SiThreedotjs, SiCplusplus, } from "react-icons/si";


export default function Hero() {

    useEffect(() => {
        const glow = document.getElementById("cursor-glow");

        const moveGlow = (e: MouseEvent) => {
            if (glow) {
                glow.style.left = `${e.clientX}px`;
                glow.style.top = `${e.clientY}px`;
            }
        };

        window.addEventListener("mousemove", moveGlow);

        return () => {
            window.removeEventListener("mousemove", moveGlow);
        };
    }, []);

    return (
        <section
  id="home"
  className="
  relative
  min-h-screen
  flex
  flex-col
  lg:flex-row
  items-center
  justify-between
  px-6
  md:px-10
  lg:px-20
  overflow-hidden
  bg-gradient-to-br
  from-black
  via-[#081120]
  to-[#142850]
  "
>
            <ParticlesBackground />

            <div id="cursor-glow" className="cursor-glow"></div>

            {/* 🌟 LIGHT SPOT (ADD HERE) */}
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full"></div>
            {/* LEFT SIDE */}
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="
max-w-[620px]
z-20
text-center
lg:text-left
mt-32
lg:mt-10
"
            >

                <p className="text-green-400 text-lg md:text-xl mb-2 flex items-center gap-2">
                    <span className="wave text-xl md:text-2xl">👋</span>
                    Hello, I'm
                </p>

                {/* RGB NAME */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold rgb-text leading-tight">
                    Jaykishan Saharan
                </h1>

                {/* TYPING ROLE */}
                <h2 className="text-cyan-400 text-xl md:text-2xl mt-3">
                    <Typewriter
                        words={[
                            "Full Stack Developer",
                            "React Developer",
                            "Tech Enthusiast",
                        ]}
                        loop={true}
                        cursor
                    />
                </h2>

                <p className="mt-4 text-gray-400">
                    I build modern and interactive web applications with great UI/UX.
                </p>

                {/* BUTTONS */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                    <motion.button
                        whileHover={{
                            scale: 1.08,
                            y: -5,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-cyan-500 px-5 py-2 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/80 transition"
                    >
                        Download CV
                    </motion.button>

                    <motion.button
                        whileHover={{
                            scale: 1.08,
                            y: -5,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
                    >
                        Contact
                    </motion.button>

                </div>

                {/* SOCIAL ICONS */}
                <div className="flex gap-6 mt-6 text-2xl justify-center lg:justify-start flex-wrap">

                    <FaGithub className="text-white hover:text-gray-300 hover:scale-125 transition cursor-pointer" />
                    <FaLinkedin className="text-[#0A66C2] hover:scale-125 transition cursor-pointer" />
                    <FaTwitter className="text-[#1DA1F2] hover:scale-125 transition cursor-pointer" />
                    <FaInstagram className="text-pink-500 hover:scale-125 transition cursor-pointer" />
                    <FaFacebook className="text-[#1877F2] hover:scale-125 transition cursor-pointer" />

                </div>

                {/* STATS */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10">

                    <motion.div
                        whileHover={{
                            y: -8,
                            scale: 1.05,
                        }}
                        className="bg-white/5 border border-cyan-400/20 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg shadow-cyan-500/10"
                    >
                        <h2 className="text-cyan-400 text-3xl font-bold">10+</h2>
                        <p className="text-gray-300 text-sm mt-1">Projects</p>
                    </motion.div>

                    <motion.div
                        whileHover={{
                            y: -8,
                            scale: 1.05,
                        }}
                        className="bg-white/5 border border-cyan-400/20 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg shadow-cyan-500/10"
                    >
                        <h2 className="text-cyan-400 text-3xl font-bold">5+</h2>
                        <p className="text-gray-300 text-sm mt-1">Technologies</p>
                    </motion.div>

                </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <div
className="
relative
w-full
max-w-[620px]
h-[620px]
flex
items-center
justify-center
z-20
mt-16
lg:mt-20
"
>

                {/* GLOW */}
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                    }}
                    className="absolute w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
                    style={{
                        background:
                            "conic-gradient(from 0deg, #00ffff, #8b5cf6, #ff00ff, #00ffff)",
                    }}
                ></motion.div>

                {/* INNER ORBIT */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 18,
                        ease: "linear",
                    }}
                    className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] lg:w-[340px] lg:h-[340px] rounded-full border border-cyan-400/30 border-dashed shadow-[0_0_40px_rgba(34,211,238,0.25)]"
                >

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 text-cyan-400 text-4xl">
                        <FaReact />
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-blue-500 text-4xl">
                        <SiCplusplus />
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 text-cyan-300 text-4xl">
                        <SiTailwindcss />
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-300 text-4xl">
                        <FaDocker />
                    </div>

                </motion.div>

                {/* MIDDLE ORBIT */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 28,
                        ease: "linear",
                    }}
                    className="absolute w-[240px] h-[240px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border border-purple-400/30 border-dashed shadow-[0_0_50px_rgba(168,85,247,0.25)]"
                >

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 text-yellow-400 text-4xl">
                        <FaPython />
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-orange-400 text-4xl">
                        <FaJava />
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white text-4xl">
                        <SiNextdotjs />
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 text-green-500 text-4xl">
                        <SiMongodb />
                    </div>

                </motion.div>

                {/* OUTER ORBIT */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear",
                    }}
                    className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] lg:w-[620px] lg:h-[620px] rounded-full border border-pink-400/30 border-dashed shadow-[0_0_60px_rgba(236,72,153,0.25)]"
                >

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 text-yellow-300 text-4xl">
                        <SiJavascript />
                    </div>

                    <div className="absolute top-20 right-10 text-orange-500 text-4xl">
                        <SiBlender />
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl">
                        <FaGithub />
                    </div>

                    <div className="absolute bottom-20 right-10 text-green-500 text-4xl">
                        <SiMongodb />
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-pink-400 text-4xl">
                        <SiFigma />
                    </div>

                    <div className="absolute bottom-20 left-10 text-cyan-400 text-4xl">
                        <FaReact />
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 text-yellow-400 text-4xl">
                        <FaNodeJs />
                    </div>

                    <div className="absolute top-20 left-10 text-cyan-300 text-4xl">
                        <SiFirebase />
                    </div>

                </motion.div>

                {/* INNER LABEL */}
                <div className="absolute top-[125px] left-1/2 -translate-x-1/2 text-center z-20">
                    <p className="text-cyan-400 text-sm font-bold tracking-widest">
                        1900 - 1950
                    </p>
                </div>

                {/* MIDDLE LABEL */}
                <div className="absolute top-[45px] left-1/2 -translate-x-1/2 text-center z-20">
                    <p className="text-purple-400 text-sm font-bold tracking-widest">
                        1950 - 2000
                    </p>
                </div>

                {/* OUTER LABEL */}
                <div className="absolute top-[-18px] left-1/2 -translate-x-1/2 text-center z-20">
                    <p className="text-pink-400 text-sm font-bold tracking-widest">
                        2000 - NOW
                    </p>
                </div>

                {/* 3D MODEL */}
                <ThreeModel />

                {/* FLOATING ICONS */}


                {/* FLOATING CARD */}
                <div className="absolute bottom-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm">
                    🚀 Available for Work
                </div>
            </div>

            {/* SCROLL INDICATOR */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
                ↓ Scroll
            </div>
        </section>
    );
}