import Hero from "@/components/Hero";
import { ProductGrid, ProductFilters } from "@/components/Products";
import DeliveryEnquiry from "@/components/DeliveryEnquiry";
import RoutinePlanner from "@/components/RoutinePlanner";
import RecipeInspiration from "@/components/RecipeInspiration";
import AppPreview from "@/components/AppPreview";

const slides = [
  {
    image: "/assets/delivery-door.webp",
    alt: "Dairy delivered to an Indian home doorway",
    kicker: "FRESH DAY. FRESH AT YOUR DOOR.",
    title: "Your daily dairy.|Delivered home.",
    copy: "Original A2 milk and six dairy favourites, brought closer to your everyday.",
    cta: "Check delivery availability",
    url: "#delivery-check",
  },
  {
    image: "/assets/delivery-range.webp",
    alt: "A dairy spread featuring milk, paneer, curd, butter, ghee and khoya",
    kicker: "SEVEN FAVOURITES. ONE FRESHDAY.",
    title: "A little fresh.|For every meal.",
    copy: "From milk and paneer to chhach, dahi, butter, ghee and khoya.",
    cta: "Explore our dairy",
    url: "/dairy",
  },
  {
    image: "/assets/delivery-table.webp",
    alt: "An Indian family enjoying milk together at breakfast",
    kicker: "FOR THE MOMENTS THAT MATTER",
    title: "Good mornings.|Start at home.",
    copy: "Make your breakfast table a little more FreshDay. Ask about home delivery near you.",
    cta: "Check delivery availability",
    url: "#delivery-check",
  },
  {
    image: "/assets/delivery-app.webp",
    alt: "Customer checking a phone beside a home milk delivery",
    kicker: "FRESHDAY APP · COMING SOON",
    title: "Your fresh routine.|In your pocket.",
    copy: "Order your favourites and track deliveries through our upcoming app.",
    cta: "Meet the app",
    url: "/app",
  },
];

