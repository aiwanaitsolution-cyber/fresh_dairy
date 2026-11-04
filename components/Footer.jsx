import { ClearSelection } from "./Products";
export default function Footer() {
  return (
    <>
      <section className={"closing reveal"}>
        <p className={"eyebrow"}>{"FRESH AT YOUR DOOR. EVERY DAY."}</p>
        <h2>
          {"Fresh day."}
          <br />
          <em>{"Every day."}</em>
        </h2>
        <a className={"button"} href={"/dairy"}>
          {"Explore our dairy "}
          <span>{"↗"}</span>
        </a>
      </section>
      <footer>
        <a
          className={"logo brand-logo"}
          href={"/"}
          aria-label={"FreshDay home"}
        >
          <img
            className={"brand-mark"}
            src={"/assets/brand/freshday-mark.png"}
            alt={""}
          />
          <img
            className={"brand-wordmark"}
            src={"/assets/brand/freshday-wordmark.png"}
            alt={"FreshDay. Priority is only for Purity."}
          />
        </a>
        <p>
          {"A2 Milk · Paneer · Chhach · Dahi"}
          <br />
          {"White Butter · Desi Ghee · Khoya"}
        </p>
        <div>
          <a href={"/about-us"}>{"About us"}</a>
          <a href={"/product"}>{"Product"}</a>
          <a href={"/future-plans"}>{"Future plans"}</a>
          <a href={"/gallery"}>{"Gallery"}</a>
          <ClearSelection />
        </div>
        <section className={"farm-contact"}>
          <strong>{"SHRI SHANKER DAIRY FARM PVT. LTD."}</strong>
          <p>
            {"Near Hanuman Vatika, Vill. Chandpur, Bulandshahr 203001, U.P."}
          </p>
          <p>
            <a href={"tel:+919560370201"}>{"+91 95603 70201"}</a>{" "}
            <span>{"·"}</span>{" "}
            <a href={"tel:+919213227780"}>{"+91 92132 27780"}</a>
          </p>
          <small>{"FSSAI licence: 12720054000195"}</small>
        </section>
        <small>
          {
            "© 2026 FreshDay. Original milk artwork supplied by the brand. Other packaging and app visuals are concepts."
          }
        </small>
      </footer>
    </>
  );
}
