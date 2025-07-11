import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">Made with Flavor. Shared with Love.</h1>
        <p className="about-subtitle">From our family recipe to your doorstep.</p>
      </div>

      <h2 className="section-title">Our Story</h2>
      <div className="about-section">
        <img src="fundraiser.jpeg" alt="Chamoy Candy" className="about-image" />
        <p className="about-text">
          Cardozo Enchilados began in 2023 with a craving — not just for candy, but for connection. What started as a kitchen experiment soon became a hit with friends and family, and we knew we had something special. 
          We mix tradition, love, and our own signature chamoy to create a candy experience like no other.
        </p>
      </div>

      <h2 className="section-title">What Makes Us Different</h2>
      <div className="about-section reverse">
        <p className="about-text">
          Every batch is handcrafted in small quantities to ensure freshness. Our candy is drenched in a secret chamoy and spice blend that hits the perfect balance of sweet, tangy, and spicy. Whether it's your first time or your fiftieth — it always hits.
        </p>
        <img src="wormabout.jpeg" alt="Chamoy Mix" className="about-image" />
      </div>

      <h2 className="faq-title">FAQs</h2>
      <div className="faq">
        <details>
          <summary>Where are you based?</summary>
          <p>We're based in Dallas, TX and operate as a family-run business.</p>
        </details>
        <details>
          <summary>How should I store the candy?</summary>
          <p>Keep them in a cool, dry place away from sunlight. For best taste, eat within 2–3 weeks of delivery.</p>
        </details>
        <details>
          <summary>Can I order in bulk for events or resale?</summary>
          <p>Yes! Reach out to us for custom or bulk orders — we’d love to be part of your event or business.</p>
        </details>
        <details>
          <summary>Do you take custom requests (flavors, levels of spice, etc.)?</summary>
          <p>We’re open to special requests — just leave a note at checkout or message us!</p>
        </details>
      </div>
    </div>
  );
}
