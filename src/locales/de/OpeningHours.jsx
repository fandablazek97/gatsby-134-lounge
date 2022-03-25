import { StaticImage } from "gatsby-plugin-image";

// Scroll reveal
import { SlideUp } from "components/scroll-reveal-animations";

export default function OpeningHours() {
  return (
    <section id="oteviraci-doba" className="py-16 md:py-28">
      <div className="ui-wrapper flex flex-col gap-12 md:flex-row-reverse md:items-center md:justify-between md:gap-20 lg:gap-28 xl:gap-40">
        <div className="mx-auto w-full max-w-lg md:basis-1/2">
          <SlideUp
            as="h2"
            className="ui-heading mx-auto text-center font-serif"
            data-heading="lg"
          >
            Öffnungszeiten
          </SlideUp>
          <div className="mx-auto mt-10 divide-y-1 divide-gray-700">
            <SlideUp
              as="div"
              className="flex justify-between py-5 font-sans text-lg font-normal"
            >
              <span className="block">Montag</span>
              <span className="block">13:00 - 23:00</span>
            </SlideUp>
            <SlideUp
              as="div"
              className="flex justify-between py-5 font-sans text-lg  font-normal"
            >
              <span className="block">Dienstag</span>
              <span className="block">13:00 - 23:00</span>
            </SlideUp>
            <SlideUp
              as="div"
              className="flex justify-between py-5 font-sans text-lg  font-normal"
            >
              <span className="block">Mittwoch</span>
              <span className="block">13:00 - 23:00</span>
            </SlideUp>
            <SlideUp
              as="div"
              className="flex justify-between py-5 font-sans text-lg  font-normal"
            >
              <span className="block">Donnerstag</span>
              <span className="block">13:00 - 23:00</span>
            </SlideUp>
            <SlideUp
              as="div"
              className="flex justify-between py-5 font-sans text-lg  font-normal"
            >
              <span className="block">Freitag</span>
              <span className="block">13:00 - 01:00</span>
            </SlideUp>
            <SlideUp
              as="div"
              className="flex justify-between py-5 font-sans text-lg  font-normal"
            >
              <span className="block">Samstag</span>
              <span className="block">15:00 - 01:00</span>
            </SlideUp>
            <SlideUp
              as="div"
              className="flex justify-between py-5 font-sans text-lg  font-normal"
            >
              <span className="block">Sonntag</span>
              <span className="block">15:00 - 22:00</span>
            </SlideUp>
          </div>
        </div>
        <SlideUp className="hidden basis-1/2 md:block">
          <StaticImage
            src="../../assets/images/hero-3.jpg"
            alt="134 Lounge foto"
            placeholder="blurred"
            formats={["avif", "webp", "jpg"]}
            width={2000}
            height={3000}
            loading="lazy"
            className="md:aspect-[3/5]"
          />
        </SlideUp>
      </div>
    </section>
  );
}
