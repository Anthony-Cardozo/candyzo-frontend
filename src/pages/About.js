import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>

      <p className="about-summary">
        Cardozo Enchilados was founded in 2023 and we sell candy covered in our
        secret chamoy and powder mix, blending tradition with flavor to create
        something unforgettable.
      </p>

      <div className="about-section">
        <img src="chamoy-gummies.png" alt="Chamoy Candy" className="about-image" />
        <p className="about-text">
          Our journey started from a simple kitchen experiment and grew into a
          small business loved by many. We’re proud to bring our family recipe
          to more people every day.
        </p>
      </div>

      <div className="about-section reverse">
        <p className="about-text">
          Every batch is made with care and passion. Our signature mix balances
          sweet, spicy, and tangy flavors to create a one-of-a-kind candy
          experience.
        </p>
        <img src="chamoy-gummies.png" alt="Chamoy Mix" className="about-image" />
      </div>

      <h2 className="team-title">Meet The Team</h2>
      <div className="team-section">
        <div className="team-member">
          <img src="chamoy-gummies.png" alt="Anthony" className="team-image" />
          <p>Anthony</p>
        </div>
        <div className="team-member">
          <img src="chamoy-gummies.png" alt="Andrew" className="team-image" />
          <p>Andrew</p>
        </div>
        <div className="team-member">
          <img src="chamoy-gummies.png" alt="Angela" className="team-image" />
          <p>Angela</p>
        </div>
      </div>

      <h2 className="faq-title">FAQs</h2>
      <div className="faq">
        <details>
          <summary>What makes your candy special?</summary>
          <p>Our homemade chamoy and powder blend gives each piece a unique flavor.</p>
        </details>
        <details>
          <summary>Do you offer delivery?</summary>
          <p>Yes! We offer local delivery and are working on shipping options.</p>
        </details>
        <details>
          <summary>Where are you based?</summary>
          <p>We're based in Dallas, TX and operate as a family-run business.</p>
        </details>
      </div>
    </div>
  );
}
