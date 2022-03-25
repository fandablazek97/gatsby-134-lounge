import { HiWifi, HiCreditCard, HiCash, HiSun } from "react-icons/hi";

// Scroll reveal animations
import { SlideUp } from "components/scroll-reveal-animations";

export default function AboutUs() {
  return (
    <section id="o-nas" className="relative py-24 md:py-36 lg:py-48">
      <div className="ui-wrapper">
        <SlideUp
          as="p"
          className="mx-auto max-w-[65ch] text-center text-xl font-thin !leading-[1.8] md:text-2xl"
        >
          Modern shisha bar in the center of Pilsen with a wide range of quality
          tobacco, alcoholic and nonalcoholic cocktails and soft drinks. You can
          find us near the Sady Pětatřicátníků.
        </SlideUp>

        <div className="mx-auto mt-28 grid w-full max-w-5xl grid-cols-2 gap-x-6 gap-y-16 md:grid-cols-4 md:gap-12 lg:mt-36 xl:gap-16">
          <SlideUp as="div" className="col-span-1 flex flex-col items-center">
            <HiWifi className="text-3xl text-primary sm:text-4xl lg:text-5xl" />
            <span className="mt-3 block text-center text-sm font-semibold uppercase sm:text-base">
              Free wifi
            </span>
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-200 col-span-1 flex flex-col items-center"
          >
            <HiCreditCard className="text-3xl text-primary sm:text-4xl lg:text-5xl" />
            <span className="mt-3 block text-center text-sm font-semibold uppercase sm:text-base">
              Payments by card
            </span>
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-400 col-span-1 flex flex-col items-center"
          >
            <HiCash className="text-3xl text-primary sm:text-4xl lg:text-5xl" />
            <span className="mt-3 block text-center text-sm font-semibold uppercase sm:text-base">
              Payments by cash
            </span>
          </SlideUp>
          <SlideUp
            as="div"
            className="reveal-delay-600 col-span-1 flex flex-col items-center"
          >
            <HiSun className="text-3xl text-primary sm:text-4xl lg:text-5xl" />
            <span className="mt-3 block text-center text-sm font-semibold uppercase sm:text-base">
              Outdoor seating
            </span>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
