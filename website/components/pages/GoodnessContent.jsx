import Hero from "@/components/Hero";
import { ProductGrid, ProductFilters } from "@/components/Products";
import DeliveryEnquiry from "@/components/DeliveryEnquiry";
import RoutinePlanner from "@/components/RoutinePlanner";
import RecipeInspiration from "@/components/RecipeInspiration";
import AppPreview from "@/components/AppPreview";

const slides = [
  {
    image: "/assets/delivery-table.webp",
    alt: "Family breakfast with milk and dairy",
    kicker: "THE GOOD IN YOUR EVERYDAY",
    title: "Fresh routines.|Happier tables.",
    copy: "Explore dairy nutrition and recipe inspiration for everyday meals at home.",
    cta: "Explore the goodness",
    url: "#benefits",
  },
  {
    image: "/assets/delivery-range.webp",
    alt: "Milk, curd, paneer, butter, ghee and khoya on a table",
    kicker: "SOMETHING FOR EVERY TABLE",
    title: "From morning chai|to family dinner.",
    copy: "Everyday favourites for the meals and moments you love.",
    cta: "Find your favourites",
    url: "/dairy",
  },
  {
    image: "/assets/delivery-door.webp",
    alt: "Fresh dairy arriving at a home",
    kicker: "MAKE ROOM FOR FRESH",
    title: "Your daily dairy.|Delivered home.",
    copy: "Speak to our team about home delivery availability and timings.",
    cta: "Check availability",
    url: "#delivery-check",
  },
];

export default function GoodnessContent() {
  return (
    <>
      <Hero slides={slides} />
      <section className={"benefits section-pad"} id={"benefits"}>
        <div className={"section-heading reveal"}>
          <p className={"eyebrow"}>
            {"SMALL INGREDIENTS. SO MANY POSSIBILITIES."}
          </p>
          <h2>{"More to your everyday."}</h2>
        </div>
        <div className={"benefit-grid"}>
          <article className={"reveal"}>
            <span className={"benefit-number"}>{"Ca"}</span>
            <h3>{"A source of calcium"}</h3>
            <p>
              {
                "Milk and dairy foods provide calcium, which helps maintain healthy bones and teeth."
              }
            </p>
          </article>
          <article className={"reveal"}>
            <span className={"benefit-number"}>{"P"}</span>
            <h3>{"Protein in your day"}</h3>
            <p>
              {
                "Milk, curd and paneer can contribute protein as part of a varied, balanced diet."
              }
            </p>
          </article>
          <article className={"benefit-photo reveal"}>
            <img
              src={"/assets/good-3.webp"}
              alt={"Fresh paneer bhurji with roti"}
              loading={"lazy"}
            />
          </article>
          <article className={"reveal"}>
            <span className={"benefit-number"}>{"↗"}</span>
            <h3>{"Made for your kitchen"}</h3>
            <p>
              {
                "A splash in your chai, a bowl alongside lunch or the star of your favourite curry."
              }
            </p>
          </article>
        </div>
        <p className={"source-note"}>
          {"General dairy nutrition information: "}
          <a
            href={
              "https://www.nhs.uk/live-well/eat-well/food-types/milk-and-dairy-nutrition/"
            }
            target={"_blank"}
            rel={"noopener"}
          >
            {"NHS: dairy and alternatives"}
          </a>
          {
            ". Nutritional values vary by product; refer to the final label. Milk allergens and lactose are present."
          }
        </p>
      </section>
      <RecipeInspiration />
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
