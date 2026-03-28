import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const glow = glowRef.current;
    if (!glow) return;

    let raf: number;
    let x = -300;
    let y = -300;
    let targetX = -300;
    let targetY = -300;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onMouseLeave = () => {
      targetX = -300;
      targetY = -300;
    };

    const animate = () => {
      x += (targetX - x) * 0.1;
      y += (targetY - y) * 0.1;
      if (glow) {
        glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="cursor-glow"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 360,
        height: 360,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        background:
          "radial-gradient(circle, rgba(82,183,136,0.18) 0%, rgba(82,183,136,0.07) 40%, transparent 70%)",
        willChange: "transform",
        mixBlendMode: "normal",
      }}
    />
  );
}
