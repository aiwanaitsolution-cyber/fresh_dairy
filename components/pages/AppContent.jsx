import Hero from "@/components/Hero";
import { ProductGrid, ProductFilters } from "@/components/Products";
import DeliveryEnquiry from "@/components/DeliveryEnquiry";
import RoutinePlanner from "@/components/RoutinePlanner";
import RecipeInspiration from "@/components/RecipeInspiration";
import AppPreview from "@/components/AppPreview";

const slides = [
  {
    image: "/assets/delivery-app.webp",
    alt: "A customer using a phone beside a dairy delivery tote",
    kicker: "FRESHDAY APP · COMING SOON",
    title: "Dairy delivery.|A tap away.",
    copy: "Ordering, delivery tracking and subscription management, together in our upcoming app.",
    cta: "Preview the app",
    url: "#app-preview",
  },
  {
    image: "/assets/delivery-crate.webp",
    alt: "A dairy delivery tote waiting at the doorstep",
    kicker: "YOUR MORNING, CONNECTED",
    title: "From your order|to your doorstep.",
    copy: "Follow your entire delivery journey with planned app tracking updates.",
    cta: "Preview the app",
    url: "#app-preview",
  },
  {
    image: "/assets/delivery-door.webp",
    alt: "A customer receiving a home dairy delivery",
    kicker: "HOME DELIVERY MADE PERSONAL",
    title: "A fresh routine.|Built around you.",
    copy: "The app is coming soon. Contact our team for current delivery enquiries.",
    cta: "Check availability",
    url: "#delivery-check",
  },
];

export default function AppContent() {
  return (
    <>
      <Hero slides={slides} />
      <AppPreview />
      <section className={"app-steps section-pad"}>
        <h2 className={"reveal"}>
          {"A fresh routine."}
          <br />
          <em>{"Without the fuss."}</em>
        </h2>
        <div className={"step-grid"}>
          <article className={"reveal"}>
            <span>{"01"}</span>
            <h3>{"Discover your dairy"}</h3>
            <p>{"Choose A2 milk and your favourite dairy products."}</p>
          </article>
          <article className={"reveal"}>
            <span>{"02"}</span>
            <h3>{"Build your routine"}</h3>
            <p>{"Plan the products and frequency that suit your household."}</p>
          </article>
          <article className={"reveal"}>
            <span>{"03"}</span>
            <h3>{"Follow your delivery"}</h3>
            <p>{"See delivery status updates through the app."}</p>
          </article>
        </div>
      </section>
      <section className={"faq section-pad"}>
        <div className={"reveal"}>
          <p className={"eyebrow"}>{"A LITTLE MORE TO KNOW"}</p>
          <h2>
            {"Good questions."}
            <br />
            <em>{"Clear answers."}</em>
          </h2>
        </div>
        <div className={"reveal"}>
          <details>
            <summary>{"What is in the FreshDay range?"}</summary>
            <p>
              {
                "Our range includes A2 Milk, Paneer, Chhach, Dahi, White Butter, Desi Ghee and Khoya. Rates are listed per litre or kilogram. Contact us to confirm available pack sizes."
              }
            </p>
          </details>
          <details>
            <summary>{"Is A2 milk lactose-free?"}</summary>
            <p>
              {
                "No. A2 describes a beta-casein protein type. A2 cow milk still contains lactose and milk allergens."
              }
            </p>
          </details>
          <details>
            <summary>{"When is the Fresh Day app launching?"}</summary>
            <p>
              {
                "The app is coming soon. Ordering, delivery tracking and subscription management are planned features. No launch date has been announced yet."
              }
            </p>
          </details>
          <details>
            <summary>{"Can I place an order on this website?"}</summary>
            <p>
              {
                "You can explore the range, save a selection on your device and preview a routine. Live ordering, payments and delivery bookings are not open yet."
              }
            </p>
          </details>
          <details>
            <summary>{"Are these the final product packs?"}</summary>
            <p>
              {
                "The milk bottle uses the supplied original packaging photograph. Other packs are premium design concepts. Pack sizes and availability can be confirmed with FreshDay."
              }
            </p>
          </details>
        </div>
      </section>
      <DeliveryEnquiry />
    </>
  );
}
