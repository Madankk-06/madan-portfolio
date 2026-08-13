import Ferrofluid from "./Ferrofluid";

export default function FerrofluidBackground() {
  // Determine WebGL rendering resolution synchronously during initial render to prevent rapid context recreation
  const getInitialDpr = () => {
    if (typeof window === "undefined") return 1;
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    return isMobile ? 0.35 : 1;
  };

  const dpr = getInitialDpr();

  return (
    <div className="global-ferrofluid">
      <Ferrofluid
        color="#3b82f6"
        speed={0.25}
        scale={2}
        fluidity={0.15}
        turbulence={0.5}
        glow={1.5}
        opacity={0.6}
        dpr={dpr}
      />
    </div>
  );
}