import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import About from "@/components/About";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <CaseStudy />
        <Services />
        <About />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
