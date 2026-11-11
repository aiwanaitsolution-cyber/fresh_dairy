"use client";
import { useState } from "react";
import products from "@/data/products.json";
export default function RoutinePlanner() {
  const [result, setResult] = useState(
    "This is a planning preview. Live subscriptions are coming soon.",
  );
  return (
    <section className="planner section-pad">
      <div className="reveal">
        <p className="eyebrow">MAKE IT YOUR EVERYDAY</p>
        <h2>
          A routine
          <br />
          <em>that’s yours.</em>
        </h2>
        <p>Preview a dairy plan before our app arrives.</p>
      </div>
      <form
        className="reveal"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          setResult(
            `${data.get("product")} · ${data.get("frequency")}. Your routine preview is ready. Live subscriptions will open at launch.`,
          );
        }}
      >
        <label>
          Your dairy
          <select name="product">
            {products.map((product) => (
              <option key={product.id}>{product.name}</option>
            ))}
          </select>
        </label>
        <label>
          Your rhythm
          <select name="frequency">
            <option>Every day</option>
            <option>Alternate days</option>
            <option>Once a week</option>
            <option>One-time</option>
          </select>
        </label>
        <button className="button" type="submit">
          Preview my routine ↗
        </button>
        <p id="routineResult" aria-live="polite">
          {result}
        </p>
      </form>
    </section>
  );
}
