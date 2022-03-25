// Layout
import AppLayout from "layouts/AppLayout";
import LangLayout from "layouts/en/LangLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import HeroSection from "locales/en/HeroSection";
import AboutUs from "locales/en/AboutUs";
import OpeningHours from "locales/en/OpeningHours";
import Contact from "locales/en/Contact";
import Aftermovie from "locales/en/Aftermovie";
import Adress from "locales/en/Adress";
import Gallery from "locales/en/Gallery";

export default function IndexPage() {
  return (
    <AppLayout>
      <LangLayout>
        <Seo
          title="Shisha & Cocktail bar in Pilsen"
          description="Shisha bar in Pilsen with a wide range of quality tobacco, alcoholic and nonalcoholic cocktails and soft drinks. You can find us near the Sady Pětatřicátníků."
          keywords="shisha bar, 134 lounge, lounge, shish bar plzen, lounge plzen, hookah pilsen, bar plzen, 134 plzen, hookah bar pilsen, shisha bar pilsen"
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
