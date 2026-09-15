import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Ecosystem } from "@/components/site/Ecosystem";
import {
  About,
  Advantage,
  ClosingCta,
  Commitments,
  Directory,
  Engagement,
  GlobalPresence,
  Industries,
  OperatingModel,
  Problem,
  Statistics,
  Technology,
  Testimonials,
  Values,
  VisionMission,
} from "@/components/site/Sections";
import { Contact, Footer } from "@/components/site/Contact";

const title = "Nexora360 Global Solutions — Engineering the Future of Global Operations";
const description =
  "Nexora360 Global is a premier 360° corporate capability partner integrating GCC setup, AI-driven automation, enterprise BPO/KPO, customer experience, and finance under one cohesive operating model.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/nexora-logo.svg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#071A3D" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nexora360global.com/" },
      { rel: "icon", href: "/nexora-logo.svg", type: "image/svg+xml" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#071A3D] text-white selection:bg-[#F97316] selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <About />
        <Ecosystem />
        <Directory />
        <Technology />
        <Advantage />
        <GlobalPresence />
        <Statistics />
        <Testimonials />
        <Industries />
        <Values />
        <Commitments />
        <OperatingModel />
        <Engagement />
        <VisionMission />
        <ClosingCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
