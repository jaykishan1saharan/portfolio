import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
py-20
sm:py-24
lg:py-32
bg-[#050816]
min-h-screen
px-4
"
    >
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <h2 className="
text-4xl
sm:text-5xl
lg:text-6xl
font-bold
text-white
leading-tight
">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Real-world applications I've built using modern technologies.
        </p>
      </div>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          number={index + 1}
        />
      ))}
    </section>
  );
}