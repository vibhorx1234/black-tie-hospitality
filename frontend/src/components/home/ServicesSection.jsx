import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/services";
import React from "react";

export default function ServicesSection() {
  return (
    <section
      style={{
        padding: "6rem 2rem",
        background: "#f7f5f2",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <SectionHeader
          label="Our Services"
          title="Everything Your Property Needs"
          subtitle="Comprehensive property management solutions designed to maximize returns and deliver hassle-free ownership."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="services-grid"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} dark={false} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}