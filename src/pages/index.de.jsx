// Layout
import AppLayout from "layouts/AppLayout";
import LangLayout from "layouts/de/LangLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import HeroSection from "locales/de/HeroSection";
import AboutUs from "locales/de/AboutUs";
import OpeningHours from "locales/de/OpeningHours";
import Contact from "locales/de/Contact";
import Aftermovie from "locales/de/Aftermovie";
import Adress from "locales/de/Adress";
import Gallery from "locales/de/Gallery";

export default function IndexPage() {
  return (
    <AppLayout>
      <LangLayout>
        <Seo
          title="Shisha- und Cocktailbar in Pilsen"
          description="Shisha-Bar im Zentrum von Pilsen mit einer großen Auswahl an hochwertigen Tabaken, alkoholischen und alkoholfreien Cocktails und Getränken. Sie finden uns in der Nähe der Obstplantagen von The Thirty-Five"
          keywords="Shisha-Bar, 134-Lounge, Lounge, Shisha-Bar Pilsen, Lounge Pilsen, Shisha-Pilz, Bar Pilsen, 134 Plzen"
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
