import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function OrbitPreloader({ onComplete }) {
  const loaderRef = useRef(null);
  const counterRef = useRef(null);
  const heroBgRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const textPaths =
      loaderRef.current.querySelectorAll(
        "svg textPath"
      );

    const startTextLengths = [...textPaths].map((tp) =>
      parseFloat(tp.getAttribute("textLength"))
    );

    const startTextOffsets = [...textPaths].map((tp) =>
      parseFloat(tp.getAttribute("startOffset"))
    );

    const targetTextLengths = [
      4000, 3500, 3250, 3000,
      2500, 2000, 1500, 1250,
    ];

    const orbitRadii = [
      775, 700, 625, 550,
      475, 400, 325, 250,
    ];

    textPaths.forEach((textPath, index) => {
      const animationDelay =
        (textPaths.length - 1 - index) * 0.1;

      const currentRadius = orbitRadii[index];

      const pathLength =
        2 * Math.PI * currentRadius * 3;

      const increase =
        targetTextLengths[index] -
        startTextLengths[index];

      const offsetAdjustment =
        (increase / 2 / pathLength) * 100;

      const targetOffset =
        startTextOffsets[index] -
        offsetAdjustment;

      gsap.to(textPath, {
        attr: {
          textLength: targetTextLengths[index],
          startOffset: targetOffset + "%",
        },
        duration: 1.2,
        delay: animationDelay,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    let loaderRotation = 0;

    function animateRotation() {
  const direction = Math.random() < 0.5 ? 1 : -1;

  loaderRotation += 25 * direction;

  gsap.to(
    loaderRef.current.querySelector("svg"),
    {
      rotation: loaderRotation,
      transformOrigin: "50% 50%",
      duration: 2,
      ease: "power2.inOut",
      onComplete: animateRotation,
    }
  );
}

    animateRotation();

    const count = { value: 0 };

    gsap.to(count, {
      value: 100,
      duration: 4,
      delay: 1,
      ease: "power1.out",
      onUpdate() {
        if (counterRef.current) {
          counterRef.current.textContent =
            Math.floor(count.value);
        }
      },
      onComplete() {
        gsap.to(
          counterRef.current.parentElement,
          {
            opacity: 0,
            duration: 0.5,
            delay: 1,
          }
        );

        setTimeout(() => {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 1.8,
            ease: "power3.inOut",
            onComplete() {
                document.body.style.overflow ="auto";
                if (typeof onComplete === "function") {
                    onComplete();
                }
            },
          });

          gsap.to(heroBgRef.current, {
            scale: 1,
            duration: 2,
          });
        }, 2000);
      },
    });

    const orbitTextElements =
      loaderRef.current.querySelectorAll(
        ".orbit-text"
      );

    gsap.set(orbitTextElements, {
      opacity: 0,
    });

    const reversed = Array.from(
      orbitTextElements
    ).reverse();

    gsap.to(reversed, {
      opacity: 1,
      duration: 0.75,
      stagger: 0.125,
    });

    gsap.to(reversed, {
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      delay: 6,
    });

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

        :root{
          --base-100:#fff;
          --base-200:#d1d9b8;
          --base-300:#0f0f0f;
        }

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:'Inter',sans-serif;
        }

        img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .hero{
          position:relative;
          width:100%;
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          overflow:hidden;
        }

        .hero-bg{
          position:absolute;
          width:100%;
          height:100%;
          transform:scale(1.25);
        }

        .hero-copy{
          z-index:2;
        }
        @keyframes pulseGlow {
  0% {
    transform: scale(0.9);
    opacity: .4;
  }

  50% {
    transform: scale(1.1);
    opacity: .8;
  }

  100% {
    transform: scale(0.9);
    opacity: .4;
  }
}   
        .hero-copy p{
          color:white;
          text-transform:uppercase;
          font-weight:600;
          font-size:2rem;
        }

        .loader {
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background:
    radial-gradient(
      circle at center,
      rgba(96,165,250,.12) 0%,
      #050816 45%,
      #020617 100%
    );

  color: white;

  z-index: 99999;

  overflow: hidden;
}

        .loader svg{
          width:85%;
          height:85%;
          transform-origin:center center;
        }
        .loader::before {
            content: "";

            position: absolute;

            width: 800px;
            height: 800px;

            border-radius: 50%;

            background:
                radial-gradient(
                circle,
                rgba(96,165,250,.18),
                transparent 70%
                );

            filter: blur(80px);

            animation: pulseGlow 4s ease-in-out infinite;
        }

        .loader svg path{
          fill:none;
        }

        .orbit-text {
  fill: rgba(255,255,255,.92);
  font-size: 2.7rem;

  font-weight: 700;

  text-transform: uppercase;

  letter-spacing: 2px;
}

        .counter{
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
        }

        .counter p {
  font-size: 2rem;

  font-weight: 800;

  color: white;

  text-shadow:
    0 0 15px rgba(96,165,250,.5),
    0 0 30px rgba(96,165,250,.3);
}

        @media(max-width:1000px){
          .loader svg{
            width:100%;
            height:100%;
          }

          .orbit-text{
            font-size:2.5rem;
          }
        }
        @media(max-width:768px){
          .orbit-text{
            font-size:1.8rem;
          }
          .counter p {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div
        className="loader"
        ref={loaderRef}
      >
        <svg viewBox="-425 -425 1850 1850">
  <path
    id="loader-orbit-1"
    d="M 500,-275 A 775,775 0 0,1 500,1275 A 775,775 0 0,1 500,-275 A 775,775 0 0,1 500,1275 A 775,775 0 0,1 500,-275 A 775,775 0 0,1 500,1275 A 775,775 0 0,1 499.99,-275"
  />

  <path
    id="loader-orbit-2"
    d="M 500,-200 A 700,700 0 0,1 500,1200 A 700,700 0 0,1 500,-200 A 700,700 0 0,1 500,1200 A 700,700 0 0,1 500,-200 A 700,700 0 0,1 500,1200 A 700,700 0 0,1 499.99,-200"
  />

  <path
    id="loader-orbit-3"
    d="M 500,-125 A 625,625 0 0,1 500,1125 A 625,625 0 0,1 500,-125 A 625,625 0 0,1 500,1125 A 625,625 0 0,1 500,-125 A 625,625 0 0,1 500,1125 A 625,625 0 0,1 499.99,-125"
  />

  <path
    id="loader-orbit-4"
    d="M 500,-50 A 550,550 0 0,1 500,1050 A 550,550 0 0,1 500,-50 A 550,550 0 0,1 500,1050 A 550,550 0 0,1 500,-50 A 550,550 0 0,1 500,1050 A 550,550 0 0,1 499.99,-50"
  />

  <path
    id="loader-orbit-5"
    d="M 500,25 A 475,475 0 0,1 500,975 A 475,475 0 0,1 500,25 A 475,475 0 0,1 500,975 A 475,475 0 0,1 500,25 A 475,475 0 0,1 500,975 A 475,475 0 0,1 499.99,25"
  />

  <path
    id="loader-orbit-6"
    d="M 500,100 A 400,400 0 0,1 500,900 A 400,400 0 0,1 500,100 A 400,400 0 0,1 500,900 A 400,400 0 0,1 500,100 A 400,400 0 0,1 500,900 A 400,400 0 0,1 499.99,100"
  />

  <path
    id="loader-orbit-7"
    d="M 500,175 A 325,325 0 0,1 500,825 A 325,325 0 0,1 500,175 A 325,325 0 0,1 500,825 A 325,325 0 0,1 500,175 A 325,325 0 0,1 500,825 A 325,325 0 0,1 499.99,175"
  />

  <path
    id="loader-orbit-8"
    d="M 500,250 A 250,250 0 0,1 500,750 A 250,250 0 0,1 500,250 A 250,250 0 0,1 500,750 A 250,250 0 0,1 500,250 A 250,250 0 0,1 500,750 A 250,250 0 0,1 499.99,250"
  />

  <text className="orbit-text">
    <textPath href="#loader-orbit-1" startOffset="30%" textLength="300">
      Generative AI
    </textPath>
  </text>

  <text className="orbit-text">
    <textPath href="#loader-orbit-2" startOffset="31%" textLength="280">
      Full Stack
    </textPath>
  </text>

  <text className="orbit-text">
    <textPath href="#loader-orbit-3" startOffset="33%" textLength="240">
      React
    </textPath>
  </text>

  <text className="orbit-text">
    <textPath href="#loader-orbit-4" startOffset="32%" textLength="260">
      Python
    </textPath>
  </text>

  <text className="orbit-text">
    <textPath href="#loader-orbit-5" startOffset="30%" textLength="290">
      Madan KK
    </textPath>
  </text>

  <text className="orbit-text">
    <textPath href="#loader-orbit-6" startOffset="31%" textLength="200">
      Prompting
    </textPath>
  </text>

  <text className="orbit-text">
    <textPath href="#loader-orbit-7" startOffset="33%" textLength="210">
      Designer
    </textPath>
  </text>

  <text className="orbit-text">
    <textPath href="#loader-orbit-8" startOffset="32%" textLength="190">
      Founder
    </textPath>
  </text>
</svg>

        <div className="counter">
          <p ref={counterRef}>0</p>
        </div>
      </div>
    </>
  );
}