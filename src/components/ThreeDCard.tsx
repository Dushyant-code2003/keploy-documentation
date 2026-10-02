"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  enableScrollZoom?: boolean;
  enableTilt?: boolean;
  depth?: number;
  glare?: boolean;
}

export function ThreeDCard({
  children,
  className = "",
  enableScrollZoom = true,
  enableTilt = true,
  depth = 10,
  glare = true,
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [scrollScale, setScrollScale] = useState(1);
  const [isInViewportCenter, setIsInViewportCenter] = useState(false);

  // Scroll Zoom Effect: calculates proximity to viewport center
  useEffect(() => {
    if (!enableScrollZoom) return;

    let rafId: number;
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Center of element relative to window center
      const elementCenter = rect.top + rect.height / 2;
      const windowCenter = windowHeight / 2;
      const distFromCenter = Math.abs(elementCenter - windowCenter);
      const maxDist = windowHeight * 0.75;

      if (distFromCenter < maxDist && rect.bottom > 0 && rect.top < windowHeight) {
        // Normalized 0 (at center) to 1 (at edges)
        const proximity = Math.max(0, 1 - distFromCenter / maxDist);
        // Ease the scale smoothly: from 0.985 at edge to 1.025 at exact center
        const targetScale = 0.985 + proximity * 0.04;
        setScrollScale(targetScale);
        setIsInViewportCenter(proximity > 0.45);
      } else {
        setScrollScale(0.985);
        setIsInViewportCenter(false);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enableScrollZoom]);

  // 3D Parallax Tilt Effect on Pointer Move
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!enableTilt || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (rotateX is vertical tilt, rotateY is horizontal)
      const rotX = -((y - centerY) / centerY) * depth;
      const rotY = ((x - centerX) / centerX) * depth;

      setRotateX(rotX);
      setRotateY(rotY);

      if (glare) {
        setGlarePos({
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
        });
      }
    },
    [enableTilt, depth, glare]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const transformStyle = isHovered
    ? `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${Math.max(
        1.03,
        scrollScale
      )}, ${Math.max(1.03, scrollScale)}, 1.05) translateZ(12px)`
    : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(${scrollScale}, ${scrollScale}, 1) translateZ(0px)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transformStyle: "preserve-3d",
        transition: isHovered
          ? "transform 0.1s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.3s ease, border-color 0.3s ease"
          : "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease",
      }}
      className={`relative will-change-transform ${
        isInViewportCenter
          ? "shadow-[0_16px_40px_-12px_rgba(184,155,106,0.18)] dark:shadow-[0_22px_55px_-12px_rgba(0,0,0,0.65)]"
          : "shadow-md"
      } ${className}`}
    >
      {/* Glare Specular Highlight */}
      {glare && isHovered && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 rounded-xl opacity-60 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(217, 198, 165, 0.18), transparent 70%)`,
          }}
        />
      )}

      {/* 3D Depth Rim Glow on Viewport Center */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-px rounded-xl border transition-opacity duration-500 z-20 ${
          isInViewportCenter || isHovered
            ? "border-[#B89B6A]/50 dark:border-[#D9C6A5]/40 opacity-100"
            : "border-transparent opacity-0"
        }`}
      />

      {children}
    </div>
  );
}
