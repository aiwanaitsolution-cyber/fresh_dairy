"use client";
import { useState } from "react";
const features = {
  orders: {
    button: "Easy ordering",
    title: "Your favourites, together.",
    copy: "Browse A2 milk and all seven dairy favourites, build your basket and choose what fits your everyday.",
  },
  tracking: {
    button: "Delivery tracking",
    title: "Follow every fresh step.",
    copy: "Track your entire delivery journey in the app, from order confirmation to arrival at your doorstep.",
  },
  plan: {
    button: "Your subscription",
    title: "A routine that works for you.",
    copy: "Manage your dairy subscription, choose a delivery frequency and pause your plan when you are away.",
  },
};
export default function AppPreview() {
  const [active, setActive] = useState("orders");
  const feature = features[active];
  return (
    <section className="app-feature section-pad" id="app-preview">
      <div className="reveal">
        <p className="eyebrow">A GLIMPSE OF WHAT’S COMING</p>
        <h2>
          From your order
          <br />
          to <em>your doorstep.</em>
        </h2>
        <p>
          A connected dairy experience, designed around your day. Explore the
          planned app features.
        </p>
        <div
          className="feature-tabs"
          role="group"
          aria-label="Preview app features"
        >
          {Object.entries(features).map(([id, item]) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              aria-pressed={active === id}
              onClick={() => setActive(id)}
            >
              {item.button}
            </button>
          ))}
        </div>
        <h3>{feature.title}</h3>
        <p>{feature.copy}</p>
        <div className="coming-stores">
          <span>
            iOS app
            <br />
            <strong>Coming soon</strong>
          </span>
          <span>
            Android app
            <br />
            <strong>Coming soon</strong>
          </span>
        </div>
        <p className="caption">
          App interface is a concept preview. Launch date and store links will
          be announced.
        </p>
        <div className="app-preview-links">
          <a className="button" href="/customer">Open customer app demo ↗</a>
          <a className="text-link" href="/admin">Open operations dashboard ↗</a>
        </div>
      </div>
      <div className="phone-stage reveal">
        <div className="phone app-demo">
          <div className="phone-top">
            <span>9:41</span>
            <span>•••</span>
          </div>
          <span className="app-demo-brand">FreshDay</span>
          <div className="app-screen" aria-live="polite">
            <PhoneScreen active={active} />
          </div>
          <div className="phone-nav">
            <span>Home</span>
            <span>My plan</span>
            <span>Deliveries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
function DemoCard({ title, children }) {
  return (
    <div className="demo-card">
      <strong>{title}</strong>
      <small>{children}</small>
    </div>
  );
}
function PhoneScreen({ active }) {
  if (active === "tracking")
    return (
      <>
        <h4>Your delivery journey</h4>
        <DemoCard title="On the way to you">
          A2 Milk · Your morning order
        </DemoCard>
        <ol className="demo-track">
          <li>
            Order confirmed<small>Your selection is in</small>
          </li>
          <li>
            Preparing your order<small>Getting your dairy ready</small>
          </li>
          <li>
            Out for delivery<small>On the way to your doorstep</small>
          </li>
          <li>
            Delivered<small>Your fresh day begins</small>
          </li>
        </ol>
        <p>Illustrative tracking preview</p>
      </>
    );
  if (active === "plan")
    return (
      <>
        <h4>Your dairy routine</h4>
        <DemoCard title="A2 Milk">Every day · Morning routine</DemoCard>
        <DemoCard title="Dahi">Once a week · Your essentials</DemoCard>
        <DemoCard title="Going away?">
          Planned pause &amp; resume controls
        </DemoCard>
        <p>Subscription concept · Coming soon</p>
      </>
    );
  return (
    <>
      <h4>Your daily favourites</h4>
      <div className="phone-products">
        <div>
          <img
            src="/assets/brand/original-milk-bottles.webp"
            alt="Original FreshDay milk bottle"
          />
          <span>A2 Milk</span>
        </div>
        <div>
          <img src="/assets/blue-dahi.webp" alt="Dahi packaging concept" />
          <span>Dahi</span>
        </div>
      </div>
      <div className="mt-4">
        <DemoCard title="Your fresh selection">Milk · Dahi · Paneer</DemoCard>
      </div>
      <p>App shopping preview · Coming soon</p>
    </>
  );
}
