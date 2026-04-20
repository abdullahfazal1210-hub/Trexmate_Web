"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-reveal hook. Add `data-reveal` to any element inside the ref'd container.
 * Optional direction via `data-reveal="left" | "right" | "up" | "down" | "fade"`.
 * If no direction is set, alternates left/right/up automatically per index for a
 * professional, choreographed entrance.
 */
export const useGsapReveal = (selector = "[data-reveal]") => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(selector);

      items.forEach((el, i) => {
        const dir = el.dataset.reveal || "";
        let from = { opacity: 0 };

        switch (dir) {
          case "left":
            from = { opacity: 0, x: -80 };
            break;
          case "right":
            from = { opacity: 0, x: 80 };
            break;
          case "up":
            from = { opacity: 0, y: 60 };
            break;
          case "down":
            from = { opacity: 0, y: -60 };
            break;
          case "fade":
            from = { opacity: 0 };
            break;
          default: {
            // Auto pattern: alternate horizontal slide for grid items, vertical for the rest
            const parent = el.parentElement;
            const siblingCount = parent
              ? Array.from(parent.children).filter((c) =>
                  c.hasAttribute("data-reveal")
                ).length
              : 1;
            if (siblingCount > 1) {
              const idx = parent
                ? Array.from(parent.children)
                    .filter((c) => c.hasAttribute("data-reveal"))
                    .indexOf(el)
                : i;
              from = idx % 2 === 0 ? { opacity: 0, x: -60 } : { opacity: 0, x: 60 };
            } else {
              from = { opacity: 0, y: 50 };
            }
          }
        }

        gsap.fromTo(el, from, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, [selector]);

  return ref;
};
