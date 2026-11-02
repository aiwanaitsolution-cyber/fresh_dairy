"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function MotionEffects() {
  const pathname = usePathname();
  useEffect(() => {
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
    return () => {
      mutations.disconnect();
      reveal.disconnect();
      heroObserver.disconnect();
      document.body.classList.remove("past-hero");
    };
  }, [pathname]);
  return <div className="reading-progress" aria-hidden="true" />;
}
