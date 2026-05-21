"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },

        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
            },
          },

          color: {
            value: "#22d3ee",
          },

          size: {
            value: { min: 1, max: 3 },
          },

          opacity: {
            value: 0.18,
          },

          move: {
            enable: true,
            speed: 0.6,
          },

          links: {
            enable: true,
            color: "#22d3ee",
            distance: 140,
            opacity: 0.08,
            width: 1,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.2,
              },
            },
          },
        },
      }}
    />
  );
}