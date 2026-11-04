import { ProductFilters, ProductGrid } from "@/components/Products";
import DeliveryEnquiry from "@/components/DeliveryEnquiry";

function EditorialHero({ eyebrow, title, copy, image, alt, action, href }) {
  return (
    <section className="brand-editorial-hero">
      <img src={image} alt={alt} />
      <div className="brand-editorial-hero-shade" />
      <div className="brand-editorial-hero-copy reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        {action && <a className="button" href={href}>{action} <span>↗</span></a>}
      </div>
    </section>
  );
}

function PageIntro({ eyebrow, title, copy }) {
  return (
    <section className="brand-page-intro section-pad">
      <p className="eyebrow reveal">{eyebrow}</p>
      <h2 className="reveal">{title}</h2>
      <p className="brand-page-intro-copy reveal">{copy}</p>
    </section>
  );
}

export function AboutUsContent() {
  return (
    <>
      <EditorialHero eyebrow="A DAIRY FAMILY, CLOSE TO HOME" title={<>A better kind of <em>morning.</em></>} copy="FreshDay began with a simple belief: when the source is cared for, the everyday feels better." image="/assets/generated/about-farm.png" alt="Farmer walking with cows beside a dairy shed at sunrise" action="Meet our dairy" href="/product" />
      <PageIntro eyebrow="ABOUT FRESHDAY" title={<>Good dairy starts with <em>good intent.</em></>} copy="We are a family-run dairy initiative from Shri Shankar Dairy Farm, bringing original glass-bottled A2 milk and familiar dairy favourites closer to the homes we serve." />
      <section className="brand-story-split section-pad">
        <div className="brand-story-image reveal"><img src="/assets/generated/about-farm.png" alt="A cared-for dairy farm in the morning" loading="lazy" /></div>
        <div className="brand-story-copy reveal"><p className="eyebrow">FROM OUR FARM</p><h2>Closer to the source. <em>Closer to you.</em></h2><p>Every bottle begins with the people, animals and routines that make a dairy work. We keep that connection visible, from the farm to the first pour at home.</p><p>FreshDay is being built patiently, with clear information, thoughtful delivery and products made for real Indian kitchens.</p><a className="text-link" href="/future-plans">See what is next ↗</a></div>
      </section>
      <section className="brand-values section-pad">
        <div className="section-heading reveal"><p className="eyebrow">WHAT GUIDES US</p><h2>The everyday deserves <em>care.</em></h2></div>
        <div className="brand-value-grid">
          <article className="reveal"><span>01</span><h3>Honest by nature</h3><p>Clear product information, familiar ingredients and a straightforward way to ask about delivery.</p></article>
          <article className="reveal"><span>02</span><h3>Made for real life</h3><p>Milk for chai, curd for lunch and paneer for the recipes that bring everyone to the table.</p></article>
          <article className="reveal"><span>03</span><h3>Fresh, thoughtfully</h3><p>We are designing a delivery experience that feels calm, reliable and easy to make part of your routine.</p></article>
        </div>
      </section>
      <DeliveryEnquiry />
    </>
  );
}

export function ProductContent() {
  return (
    <>
      <EditorialHero eyebrow="THE FRESHDAY COLLECTION" title={<>The good stuff, <em>kept simple.</em></>} copy="Seven dairy favourites for the way your home actually eats, from morning chai to the last spoonful." image="/assets/generated/product-still-life.png" alt="Milk, paneer, yogurt and butter arranged on a sunlit kitchen table" action="Browse the range" href="#collection" />
      <section className="brand-product-intro section-pad" id="collection">
        <div className="section-heading reveal"><p className="eyebrow">YOUR EVERYDAY ESSENTIALS</p><h2>One fresh collection. <em>So many meals.</em></h2><p className="brand-section-copy">Explore A2 Milk, Paneer, Chhach, Dahi, White Butter, Desi Ghee and Khoya. Select a favourite to see its listed rate and enquire about availability.</p><ProductFilters /></div>
        <ProductGrid />
        <p className="caption">Rates are from the supplied FreshDay product list. Confirm pack sizes, availability and delivery timing with the FreshDay team.</p>
      </section>
      <section className="brand-product-note section-pad"><div className="brand-product-note-image reveal"><img src="/assets/generated/product-still-life.png" alt="Fresh dairy products ready for the kitchen" loading="lazy" /></div><div className="reveal"><p className="eyebrow">FROM FIRST POUR TO LAST SPOONFUL</p><h2>Good ingredients make <em>room for you.</em></h2><p>Keep breakfast easy, make lunch more comforting and let dinner take its own delicious direction.</p><a className="text-link" href="/gallery">See FreshDay in the everyday ↗</a></div></section>
      <DeliveryEnquiry />
    </>
  );
}

