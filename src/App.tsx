import { Navbar } from "@/components/Navbar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Mechanism } from "@/components/sections/Mechanism";
import { Offer } from "@/components/sections/Offer";
import { PartnerFit } from "@/components/sections/PartnerFit";
import { PartnerEconomics } from "@/components/sections/PartnerEconomics";
import { Proof } from "@/components/sections/Proof";
import { Role } from "@/components/sections/Role";
import { Implementation } from "@/components/sections/Implementation";
import { Objections } from "@/components/sections/Objections";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-parchment-100">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Mechanism />
        <Offer />
        <PartnerFit />
        <PartnerEconomics />
        <Proof />
        <Role />
        <Implementation />
        <Objections />
        <FinalCta />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
