"use client";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
export default function Hero({ slides }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(media.matches);
      setPaused(media.matches);
    };
    const visibility = () => setVisible(!document.hidden);
    update();
    visibility();
    media.addEventListener("change", update);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  useEffect(() => {
    if (paused || hovered || focused || !visible) return;
    const timer = setTimeout(
      () => setIndex((current) => (current + 1) % slides.length),
      6500,
    );
    return () => clearTimeout(timer);
  }, [index, paused, hovered, focused, visible, slides.length]);
  const slide = slides[index];
  return (
    <section
      className="hero hero-full photo-hero"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div
        key={index}
        className={`hero-copy ${reduced ? "" : "motion-safe:animate-hero-enter"}`}
      >
        <p className="eyebrow">{slide.kicker}</p>
        <h1>
          {slide.title.split("|").map((line, i) => (
            <Fragment key={line}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>
        <p className="hero-description">{slide.copy}</p>
        <Link className="button" href={slide.url}>
          <span>{slide.cta}</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div
        className="hero-visual carousel"
        aria-roledescription="carousel"
        aria-label="FreshDay home delivery stories"
      >
        {slides.map((entry, i) => (
          <div
            key={entry.image}
            className={`hero-slide ${i === index ? "active" : ""}`}
            aria-hidden={i !== index}
          >
            <img
              className="scene-image"
              src={entry.image}
              alt={entry.alt}
              fetchPriority={i === 0 ? "high" : "auto"}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="carousel-controls">
          <div className="slide-controls">
            {slides.map((entry, i) => (
              <button
                key={i}
                className={`slide-select ${i === index ? "active" : ""}`}
                aria-label={`Show image ${i + 1}`}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <button
            className="carousel-pause"
            aria-label={`${paused ? "Play" : "Pause"} automatic images`}
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? "Play" : "Pause"}
          </button>
        </div>
      </div>
    </section>
  );
}
