import { useRef } from "react";

export default function Magnet({
  children,
  strength = 40,
}) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const element = ref.current;

    if (!element) return;

    const rect =
      element.getBoundingClientRect();

    const x =
      e.clientX -
      rect.left -
      rect.width / 2;

    const y =
      e.clientY -
      rect.top -
      rect.height / 2;

    element.style.transform = `
      translate(
        ${x / strength}px,
        ${y / strength}px
      )
    `;
  };

  const handleMouseLeave = () => {
    const element = ref.current;

    if (!element) return;

    element.style.transform =
      "translate(0px,0px)";
  };

  return (
    <div
      ref={ref}
      className="magnet"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}