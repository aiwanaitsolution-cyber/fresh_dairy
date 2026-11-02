"use client";
import { useEffect, useRef, useState } from "react";
import { useSite } from "./SiteProvider";
import { createDeliveryEnquiry, isValidPin } from "@/lib/delivery.mjs";
export default function DeliveryEnquiry() {
  const { bag } = useSite();
  const [pin, setPin] = useState("");
  const [confirmedPin, setConfirmedPin] = useState("");
  const [error, setError] = useState(false);
  const input = useRef(null);
  const link = useRef(null);
  useEffect(() => {
    if (confirmedPin) link.current?.focus();
  }, [confirmedPin]);
  const submit = (event) => {
    event.preventDefault();
    if (!isValidPin(pin)) {
      setError(true);
      setConfirmedPin("");
      input.current?.focus();
      return;
    }
    setError(false);
    setConfirmedPin(pin);
  };
  return (
    <section className="delivery-check section-pad" id="delivery-check">
      <div className="reveal">
        <p className="eyebrow">HOME DELIVERY, YOUR WAY</p>
        <h2>
          Is FreshDay
          <br />
          <em>near your door?</em>
        </h2>
        <p>
          Share your PIN code with our team to confirm delivery coverage,
          timings and available pack sizes.
        </p>
        <div className="delivery-contact-links">
          <a href="tel:+919560370201">Call +91 95603 70201 ↗</a>
          <a href="tel:+919213227780">Call +91 92132 27780 ↗</a>
        </div>
      </div>
      <form className="delivery-form reveal" onSubmit={submit} noValidate>
        <label htmlFor="deliveryPin">Your delivery PIN code</label>
        <input
          ref={input}
          id="deliveryPin"
          name="pincode"
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={6}
          required
          placeholder="Enter 6-digit PIN code"
          value={pin}
          aria-invalid={error || undefined}
          aria-describedby="deliveryStatus"
          onChange={(event) => {
            setPin(event.target.value.replace(/\D/g, "").slice(0, 6));
            setConfirmedPin("");
            setError(false);
          }}
        />
        <button className="button" type="submit">
          Check delivery options <span>↗</span>
        </button>
        <p id="deliveryStatus" role="status">
          {error
            ? "Please enter a valid 6-digit Indian PIN code."
            : confirmedPin
              ? `PIN ${confirmedPin} noted for your enquiry. Our team will confirm coverage, delivery timings and pack sizes. This is not a confirmed booking.`
              : "Our team confirms serviceability and timings. No payment is collected here."}
        </p>
        {confirmedPin && (
          <a
            ref={link}
            className="button delivery-whatsapp"
            href={createDeliveryEnquiry(confirmedPin, bag)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on WhatsApp ↗
          </a>
        )}
      </form>
    </section>
  );
}