export function FuturePlansContent() {
  return (
    <>
      <EditorialHero eyebrow="WHAT WE ARE BUILDING NEXT" title={<>A fresher routine is <em>on its way.</em></>} copy="We are bringing the care of our dairy into a calmer, more connected delivery experience." image="/assets/generated/future-delivery.png" alt="Insulated dairy delivery crate and glass bottle on a doorstep at sunrise" action="Explore the story" href="#roadmap" />
      <PageIntro eyebrow="THE NEXT CHAPTER" title={<>Small steps. <em>Useful progress.</em></>} copy="FreshDay is growing from a dairy collection into a complete everyday routine. The plan is practical: make it easier to discover, order and receive the things your home already loves." />
      <section className="brand-roadmap section-pad" id="roadmap"><div className="brand-roadmap-image reveal"><img src="/assets/generated/future-delivery.png" alt="Future FreshDay delivery experience" loading="lazy" /></div><div className="brand-roadmap-list"><article className="reveal"><span>NOW</span><div><h3>Build the collection</h3><p>Introduce the FreshDay range, share clear information and learn which homes are ready for regular delivery.</p></div></article><article className="reveal"><span>NEXT</span><div><h3>Make delivery easier</h3><p>Bring availability, timings and delivery updates into one simple customer journey.</p></div></article><article className="reveal"><span>SOON</span><div><h3>Put the routine in your pocket</h3><p>Our upcoming app is planned to support ordering, delivery tracking and subscription management.</p></div></article></div></section>
      <section className="brand-future-band section-pad reveal"><p className="eyebrow">A QUIETLY BETTER MORNING</p><h2>More fresh. Less <em>friction.</em></h2><p>We will share launch updates as each part is ready.</p><a className="button" href="/app">See the app concept <span>↗</span></a></section>
      <DeliveryEnquiry />
    </>
  );
}

const galleryItems = [
  ["/assets/generated/gallery-life.png", "A bottle at the heart of the kitchen", "gallery-feature"],
  ["/assets/generated/about-farm.png", "A dairy morning begins at the farm", ""],
  ["/assets/generated/product-still-life.png", "The essentials, beautifully simple", ""],
  ["/assets/delivery-door.webp", "Goodness comes home", ""],
  ["/assets/delivery-table.webp", "Made for the moments you share", "gallery-feature"],
  ["/assets/farm.webp", "A little closer to nature", ""],
];

export function GalleryContent() {
  return (
    <>
      <EditorialHero eyebrow="A FRESH DAY LOOKS LIKE THIS" title={<>From the farm, <em>to the frame.</em></>} copy="A visual diary of bottles, breakfasts, fields and the small rituals that make a day feel good." image="/assets/generated/gallery-life.png" alt="Fresh milk bottle and dairy preparation in a sunny farm kitchen" action="View the gallery" href="#gallery" />
      <PageIntro eyebrow="FRESHDAY, IN MOMENTS" title={<>The best things are <em>often everyday.</em></>} copy="A pour into chai. A spoonful of dahi. Paneer on the board. A delivery waiting at the door. This is the FreshDay world, one honest moment at a time." />
      <section className="brand-gallery section-pad" id="gallery"><div className="brand-gallery-grid">{galleryItems.map(([image, alt, className]) => <figure className={"brand-gallery-item " + className} key={image}><img src={image} alt={alt} loading="lazy" /><figcaption>{alt}</figcaption></figure>)}</div></section>
      <section className="brand-gallery-close section-pad"><div className="reveal"><p className="eyebrow">KEEP EXPLORING</p><h2>Find your <em>fresh.</em></h2><a className="button" href="/product">Explore our dairy <span>↗</span></a></div></section>
    </>
  );
}
