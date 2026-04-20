"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TypewriterHeading = ({
  segments,
  delay = 0.2,
  speed = 0.05,
  segmentGap = 0.15,
  className = "",
  as: Tag = "h1",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray("[data-char]", ref.current);
      gsap.set(chars, { opacity: 0, y: 12, display: "inline-block" });

      const tl = gsap.timeline({ delay });
      let cursor = 0;
      segments.forEach((seg, i) => {
        const len = seg.text.length;
        const segChars = chars.slice(cursor, cursor + len);
        cursor += len;
        tl.to(
          segChars,
          {
            opacity: 1,
            y: 0,
            duration: 0.01,
            ease: "none",
            stagger: speed,
          },
          i === 0 ? 0 : `+=${segmentGap}`
        );
      });

      // blinking cursor
      const cursorEl = ref.current.querySelector("[data-cursor]");
      if (cursorEl) {
        gsap.to(cursorEl, {
          opacity: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "steps(1)",
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [segments, delay, speed, segmentGap]);

  return (
    <Tag ref={ref} className={className} aria-label={segments.map((s) => s.text).join(" ")}>
      {segments.map((seg, si) => {
        const chars = seg.text.split("");
        return (
          <span key={si}>
            {chars.map((c, ci) => (
              <span
                key={ci}
                data-char
                aria-hidden="true"
                className={seg.className}
              >
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
            {seg.br ? <br /> : si < segments.length - 1 ? (
              <span data-char aria-hidden="true">{"\u00A0"}</span>
            ) : null}
          </span>
        );
      })}
      <span data-cursor className="ml-1 inline-block w-[3px] h-[0.9em] -mb-[0.1em] bg-primary align-middle" aria-hidden="true" />
    </Tag>
  );
};

export default TypewriterHeading;
