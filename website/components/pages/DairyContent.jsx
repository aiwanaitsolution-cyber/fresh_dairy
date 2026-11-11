import Hero from "@/components/Hero";
import { ProductGrid, ProductFilters } from "@/components/Products";
import DeliveryEnquiry from "@/components/DeliveryEnquiry";
import RoutinePlanner from "@/components/RoutinePlanner";
import RecipeInspiration from "@/components/RecipeInspiration";
import AppPreview from "@/components/AppPreview";

const slides = [
  {
    image: "/assets/delivery-range.webp",
    alt: "A complete dairy spread with milk, dahi, paneer and more",
    kicker: "YOUR DAIRY, AT HOME",
    title: "Seven favourites.|One fresh delivery.",
    copy: "A2 milk, paneer, chhach, dahi, white butter, ghee and khoya.",
    cta: "Explore the range",
    url: "#milk",
  },
  {
    image: "/assets/delivery-crate.webp",
    alt: "A dairy delivery tote at a home doorstep",
    kicker: "FROM OUR DAIRY TO YOUR DOOR",
    title: "Fill your basket.|Make it FreshDay.",
    copy: "Choose your favourites, then ask our team about home delivery in your area.",
    cta: "Check availability",
    url: "#delivery-check",
  },
  {
    image: "/assets/delivery-table.webp",
    alt: "Family enjoying dairy together at breakfast",
    kicker: "FOR YOUR EVERYDAY TABLE",
    title: "Good food.|Right at home.",
    copy: "Find your everyday favourites and something special for your kitchen.",
    cta: "Explore the range",
    url: "#milk",
  },
];

export default function DairyContent() {
  return (
    <>
      <Hero slides={slides} />
      <section className={"collection section-pad"} id={"milk"}>
        <div className={"section-heading reveal"}>
          <p className={"eyebrow"}>{"A LITTLE SOMETHING FOR EVERY TABLE"}</p>
          <h2>{"Meet your daily essentials."}</h2>
          <ProductFilters />
        </div>
        <ProductGrid />
        <p className={"caption"}>
          {
            "Prices are the supplied rates per litre or kilogram, not a promise of pack size. Original milk packaging is shown; other packs are premium concepts. All dairy contains milk."
          }
        </p>
      </section>
      <RoutinePlanner />
      <section className={"app-teaser section-pad"}>
        <div className={"app-copy reveal"}>
          <p className={"eyebrow"}>{"FRESH DAY APP · COMING SOON"}</p>
          <h2>
            {"Your daily dairy."}
            <br />
            <em>{"In your pocket."}</em>
          </h2>
          <p>
            {
              "Order your favourites and track your entire delivery journey, all from the Fresh Day app."
            }
          </p>
          <ul className={"app-list"}>
            <li>{"Order milk & dairy favourites"}</li>
            <li>{"Track your delivery updates"}</li>
            <li>{"Manage your subscription"}</li>
          </ul>
          <a className={"button"} href={"/app"}>
            {"Meet the app "}
            <span>{"↗"}</span>
          </a>
          <p className={"caption"}>
            {"Launching soon. Download links will appear here when available."}
          </p>
        </div>
        <div className={"phone-stage reveal"}>
          <div className={"phone-orbit"}></div>
          <div className={"phone"}>
            <div className={"phone-top"}>
              <span>{"9:41"}</span>
              <span>{"•••"}</span>
            </div>
            <div className={"phone-greeting"}>
              {"Good morning,"}
              <br />
              <strong>{"let’s make it fresh."}</strong>
            </div>
            <div className={"phone-banner"}>
              <img
                src={"/assets/blue-ghee.webp"}
                alt={"FreshDay Desi Ghee packaging concept"}
                loading={"lazy"}
              />
              <span>
                {"A fresh start."}
                <br />
                {"Every day."}
              </span>
            </div>
            <div className={"phone-status"}>
              <span className={"status-icon"}>{"↗"}</span>
              <div>
                <strong>{"Your morning, on its way"}</strong>
                <small>{"Delivery tracking preview"}</small>
              </div>
            </div>
            <div className={"phone-products"}>
              <div>
                <img
                  src={"/assets/brand/original-milk-bottles.webp"}
                  alt={"Milk bottle in app concept"}
                  loading={"lazy"}
                />
                <span>{"A2 Milk"}</span>
              </div>
              <div>
                <img
                  src={"/assets/blue-dahi.webp"}
                  alt={"Curd in app concept"}
                  loading={"lazy"}
                />
                <span>{"Dahi"}</span>
              </div>
            </div>
            <div className={"phone-nav"}>
              <span>{"Home"}</span>
              <span>{"My plan"}</span>
              <span>{"Deliveries"}</span>
            </div>
          </div>
          <span className={"phone-note"}>{"A glimpse of what’s coming"}</span>
        </div>
      </section>
      <DeliveryEnquiry />
    </>
  );
}
