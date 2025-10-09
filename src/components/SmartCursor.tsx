import { useEffect, useState } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";

interface SmartCursorProps {
  areaId: string;
}

export default function SmartCursor({ areaId }: SmartCursorProps) {
  const [clicking, setClicking] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const area = document.getElementById(areaId);
      const insideArea = area?.contains(e.target as Node);

      if (!insideArea) {
        setVisible(false);
        return;
      }

      setVisible(true);
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement;
      const isHoverable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.dataset.hover === "true";

      setIsLink(isHoverable);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y, areaId]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          scale: clicking ? 0.9 : isLink ? 1.6 : 1,
          opacity: isLink ? 0.9 : 0.7,
          backgroundColor: isLink
            ? "rgba(255,255,255,0.35)"
            : "rgba(255,255,255,0.22)",
          backdropFilter: "blur(16px)",
          boxShadow: isLink
            ? "0 0 18px rgba(255,255,255,0.4)"
            : "0 0 10px rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.25)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="w-6 h-6 rounded-full"
      />
    </motion.div>
  );
}
