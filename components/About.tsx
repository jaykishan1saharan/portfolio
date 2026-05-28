"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative px-6 md:px-16 py-20 overflow-hidden bg-gradient-to-b from-[#020617] to-black text-white">

            {/* BACKGROUND GLOW */}
            <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-purple-500/10 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto">

                {/* SECTION HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        About <span className="rgb-text">Me</span>
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Passionate about building futuristic web experiences with
                        animations, 3D visuals and modern technologies.
                    </p>
                </motion.div>

                {/* HERO ABOUT */}
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >

                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            Turning Ideas Into
                            <span className="text-cyan-400"> Interactive </span>
                            Digital Experiences
                        </h3>

                        <p className="text-gray-300 leading-relaxed text-lg">
                            I enjoy creating modern and immersive web applications
                            with clean UI, smooth animations and futuristic designs.
                            Currently exploring full-stack development, 3D web experiences
                            and AI integrations.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            My goal is to build projects that are not only functional,
                            but also visually engaging and memorable for users.
                        </p>

                        {/* BUTTONS */}
                        <div className="flex gap-5 pt-4">

                            <button className="bg-cyan-500 px-6 py-3 rounded-xl font-medium shadow-lg shadow-cyan-500/30 hover:scale-105 transition">
                                Download CV
                            </button>

                            <button className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition">
                                Contact Me
                            </button>

                        </div>

                    </motion.div>

                    {/* RIGHT SIDE PROFILE CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >

                        <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-3xl"></div>

                        <div className="relative bg-white/5 border border-cyan-400/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">

                            <motion.img
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 60px rgba(34,211,238,0.6)"
                                }}
                                src="/profile.jpg"
                                alt="Profile"
                                className="w-52 h-52 mx-auto object-contain rounded-full border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.5)]"
                            />

                            <div className="text-center mt-6">

                                <h3 className="text-2xl font-bold">
                                    Jaykishan Saharan
                                </h3>

                                <p className="text-cyan-400 mt-2">
                                    Full Stack Developer
                                </p>

                                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                                    Building immersive digital experiences with modern
                                    web technologies and futuristic UI/UX.
                                </p>

                            </div>

                            {/* MINI STATS */}
                            <div className="grid grid-cols-2 gap-5 mt-8">

                                <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
                                    <h4 className="text-2xl font-bold text-cyan-400">
                                        10+
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        Projects
                                    </p>
                                </div>

                                <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
                                    <h4 className="text-2xl font-bold text-cyan-400">
                                        5+
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        Technologies
                                    </p>
                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

                {/* INFO + TIMELINE */}
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 mt-28 items-start">

                    {/* INFO CARDS */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.2 }}
                        className="grid grid-cols-2 gap-5"
                    >

                        {[
                            {
                                title: "🚀 Coding Journey",
                                text: "Started with basic web development and gradually explored React, Next.js, animations and modern UI/UX design.",
                                color: "cyan",
                            },
                            {
                                title: "⚡ Current Learning",
                                text: "Exploring full-stack development, Three.js, AI integrations and advanced frontend animations.",
                                color: "purple",
                            },
                            {
                                title: "🌌 Goals",
                                text: "My goal is to create immersive digital experiences that combine technology, creativity and aesthetics.",
                                color: "pink",
                            },
                            {
                                title: "🎮 Fun Facts",
                                text: "I enjoy futuristic UI design, gaming aesthetics, music while coding and experimenting with new tech.",
                                color: "blue",
                            },
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                }}
                                className={`bg-white/5 border border-${card.color}-400/20 backdrop-blur-xl rounded-3xl p-6 shadow-lg shadow-${card.color}-500/10 min-h-[260px]`}
                            >
                                <h3 className={`text-xl font-bold text-${card.color}-400 mb-4`}>
                                    {card.title}
                                </h3>

                                <p className="text-gray-300 leading-8">
                                    {card.text}
                                </p>
                            </motion.div>
                        ))}

                    </motion.div>

                    {/* TIMELINE */}
                    <div className="relative">

                        {/* TITLE */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-bold">
                                My <span className="text-cyan-400">Journey</span>
                            </h2>

                            <p className="text-gray-400 mt-3">
                                A timeline of my learning and development journey.
                            </p>
                        </motion.div>

                        {/* CENTER LINE */}
                        <div className="absolute left-1/2 top-32 bottom-0 w-[4px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"></div>

                        <div className="space-y-16 relative">

                            {[
                                {
                                    year: "2024",
                                    title: "Started Coding",
                                    desc: "Began learning web development fundamentals and explored programming basics.",
                                    color: "cyan",
                                },
                                {
                                    year: "2025",
                                    title: "Learning React & UI/UX",
                                    desc: "Started building modern interfaces with React, animations and futuristic UI design.",
                                    color: "purple",
                                },
                                {
                                    year: "2025",
                                    title: "Built Modern Projects",
                                    desc: "Developed interactive projects with animations, glassmorphism and 3D integrations.",
                                    color: "pink",
                                },
                                {
                                    year: "2026",
                                    title: "Exploring AI & 3D",
                                    desc: "Currently experimenting with AI tools, Three.js and immersive web experiences.",
                                    color: "blue",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative flex ${index % 2 === 0
                                        ? "justify-start pr-10"
                                        : "justify-end pl-10"
                                        }`}
                                >

                                    <motion.div
                                        whileHover={{
                                            scale: 1.03,
                                            y: -5,
                                        }}
                                        className={`w-[340px] bg-white/5 border border-${item.color}-400/20 backdrop-blur-xl rounded-3xl p-6 shadow-lg shadow-${item.color}-500/10`}
                                    >
                                        <h3 className={`text-${item.color}-400 text-xl font-bold`}>
                                            {item.year} — {item.title}
                                        </h3>

                                        <p className="text-gray-300 mt-3 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </motion.div>

                                    {/* DOT */}
                                    <div
                                        className={`absolute left-1/2 top-8 -translate-x-1/2 w-7 h-7 rounded-full bg-${item.color}-400 shadow-[0_0_30px]`}
                                    ></div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

                {/* TECH STACK */}
                <div className="mt-28 max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            Tech <span className="text-cyan-400">Stack</span>
                        </h2>

                        <p className="text-gray-400 mt-4">
                            Technologies and tools I use to build futuristic digital experiences.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">

                        {[
                            {
                                title: "Frontend",
                                color: "cyan",
                                techs: ["React", "Next.js", "Tailwind", "Framer Motion"],
                            },
                            {
                                title: "Backend",
                                color: "purple",
                                techs: ["Node.js", "Firebase", "MongoDB", "Express"],
                            },
                            {
                                title: "Languages",
                                color: "pink",
                                techs: ["JavaScript", "Java", "Python", "C++"],
                            },
                        ].map((stack, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                }}
                                className={`bg-black/40 backdrop-blur-xl rounded-3xl p-6 transition-all duration-500
                                    ${stack.color === "cyan"
                                        ? "border border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
                                        : stack.color === "purple"
                                            ? "border border-purple-400/30 hover:shadow-[0_0_40px_rgba(192,132,252,0.35)]"
                                            : "border border-pink-400/30 hover:shadow-[0_0_40px_rgba(244,114,182,0.35)]"
                                    }`}
                            >
                                <h3 className={`text-xl font-bold text-${stack.color}-400 mb-6`}>
                                    {stack.title}
                                </h3>

                                <div className="flex flex-wrap gap-3">

                                    {stack.techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className={` px-4 py-2 rounded-full transition-all duration-300 cursor-pointer
                                                ${stack.color === "cyan"
                                                    ? "bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                                                    : stack.color === "purple"
                                                        ? "bg-purple-500/10 border border-purple-400/40 text-purple-300 hover:bg-cyan-400 hover:border-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                                                        : "bg-pink-500/10 border border-pink-400/40 text-pink-300 hover:bg-cyan-400 hover:border-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                                                } `}
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                </div>
                            </motion.div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}