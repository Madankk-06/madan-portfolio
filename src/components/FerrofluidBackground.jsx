import Ferrofluid from "./Ferrofluid";

export default function FerrofluidBackground() {
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
      />
    </div>
  );
}