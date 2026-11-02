"use client";
import { useSite } from "./SiteProvider";
export function ProductFilters() {
  const { filter, setFilter } = useSite();
  const filters = [
    ["all", "All dairy"],
    ["milk", "Milk"],
    ["fresh", "Fresh dairy"],
    ["pantry", "Butter, ghee & khoya"],
  ];
  return (
    <div
      className="filters flex flex-wrap gap-2"
      role="group"
      aria-label="Filter dairy products"
    >
      {filters.map(([id, label]) => (
        <button
          key={id}
          className={filter === id ? "active" : ""}
          aria-pressed={filter === id}
          onClick={() => setFilter(id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
export function ProductGrid() {
  const { products, filter, add, setProduct } = useSite();
  return (
    <div className="products">
      {products
        .filter((product) => filter === "all" || product.type === filter)
        .map((product) => (
          <article className="product reveal" key={product.id}>
            <button
              className={`product-visual ${product.id}`}
              onClick={() => setProduct(product)}
              aria-label={`Explore ${product.name}`}
            >
              <img
                src={`/assets/${product.image}`}
                alt={`${product.name}: ${product.id === "a2" ? "original milk packaging" : "premium packaging concept"}`}
                loading="lazy"
              />
              <span className="explore">Explore ↗</span>
            </button>
            <div className="product-info">
              <div>
                <p className="small-label">{product.tag}</p>
                <h3>{product.name}</h3>
                <strong className="product-price">{product.display}</strong>
                <p>{product.description}</p>
              </div>
              <button
                className="add"
                onClick={() => add(product.name)}
                aria-label={`Add ${product.name} to selection`}
              >
                +
              </button>
            </div>
          </article>
        ))}
    </div>
  );
}
export function ClearSelection() {
  const { clear } = useSite();
  return <button onClick={clear}>Clear saved selection</button>;
}
