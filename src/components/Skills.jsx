import FadeInSection from "./FadeInSection";
import LogoLoop from "./LogoLoop";
import "./SkillCube.css";

// Inline SVG components representing the 10 logos from the React Bits LogoLoop reference demo
const ReactLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="56" height="56">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NextjsLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="56" height="56">
    <circle cx="90" cy="90" r="90" fill="white"/>
    <path d="M149.508 157.52L69.142 54H54v72h14.4V67.07l79.408 101.88a90.004 90.004 0 001.7-11.43z" fill="black"/>
    <rect x="115.2" y="54" width="14.4" height="72" fill="black"/>
  </svg>
);

const TypeScriptLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="56" height="56">
    <rect width="100" height="100" fill="#3178c6" rx="8"/>
    <text x="90" y="82" fill="white" fontSize="48" fontFamily="sans-serif" fontWeight="bold" textAnchor="end">TS</text>
  </svg>
);

const TailwindLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 142" width="56" height="56">
    <path d="M124 0C78.4 0 49.6 22.8 37.6 68.4c18-22.8 39.2-30.8 63.6-24 13.9 3.9 23.9 14.1 34.9 25.3 17.9 18.2 38.6 39.3 87.9 39.3 45.6 0 74.4-22.8 86.4-68.4-18 22.8-39.2 30.8-63.6 24-13.9-3.9-23.9-14.1-34.9-25.3C194 21.1 173.3 0 124 0zM37.6 68.4c-12 45.6 16.8 68.4 62.4 68.4 45.6 0 74.4-22.8 86.4-68.4-18 22.8-39.2 30.8-63.6 24-13.9-3.9-23.9-14.1-34.9-25.3C70 48.9 49.3 28 0 28c45.6 0 74.4 22.8 86.4 68.4-18-22.8-39.2-30.8-63.6-24-13.9 3.9-23.9 14.1-34.9 25.3C-10 115.9-30.7 137 37.6 68.4z" fill="#38bdf8"/>
  </svg>
);

const VercelLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.5 100" width="56" height="56">
    <path d="M57.75 0L115.5 100H0L57.75 0Z" fill="white"/>
  </svg>
);

const GitHubLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="56" height="56" fill="white">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const DockerLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="56" height="56">
    <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V9.006a.185.185 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.888c0 .102.083.185.185.185M11.261 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.888c0 .102.083.185.185.185M11.261 8.402h2.119a.186.186 0 00.186-.186V6.328a.185.185 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.888c0 .102.083.186.185.186M8.539 11.078h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.539a.186.186 0 00-.186.186v1.888c0 .102.084.185.186.185M8.539 8.402h2.119a.185.185 0 00.185-.186V6.328a.185.185 0 00-.185-.186H8.539a.186.186 0 00-.186.186v1.888c0 .102.084.186.186.186M5.817 11.078h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.817a.185.185 0 00-.185.186v1.888c0 .102.083.185.185.185M2.93 11.078h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.93a.185.185 0 00-.185.186v1.888c0 .102.083.185.185.185M22.047 11.834c-.161-.264-.473-.396-.757-.428-.426-.048-1.503-.048-2.614-.048-.051 0-.101-.001-.151-.002a24.28 24.28 0 01-1.373-.04c-.389-.028-.863-.075-1.282-.249a2.535 2.535 0 01-.84-.575 3.328 3.328 0 01-.649-.968c-.066-.178-.1-.362-.1-.548v-.15c0-.1.083-.186.185-.186h2.119c.102 0 .185-.084.185-.186V6.328a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.186v1.888c0 .102-.083.186-.185.186H11.26a.185.185 0 00-.185.186v1.888c0 .102.083.185.185.185H8.539a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185H2.93c-.102 0-.185-.083-.185-.185V9.006a.185.185 0 00.185-.186h2.119c.102 0 .185-.084.185-.186V6.745c0-.102-.083-.185-.185-.185H2.93c-.102 0-.185.083-.185.185v3.428H1.67c-.035 0-.083.003-.122.015-.098.03-.183.111-.225.215-.224.551-.318 1.156-.318 1.838 0 1.258.337 2.378 1.002 3.328.665.95 1.623 1.663 2.846 2.117 1.223.454 2.684.681 4.341.681h.834c.148-.008.286-.062.391-.15a.555.555 0 00.174-.42c0-.493-.053-.984-.158-1.464-.131-.599-.395-1.168-.788-1.666-.37-.468-.838-.853-1.378-1.134-.539-.281-1.127-.428-1.745-.436-.185 0-.319-.153-.306-.338.01-.137.042-.275.093-.41a2.128 2.128 0 011.085-1.189c.307-.156.643-.242.986-.254.498-.018.995.059 1.467.228 1.05.375 1.956 1.036 2.64 1.926.685.89 1.042 1.988 1.042 3.125a.473.473 0 00.474.475h5.111a.474.474 0 00.474-.475c0-1.895-.494-3.743-1.428-5.342a10.87 10.87 0 00-3.902-3.84c-.158-.093-.16-.317-.008-.415.115-.074.24-.13.372-.167a4.344 4.344 0 011.961.026c.725.183 1.393.535 1.956 1.033.564.498.986 1.132 1.236 1.849.25.717.33 1.482.233 2.238-.024.185.109.349.294.362.158.01.314-.022.454-.093a3.528 3.528 0 001.62-1.921c.21-.572.298-1.183.259-1.792" fill="#2496ed"/>
  </svg>
);

const PrismaLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="56" height="56">
    <path d="M50 10L84.6 30v40L50 90L15.4 70v-40Z" fill="white"/>
  </svg>
);

const SupabaseLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="56" height="56">
    <path d="M21.362 10.408l-9.05-9.05a1.272 1.272 0 0 0-1.802 0l-9.05 9.05c-.498.498-.498 1.304 0 1.802l9.05 9.05c.498.498 1.304.498 1.802 0l9.05-9.05a1.274 1.274 0 0 0 0-1.802z" fill="#3ecf8e"/>
  </svg>
);

const StripeLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="56" height="56">
    <text x="50" y="70" fill="#635bff" fontSize="75" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">S</text>
  </svg>
);

// Map standard logos list to display in scrolling marquee rows
const demoLogos = [
  { node: <ReactLogo />, title: "React", href: "https://react.dev" },
  { node: <NextjsLogo />, title: "Next.js", href: "https://nextjs.org" },
  { node: <TypeScriptLogo />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <TailwindLogo />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <VercelLogo />, title: "Vercel", href: "https://vercel.com" },
  { node: <GitHubLogo />, title: "GitHub", href: "https://github.com" },
  { node: <DockerLogo />, title: "Docker", href: "https://www.docker.com" },
  { node: <PrismaLogo />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SupabaseLogo />, title: "Supabase", href: "https://supabase.com" },
  { node: <StripeLogo />, title: "Stripe", href: "https://stripe.com" }
];

export default function Skills() {
  // Split demo logos into two rows
  const midPoint = Math.ceil(demoLogos.length / 2);
  const row1 = demoLogos.slice(0, midPoint);
  const row2 = demoLogos.slice(midPoint);

  return (
    <FadeInSection>
      <section id="stacks" className="skills-section">
        <h2 className="section-title">
          STACKS
        </h2>

        <div className="skills-marquee-container" style={{ margin: "4rem auto 0" }}>
          {/* Row 1: Scrolling Left */}
          <LogoLoop 
            logos={row1}
            speed={60}
            direction="left"
            logoHeight={56}
            gap={64}
            fadeOut={true}
            fadeOutColor="#0c0c0c"
            ariaLabel="Demo tech stack row one"
          />

          {/* Row 2: Scrolling Right */}
          <LogoLoop 
            logos={row2}
            speed={60}
            direction="right"
            logoHeight={56}
            gap={64}
            fadeOut={true}
            fadeOutColor="#0c0c0c"
            ariaLabel="Demo tech stack row two"
          />
        </div>
      </section>
    </FadeInSection>
  );
}