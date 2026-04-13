import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: { repulse: { distance: 80, duration: 0.4 } },
        },
        particles: {
          color: { value: ["#D4AF37", "#F5D76E", "#ffffff", "#8B0000"] },
          links: {
            color: "#D4AF37",
            distance: 120,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: { density: { enable: true, area: 900 }, value: 60 },
          opacity: { value: { min: 0.1, max: 0.5 } },
          shape: { type: ["circle", "star"] },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
