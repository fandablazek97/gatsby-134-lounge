// Layout
import AppLayout from "layouts/AppLayout";
import LangLayout from "layouts/ru/LangLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import HeroSection from "locales/ru/HeroSection";
import AboutUs from "locales/ru/AboutUs";
import OpeningHours from "locales/ru/OpeningHours";
import Contact from "locales/ru/Contact";
import Aftermovie from "locales/ru/Aftermovie";
import Adress from "locales/ru/Adress";
import Gallery from "locales/ru/Gallery";

export default function IndexPage() {
  return (
    <AppLayout>
      <LangLayout>
        <Seo
          title="Шиша и коктейль-бар в Пльзень"
          description="Шиша-бар в центре города Пльзень с широким ассортиментом качественных табачных, алкогольных и безалкогольных коктейлей и напитков. Вы найдете нас возле улицы Сады Тридцати Пяти."
          keywords="кальян-бар, 134 лаунж, лаунж, кальян-бар пльзень, лаунж пльзень, кальян пльзень, бар пльзень, 134 пльзень"
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
