import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Mechanism } from "@/components/sections/Mechanism";
import { Offer } from "@/components/sections/Offer";
import { Proof } from "@/components/sections/Proof";
import { Role } from "@/components/sections/Role";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <div className="bg-ink-950 text-bone-100 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Mechanism />
        <Offer />
        <Proof />
        <Role />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
