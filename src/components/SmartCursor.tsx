import { useEffect, useState } from "react";

import { motion, useMotionValue } from "framer-motion";

interface SmartCursorProps {
  areaId: string;
}

export default function SmartCursor({ areaId }: SmartCursorProps) {
  const [clicking, setClicking] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [isText, setIsText] = useState(false);
  const [textHeight, setTextHeight] = useState(20);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

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
      const tag = target.tagName;

      const textModeDisabled = !!target.closest('[data-cursor-text="false"]');

      const hoverable =
        tag === "A" || tag === "BUTTON" || target.dataset.hover === "true";

      const isLikelyText =
        !textModeDisabled &&
        (tag === "P" ||
          tag === "SPAN" ||
          tag === "H1" ||
          tag === "H2" ||
          tag === "H3" ||
          tag === "H4" ||
          tag === "H5" ||
          tag === "H6" ||
          tag === "SMALL" ||
          tag === "LABEL" ||
          tag === "STRONG" ||
          target.nodeType === Node.TEXT_NODE);

      setIsLink(hoverable);
      setIsText(isLikelyText);

      if (isLikelyText) {
        const computed = window.getComputedStyle(target);
        const lh = parseFloat(computed.lineHeight);
        const fs = parseFloat(computed.fontSize);
        const height = !isNaN(lh)
          ? lh
          : !isNaN(fs)
          ? fs * 1.2
          : 20;
        setTextHeight(height);
      }
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
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          width: isText ? 6 : 24,
          height: isText ? textHeight : 24,
          borderRadius: isText ? 999 : 9999,
          scale: clicking ? 0.9 : isLink ? 1.4 : 1,
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
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.08,
        }}
      />
    </motion.div>
  );
}
