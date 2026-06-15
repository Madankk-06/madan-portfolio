import Particles from "react-tsparticles";

export default function ParticleBackground() {
  return (
    <Particles
      id="particles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 40,
          },

          color: {
            value: "#60A5FA",
          },

          links: {
            enable: true,
            distance: 150,
            color: "#60A5FA",
            opacity: 0.15,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: 2,
          },
        },

        background: {
          color: "#0C0C0C",
        },
      }}
    />
  );
}