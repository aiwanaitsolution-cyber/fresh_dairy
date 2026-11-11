"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function MotionEffects() {
  const pathname = usePathname();
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            reveal.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    const observe = () =>
      document
        .querySelectorAll(".reveal:not(.visible)")
        .forEach((element) => reveal.observe(element));
    observe();
    const mutations = new MutationObserver(observe);
    mutations.observe(document.querySelector("main"), {
      childList: true,
      subtree: true,
    });
    const hero = document.querySelector(".hero-full");
    const heroObserver = new IntersectionObserver(
      ([entry]) =>
        document.body.classList.toggle("past-hero", !entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px" },
    );
    if (hero) heroObserver.observe(hero);
    let frame = 0;
    const updateMotion = () => {
      frame = 0;
      if (prefersReducedMotion) return;
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scroll-y", `${scrollY}px`);
      document.querySelectorAll(".brand-editorial-hero > img").forEach((image) => {
        const heroRect = image.parentElement.getBoundingClientRect();
        const progress = Math.max(-0.12, Math.min(0.12, -heroRect.top / Math.max(heroRect.height, 1) * 0.12));
        image.style.setProperty("--hero-shift", `${progress * 100}%`);
      });
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMotion);
    };
    updateMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      mutations.disconnect();
      reveal.disconnect();
      heroObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      document.body.classList.remove("past-hero");
      document.documentElement.style.removeProperty("--scroll-y");
    };
  }, [pathname]);
  return <div className="reading-progress" aria-hidden="true" />;
}
