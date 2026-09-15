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
  Industries,
  OperatingModel,
  Problem,
  Values,
  VisionMission,
} from "@/components/site/Sections";
import { Contact, Footer } from "@/components/site/Contact";

const title = "Nexora360 Global Solutions — One Partner. Every Business Need.";
const description =
  "Nexora360 is a global 360° business capability partner integrating GCC, BPO, KPO, digital, customer experience, HR, finance, data and AI & automation under one operating model.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.nexora360global.com/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <About />
        <Ecosystem />
        <Directory />
        <Advantage />
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
    </>
  );
}
