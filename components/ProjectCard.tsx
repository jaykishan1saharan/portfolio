"use client";

import { useState } from "react";
import { useRef } from "react";

type ProjectProps = {
  project: any;
  number: number;
};

export default function ProjectCard({
  project,
  number,
}: ProjectProps) {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="max-w-7xl mx-auto py-12 px-8 rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-[#060b16] via-[#0b1020] to-[#130d2f] backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.12)] text-white">

      {/* Heading */}
      <p className="text-cyan-400 font-semibold mb-2">
        PROJECT {number.toString().padStart(2, "0")}
      </p>

      <h2 className="text-5xl font-bold mb-6">
        {project.title}
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mt-8">
        {project.tech.map((item: string) => (
          <span
            key={item}
            className="
              px-4
              py-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              text-cyan-300
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex gap-10 mt-10">

        <div>
          <p className="text-cyan-400 text-3xl font-bold">
            5+
          </p>
          <p className="text-gray-400">
            Features
          </p>
        </div>

        <div>
          <p className="text-cyan-400 text-3xl font-bold">
            100%
          </p>
          <p className="text-gray-400">
            Responsive
          </p>
        </div>

        <div>
          <p className="text-cyan-400 text-3xl font-bold">
            Full Stack
          </p>
          <p className="text-gray-400">
            Architecture
          </p>
        </div>

      </div>

      {/* Features */}
      <ul className="grid md:grid-cols-2 gap-4 mt-10">
        {project.features.map((feature: string) => (
          <li
            key={feature}
            className="
              bg-white/5
              border
              border-white/10
              rounded-xl
              px-4
              py-3
            "
          >
            ✓ {feature}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex gap-5 mt-10">

        <a
          href={project.github}
          target="_blank"
          className="
            px-8
            py-3
            rounded-2xl
            bg-cyan-500
            text-black
            font-bold
            hover:scale-105
            transition
          "
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          className="
            px-8
            py-3
            rounded-2xl
            border
            border-cyan-500
            text-cyan-300
            hover:bg-cyan-500/10
          "
        >
          Live Demo
        </a>

      </div>

      {/* Gallery */}
      <div className="mt-14 relative">

        <h3 className="text-2xl font-semibold text-white mb-6">
          Project Screenshots
        </h3>

        {/* LEFT BUTTON */}

        <button
          onClick={() =>
            galleryRef.current?.scrollBy({
              left: -500,
              behavior: "smooth",
            })
          }
          className="
      absolute
      left-2
      top-1/2
      -translate-y-1/2
      z-20
      w-12
      h-12
      rounded-full
      bg-black/70
      text-white
    "
        >
          ❮
        </button>

        {/* RIGHT BUTTON */}

        <button
          onClick={() =>
            galleryRef.current?.scrollBy({
              left: 500,
              behavior: "smooth",
            })
          }
          className="
      absolute
      right-2
      top-1/2
      -translate-y-1/2
      z-20
      w-12
      h-12
      rounded-full
      bg-black/70
      text-white
    "
        >
          ❯
        </button>

        <div ref={galleryRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyan-500/30">

          {project.images.map((image: string) => (

            <div key={image} className="min-w-[450px] h-[260px] rounded-2xl overflow-hidden border border-cyan-500/20 bg-white/5 snap-center hover:scale-[1.02] transition-all duration-300">

              <img
                src={image}
                alt=""
                onClick={() => setSelectedImage(image)}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300" />

            </div>

          ))}

        </div>

      </div>

      {selectedImage && (

        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-10"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt=""
            className="max-w-[90vw] max-h-[90vh] rounded-2xl"
          />

        </div>

      )}

      {selectedImage && (

        <div
          onClick={() =>
            setSelectedImage(null)
          }
          className="
      fixed
      inset-0
      z-[999]
      bg-black/90
      flex
      items-center
      justify-center
    "
        >

          <img
            src={selectedImage}
            alt=""
            className="
        max-w-[90vw]
        max-h-[90vh]
        rounded-2xl
      "
          />

        </div>

      )}

    </section>
  );
}