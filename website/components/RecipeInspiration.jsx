"use client";
import Link from "next/link";
import { useState } from "react";
const recipes = {
  milk: {
    label: "YOUR MORNING RITUAL",
    title: "A comforting cup of chai",
    copy: "Milk, tea, your favourite spices and a little time for yourself. Make it just the way you love.",
    image: "good-1.webp",
    button: "Morning chai",
  },
  curd: {
    label: "A LITTLE LUNCH-TIME COMFORT",
    title: "A refreshing bowl of raita",
    copy: "Stir curd with cucumber, roasted cumin and a little seasoning. A simple companion to your favourite lunch.",
    image: "good-2.webp",
    button: "Lunch-time raita",
  },
  paneer: {
    label: "SOMETHING DELICIOUS FOR DINNER",
    title: "A quick paneer bhurji",
    copy: "Crumble paneer into sautéed onion, tomato and spices. Finish with coriander and enjoy with warm roti.",
    image: "good-3.webp",
    button: "Paneer bhurji",
  },
};
export default function RecipeInspiration() {
  const [key, setKey] = useState("milk");
  const recipe = recipes[key];
  return (
    <section className="recipe-section section-pad">
      <div className="reveal">
        <p className="eyebrow">A LITTLE DAILY INSPIRATION</p>
        <h2>
          Make something
          <br />
          <em>you love.</em>
        </h2>
      </div>
      <div
        className="recipe-tabs flex flex-wrap gap-2"
        role="group"
        aria-label="Choose dairy recipe inspiration"
      >
        {Object.entries(recipes).map(([id, item]) => (
          <button
            key={id}
            className={key === id ? "active" : ""}
            aria-pressed={key === id}
            onClick={() => setKey(id)}
          >
            {item.button}
          </button>
        ))}
      </div>
      <div className="recipe-detail reveal">
        <img
          src={`/assets/${recipe.image}`}
          alt={`${recipe.title} dairy inspiration`}
          loading="lazy"
        />
        <div>
          <p className="eyebrow">{recipe.label}</p>
          <h3>{recipe.title}</h3>
          <p>{recipe.copy}</p>
          <Link className="text-link" href="/dairy">
            Find your ingredients ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