export default function HomeContent() {
  return (
    <>
      <Hero slides={slides} />
      <div className={"hero-foot"}>
        <span>{"SEVEN FAVOURITES. ONE FRESHDAY."}</span>
        <span>{"Milk · Paneer · Chhach · Dahi · Butter · Ghee · Khoya"}</span>
      </div>
      <section className={"delivery-journey section-pad"}>
        <div className={"section-heading reveal"}>
          <p className={"eyebrow"}>
            {"FRESH FROM OUR DAIRY. RIGHT TO YOUR HOME."}
          </p>
          <h2>
            {"A simpler way"}
            <br />
            <em>{"to start fresh."}</em>
          </h2>
        </div>
        <div className={"journey-grid"}>
          <article className={"reveal"}>
            <div className={"journey-image"}>
              <img
                src={"/assets/blue-paneer.webp"}
                alt={"FreshDay paneer packaging concept"}
                loading={"lazy"}
              />
            </div>
            <span>{"01"}</span>
            <h3>{"Choose your favourites"}</h3>
            <p>{"Explore seven dairy essentials and the listed rates."}</p>
            <a className={"text-link"} href={"/dairy"}>
              {"Explore our dairy ↗"}
            </a>
          </article>
          <article className={"reveal"}>
            <div className={"journey-image"}>
              <img
                src={"/assets/delivery-crate.webp"}
                alt={"A dairy delivery tote at a front door"}
                loading={"lazy"}
              />
            </div>
            <span>{"02"}</span>
            <h3>{"Confirm your delivery"}</h3>
            <p>
              {"Ask our team about your area, delivery timing and pack sizes."}
            </p>
            <a className={"text-link"} href={"#delivery-check"}>
              {"Check availability ↗"}
            </a>
          </article>
          <article className={"reveal"}>
            <div className={"journey-image"}>
              <img
                src={"/assets/delivery-table.webp"}
                alt={"Family breakfast with dairy at home"}
                loading={"lazy"}
              />
            </div>
            <span>{"03"}</span>
            <h3>{"Make yourself at home"}</h3>
            <p>
              {
                "Bring FreshDay into your breakfast, lunch and family favourites."
              }
            </p>
            <a className={"text-link"} href={"/goodness"}>
              {"Everyday inspiration ↗"}
            </a>
          </article>
        </div>
      </section>
      <section className={"intro section-pad"}>
        <p className={"eyebrow reveal"}>{"GOOD FOOD. SIMPLE PLEASURES."}</p>
        <h2 className={"reveal"}>
          {"A little more fresh."}
          <br />
          {"A little closer "}
          <em>{"to home."}</em>
        </h2>
        <div className={"intro-copy reveal"}>
          <p>
            {
              "A comforting cup of chai. A good breakfast. Your favourite dairy delivered home, with availability and timings confirmed by our team."
            }
          </p>
          <a className={"text-link"} href={"/our-way"}>
            {"Discover our way ↗"}
          </a>
        </div>
      </section>
      <section className={"collection section-pad"}>
        <div className={"section-heading reveal"}>
          <p className={"eyebrow"}>{"FIND YOUR EVERYDAY FRESH"}</p>
          <h2>
            {"Your favourites."}
            <br />
            <em>{"Fresh from our dairy."}</em>
          </h2>
        </div>
        <ProductGrid />
        <p className={"caption"}>
          {
            "Rates from the supplied FreshDay product list. Milk packaging is original; other pack visuals are concepts. Confirm pack sizes and availability when enquiring."
          }
        </p>
      </section>
      <section className={"living-story"} aria-label={"Everyday dairy moments"}>
        <div className={"sticky-scene"}>
          <img
            src={"/assets/delivery-table.webp"}
            alt={"A family sharing a dairy breakfast at home"}
            loading={"lazy"}
          />
          <div className={"scene-shade"}></div>
        </div>
        <div className={"story-panels"}>
          <article className={"story-panel reveal"}>
            <p className={"eyebrow"}>{"LITTLE MOMENTS. LASTING RITUALS."}</p>
            <h2>
              {"A little fresh."}
              <br />
              <em>{"Right at your door."}</em>
            </h2>
            <p>
              {
                "Your first chai, a familiar breakfast and a little more time at home. Bring FreshDay into your everyday routine."
              }
            </p>
          </article>
          <article className={"story-panel reveal"}>
            <h2>
              {"From the first cup"}
              <br />
              {"to the "}
              <em>{"last spoonful."}</em>
            </h2>
            <p>
              {
                "Milk in your chai, curd with lunch and paneer for dinner. Simple ingredients, so many possibilities."
              }
            </p>
            <a className={"text-link"} href={"/goodness"}>
              {"Explore everyday goodness ↗"}
            </a>
          </article>
          <article className={"story-panel reveal"}>
            <h2>
              {"A fresh routine."}
              <br />
              <em>{"At your pace."}</em>
            </h2>
            <p>
              {
                "Our upcoming app brings ordering, delivery tracking and your dairy routine into one place."
              }
            </p>
            <a className={"text-link"} href={"/app"}>
              {"Meet the app ↗"}
            </a>
          </article>
        </div>
      </section>
      <section className={"delivery-gallery section-pad"}>
        <div className={"reveal"}>
          <p className={"eyebrow"}>{"A FRESH DAY LOOKS LIKE THIS"}</p>
          <h2>
            {"From doorstep"}
            <br />
            <em>{"to dinner table."}</em>
          </h2>
        </div>
        <div className={"gallery-grid"}>
          <figure className={"gallery-wide reveal"}>
            <img
              src={"/assets/delivery-door.webp"}
              alt={"Fresh dairy arriving at a home"}
              loading={"lazy"}
            />
            <figcaption>{"Goodness comes home."}</figcaption>
          </figure>
          <figure className={"reveal"}>
            <img
              src={"/assets/blue-ghee.webp"}
              alt={"Premium FreshDay desi ghee concept"}
              loading={"lazy"}
            />
            <figcaption>{"A golden little finishing touch."}</figcaption>
          </figure>
          <figure className={"reveal"}>
            <img
              src={"/assets/blue-chhach.webp"}
              alt={"FreshDay Chhach packaging concept"}
              loading={"lazy"}
            />
            <figcaption>{"Room for a refreshing sip."}</figcaption>
          </figure>
          <figure className={"gallery-wide reveal"}>
            <img
              src={"/assets/delivery-table.webp"}
              alt={"A family gathered around the breakfast table"}
              loading={"lazy"}
            />
            <figcaption>{"Made for the moments you share."}</figcaption>
          </figure>
        </div>
      </section>
      <section className={"farm-preview section-pad"}>
        <div className={"reveal"}>
          <p className={"eyebrow"}>{"MEET THE DAIRY FAMILY"}</p>
          <h2>
            {"From the farm."}
            <br />
            <em>{"For your everyday."}</em>
          </h2>
          <p>
            {
              "Explore our A2 milk and six dairy favourites, from refreshing chhach to golden desi ghee and traditional khoya."
            }
          </p>
          <a className={"text-link"} href={"/dairy#milk"}>
            {"Explore all seven ↗"}
          </a>
        </div>
        <img
          className={"reveal"}
          src={"/assets/delivery-farm.webp"}
          alt={"A cow and calf at a dairy farm"}
          loading={"lazy"}
        />
      </section>
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
