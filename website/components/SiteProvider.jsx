"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import products from "@/data/products.json";
import { cleanSelection } from "@/lib/delivery.mjs";
const SiteContext = createContext(null);
const STORAGE_KEY = "fresh-day-bag";
export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("SiteProvider is missing.");
  return context;
}
export default function SiteProvider({ children }) {
  const [bag, setBag] = useState([]);
  const [ready, setReady] = useState(false);
  const [filter, setFilter] = useState("all");
  const [cartOpen, setCartOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");
  const timer = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    try {
      setBag(
        cleanSelection(
          JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
          products,
        ),
      );
    } catch {
      setBag([]);
    }
    setReady(true);
    const onStorage = (event) => {
      if (event.key !== STORAGE_KEY) return;
      try {
        setBag(cleanSelection(JSON.parse(event.newValue || "[]"), products));
      } catch {
        setBag([]);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  useEffect(() => {
    if (ready)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bag));
      } catch {
        /* Private browsing may block storage. */
      }
  }, [bag, ready]);
  useEffect(() => {
    setFilter("all");
    setCartOpen(false);
    setProduct(null);
  }, [pathname]);
  useEffect(() => () => clearTimeout(timer.current), []);
  const notify = useCallback((text) => {
    setMessage(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(""), 2600);
  }, []);
  const add = useCallback(
    (name) => {
      if (!products.some((item) => item.name === name)) return;
      setBag((current) => [...current, name]);
      notify(`${name} added to your selection`);
    },
    [notify],
  );
  const remove = (name) =>
    setBag((current) => {
      const copy = [...current];
      const index = copy.indexOf(name);
      if (index !== -1) copy.splice(index, 1);
      return copy;
    });
  const clear = () => {
    setBag([]);
    notify("Your saved selection has been cleared");
  };
  return (
    <SiteContext.Provider
      value={{
        bag,
        add,
        remove,
        clear,
        products,
        filter,
        setFilter,
        setCartOpen,
        setProduct,
      }}
    >
      {children}
      <Modal
        open={cartOpen}
        onDismiss={() => setCartOpen(false)}
        label="Your selection"
      >
        <p className="eyebrow">YOUR EVERYDAY FRESH</p>
        <h2>Your selection.</h2>
        <div id="cartItems">
          {bag.length ? (
            [...new Set(bag)].map((name) => {
              const item = products.find((entry) => entry.name === name);
              return (
                <div className="cart-row" key={name}>
                  <span>
                    {name} × {bag.filter((entry) => entry === name).length} ·{" "}
                    {item.display}
                  </span>
                  <button
                    onClick={() => remove(name)}
                    aria-label={`Remove one ${name}`}
                  >
                    Remove
                  </button>
                </div>
              );
            })
          ) : (
            <p>
              Your fresh start is waiting. Explore our dairy to add your
              favourites.
            </p>
          )}
        </div>
        <p className="caption">
          Saved on this device. Rates are per listed unit. Online checkout and
          delivery tracking are coming with the app.
        </p>
        <button
          className="button close-action"
          onClick={() => setCartOpen(false)}
        >
          Keep exploring ↗
        </button>
      </Modal>
      <Modal
        open={Boolean(product)}
        onDismiss={() => setProduct(null)}
        label={product?.name || "Product details"}
      >
        {product && (
          <>
            <p className="eyebrow">FRESHDAY DAIRY</p>
            <h2>{product.name}</h2>
            <p>
              {product.detail} Listed rate: {product.display}.
            </p>
            <button
              className="button"
              onClick={() => {
                add(product.name);
                setProduct(null);
              }}
            >
              Add to selection +
            </button>
            <p className="caption">
              All dairy products contain milk. Milk artwork is original; other
              packs are design concepts.
            </p>
          </>
        )}
      </Modal>
      <div
        id="toast"
        className={message ? "show" : ""}
        role="status"
        aria-live="polite"
      >
        {message}
      </div>
    </SiteContext.Provider>
  );
}
function Modal({ open, onDismiss, label, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      aria-label={label}
      onCancel={(event) => {
        event.preventDefault();
        onDismiss();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          onDismiss();
      }}
    >
      <button className="close" onClick={onDismiss} aria-label="Close dialog">
        ×
      </button>
      {children}
    </dialog>
  );
}
