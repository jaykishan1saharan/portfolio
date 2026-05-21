"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import SkillModal from "./SkillModal";

const skillsData = [
  {
    name: "HTML",
    icon: "FaHtml5",
    topics: ["Semantic Tags", "Forms", "Structure"],
    description: "Markup language for web pages"
  },
  {
    name: "CSS",
    icon: "FaCss3Alt",
    topics: ["Flexbox", "Grid", "Animations"],
    description: "Styling and responsive layouts"
  },
  {
    name: "C",
    icon: "SiC",
    topics: ["Pointers", "Functions", "Memory"],
    description: "Foundation programming language"
  },
  {
    name: "C++",
    icon: "SiCplusplus",
    topics: ["OOP", "STL", "DSA"],
    description: "Powerful programming language"
  },
  {
    name: "Python",
    icon: "FaPython",
    topics: ["Automation", "AI", "Backend"],
    description: "Versatile modern language"
  },
  {
    name: "Java",
    icon: "FaJava",
    topics: ["OOP", "JDBC", "Swing"],
    description: "Robust object-oriented language"
  },
  {
    name: "MySQL",
    icon: "SiMysql",
    topics: ["Queries", "Database", "Joins"],
    description: "Relational database system"
  },
  {
    name: "React",
    icon: "FaReact",
    topics: ["Hooks", "State", "Props", "Context API"],
    description: "Building dynamic UI with reusable components."
  },
  {
    name: "Next.js",
    icon: "SiNextdotjs",
    topics: ["App Router", "SSR", "SSG"],
    description: "Full-stack React framework."
  },
  {
    name: "JavaScript",
    icon: "SiJavascript",
    topics: ["ES6+", "Async/Await", "Closures"],
    description: "Core language of web."
  },
  {
    name: "Tailwind",
    icon: "SiTailwindcss",
    topics: ["Responsive", "Utility CSS"],
    description: "Modern CSS framework"
  },
  {
    name: "Framer Motion",
    icon: "SiFramer",
    topics: ["Animations", "Transitions"],
    description: "Smooth animations"
  },
  {
    name: "Firebase",
    icon: "SiFirebase",
    topics: ["Auth", "Database"],
    description: "Backend services"
  },
  {
    name: "Node.js",
    icon: "FaNodeJs",
    topics: ["API", "Backend"],
    description: "JavaScript runtime"
  },
  {
    name: "MongoDB",
    icon: "SiMongodb",
    topics: ["Database", "NoSQL"],
    description: "Database system"
  },
  {
    name: "Blender",
    icon: "SiBlender",
    topics: ["3D Modeling", "Rendering", "Animations"],
    description: "3D design and rendering software"
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  return (
    <section id="skills" className="min-h-screen px-10 md:px-20 py-20 bg-black text-white">

      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-cyan-400">Skills</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-10">

        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <SkillCard
              skill={skill}
              onClick={() => setSelectedSkill(skill)}
            />
          </motion.div>
        ))}

      </div>

      <SkillModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />

    </section>
  );
}