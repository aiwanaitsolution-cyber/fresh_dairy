import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section-pad min-h-[60svh] pt-40">
      <p className="eyebrow">FRESHDAY</p>
      <h1>
        This page has
        <br />
        moved on.
      </h1>
      <p>Find your everyday dairy favourites on our homepage.</p>
      <Link className="button" href="/">
        Back to FreshDay ↗
      </Link>
    </section>
  );
}
