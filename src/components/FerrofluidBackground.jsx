import Ferrofluid from "./Ferrofluid";

export default function FerrofluidBackground() {
  return (
    <div className="global-ferrofluid">
      <Ferrofluid
        colors={["#ffffff", "#ffffff", "#ffffff"]}
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