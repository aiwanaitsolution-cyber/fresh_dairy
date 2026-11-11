import Hero from "@/components/Hero";
import { ProductGrid, ProductFilters } from "@/components/Products";
import DeliveryEnquiry from "@/components/DeliveryEnquiry";
import RoutinePlanner from "@/components/RoutinePlanner";
import RecipeInspiration from "@/components/RecipeInspiration";
import AppPreview from "@/components/AppPreview";

const slides = [
  {
    image: "/assets/delivery-farm.webp",
    alt: "A Gir cow and calf in a pasture at dawn",
    kicker: "THE FRESHDAY WAY",
    title: "From our dairy.|To your doorstep.",
    copy: "Original glass-bottled A2 milk and dairy favourites for your home.",
    cta: "Check availability",
    url: "#delivery-check",
  },
  {
    image: "/assets/delivery-door.webp",
    alt: "Dairy handover at a modern Indian home",
    kicker: "A LITTLE MORE CARE",
    title: "Close to nature.|Closer to home.",
    copy: "Meet Shri Shanker Dairy Farm Pvt. Ltd. and discover the FreshDay range.",
    cta: "Our dairy",
    url: "/dairy",
  },
  {
    image: "/assets/delivery-crate.webp",
    alt: "A home delivery tote with dairy essentials",
    kicker: "YOUR EVERYDAY FRESH",
    title: "A familiar bottle.|A fresh routine.",
    copy: "Make room for the dairy you love, right where your day begins.",
    cta: "Check availability",
    url: "#delivery-check",
  },
];

export default function OurWayContent() {
  return (
    <>
      <Hero slides={slides} />
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
      <section className={"glass-feature section-pad"}>
        <div className={"glass-photo reveal"}>
          <img
            src={"/assets/app-3.webp"}
            alt={"A relaxed milk break by a garden window"}
            loading={"lazy"}
          />
        </div>
        <div className={"reveal"}>
          <p className={"eyebrow"}>{"A CLEAR CHOICE"}</p>
          <h2>
            {"Glass on the table."}
            <br />
            <em>{"Joy in the details."}</em>
          </h2>
          <p>
            {
              "Our A2 milk is presented in the original blue-labelled glass bottles. A considered part of the Fresh Day experience, from the first look to your first pour."
            }
          </p>
          <p className={"caption"}>
            {
              "Final bottle-return or deposit arrangements will be shared at launch."
            }
          </p>
        </div>
      </section>
      <section className={"values section-pad"}>
        <h2 className={"reveal"}>
          {"The things"}
          <br />
          <em>{"we care about."}</em>
        </h2>
        <div>
          <article className={"reveal"}>
            <span>{"01"}</span>
            <div>
              <h3>{"Everyday usefulness"}</h3>
              <p>
                {
                  "Milk for mornings, curd for lunch and paneer for the recipes you love."
                }
              </p>
            </div>
          </article>
          <article className={"reveal"}>
            <span>{"02"}</span>
            <div>
              <h3>{"Clear information"}</h3>
              <p>
                {
                  "Product labels, storage instructions and nutrition information help you make informed choices."
                }
              </p>
            </div>
          </article>
          <article className={"reveal"}>
            <span>{"03"}</span>
            <div>
              <h3>{"A simpler routine"}</h3>
              <p>
                {
                  "Our upcoming app is designed to bring your dairy orders and delivery updates together."
                }
              </p>
            </div>
          </article>
        </div>
      </section>
      <DeliveryEnquiry />
    </>
  );
}
