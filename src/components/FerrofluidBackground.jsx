import { useEffect, useState } from "react";
import Ferrofluid from "./Ferrofluid";

export default function FerrofluidBackground() {
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
      setDpr(isMobile ? 0.35 : 1);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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