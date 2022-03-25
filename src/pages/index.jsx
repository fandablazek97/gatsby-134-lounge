// Layout
import AppLayout from "layouts/AppLayout";
import LangLayout from "layouts/cs/LangLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import HeroSection from "locales/cs/HeroSection";
import AboutUs from "locales/cs/AboutUs";
import OpeningHours from "locales/cs/OpeningHours";
import Contact from "locales/cs/Contact";
import Aftermovie from "locales/cs/Aftermovie";
import Adress from "locales/cs/Adress";
import Gallery from "locales/cs/Gallery";

export default function IndexPage() {
  return (
    <AppLayout>
      <LangLayout>
        <Seo
          title="Shisha & Cocktail bar v Plzni"
          description="Shisha bar v centru Plzně s širokou nabídkou kvalitních tabáků, alkoholických a nealkoholických koktejlů a nápojů. Najdete nás nedaleko sadů Pětatřicátníků"
          keywords="shisha bar, 134 lounge, lounge, shish bar plzen, lounge plzen, vodni dymka plzen, bar plzen, 134 plzen"
        />

        <HeroSection />

        <AboutUs />

        <Aftermovie />

        <OpeningHours />

        <Contact />

        <Adress />

        <Gallery />
      </LangLayout>
    </AppLayout>
  );
}
