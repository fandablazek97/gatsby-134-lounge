import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Components
import SocialMedia from "components/SocialMedia";

// Hooks
import useMediaQuery from "hooks/useMediaQuery";

// Icons
import { HiArrowDown } from "react-icons/hi";

// Swiper
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

function ScrollDownArrow() {
  return (
    <AnchorLink
      to="/#o-nas"
      title="posunout dolů"
      className="absolute bottom-36 left-1/2 z-10 flex -translate-x-1/2 text-white opacity-100 transition-opacity duration-default hover:opacity-80 lg:bottom-16 lg:left-[9vw]"
    >
      <HiArrowDown className="mr-2" />
      <span className="text-sm font-medium uppercase">Scroll down</span>
    </AnchorLink>
  );
}

export default function HeroSection() {
  SwiperCore.use([Autoplay, EffectFade]);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <header id="top" className="h-screen w-screen">
      <Swiper
        speed={1200}
        slidesPerView={1}
        spaceBetween={0}
        effect={"fade"}
        loop="false"
        autoplay={{
          delay: 3500,
        }}
        className="relative h-full min-h-[512px] w-full"
      >
        <div className="absolute inset-0 z-5 h-full w-full bg-gray-900 opacity-60"></div>
        <h1 className="absolute top-1/2 left-1/2 z-10 min-w-max -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-serif text-3xl font-bold uppercase text-white sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
          134 Lounge Pilsen
        </h1>
        <ScrollDownArrow />
        {isDesktop && (
          <SocialMedia className="absolute bottom-16 z-10 lg:right-[5vw]" />
        )}
        {/* Main slides */}

        {/* Slide 1 */}
        <SwiperSlide className="block h-full w-full overflow-hidden">
          <StaticImage
            src="../../assets/images/gallery/134-28.jpg"
            alt="134 lounge"
            placeholder="blurred"
            formats={["avif", "webp", "jpg"]}
            width={3000}
            height={2000}
            loading="eager"
            className="h-full w-full"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="block h-full w-full overflow-hidden">
          <StaticImage
            src="../../assets/images/134-20.jpg"
            alt="134 lounge"
            placeholder="blurred"
            formats={["avif", "webp", "jpg"]}
            width={3000}
            height={2000}
            loading="eager"
            className="h-full w-full"
          />
        </SwiperSlide>

        {/* Slide 3 - verze pro desktop a telefon jsou rozdílné */}
        {isDesktop ? (
          <SwiperSlide className="block h-full w-full overflow-hidden">
            <StaticImage
              src="../../assets/images/gallery/134-12.jpg"
              alt="134 lounge"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={3000}
              height={2000}
              loading="eager"
              className="h-full w-full"
            />
          </SwiperSlide>
        ) : (
          <SwiperSlide className="block h-full w-full overflow-hidden">
            <StaticImage
              src="../../assets/images/hero-3.jpg"
              alt="134 lounge"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1000}
              height={1500}
              loading="eager"
              className="h-full w-full"
            />
          </SwiperSlide>
        )}

        {/* Slide 4 - verze pro desktop a telefon jsou rozdílné */}
        {isDesktop ? (
          <SwiperSlide className="block h-full w-full overflow-hidden">
            <StaticImage
              src="../../assets/images/gallery/134-49.jpg"
              alt="134 lounge"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={3000}
              height={2000}
              loading="eager"
              className="h-full w-full"
            />
          </SwiperSlide>
        ) : (
          <SwiperSlide className="block h-full w-full overflow-hidden">
            <StaticImage
              src="../../assets/images/hero-4.jpg"
              alt="134 lounge"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1000}
              height={1500}
              loading="eager"
              className="h-full w-full"
            />
          </SwiperSlide>
        )}
      </Swiper>
    </header>
  );
}
