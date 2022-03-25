import { StaticImage } from "gatsby-plugin-image";

// Scroll reveal
import { SlideUp } from "components/scroll-reveal-animations";

export default function Gallery() {
  return (
    <section className="py-16 md:py-20">
      <div className="ui-wrapper" data-wrapper="lg">
        <SlideUp
          as="h2"
          className="ui-heading mx-auto mb-16 text-center font-serif"
          data-heading="lg"
        >
          Fotogalerie
        </SlideUp>
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-7">
          <SlideUp className="col-span-1">
            <StaticImage
              src="../../assets/images/gallery/134-8.jpg"
              alt="134 Lounge foto"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1500}
              height={1000}
              loading="lazy"
              className="aspect-[3/2] w-full"
            />
          </SlideUp>
          <SlideUp className="reveal-delay-200 col-span-1">
            <StaticImage
              src="../../assets/images/gallery/134-28.jpg"
              alt="134 Lounge foto"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1500}
              height={1000}
              loading="lazy"
              className="aspect-[3/2] w-full"
            />
          </SlideUp>
          <SlideUp className="lg:reveal-delay-400 col-span-2 lg:col-span-1">
            <StaticImage
              src="../../assets/images/gallery/134-12.jpg"
              alt="134 Lounge foto"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1500}
              height={1000}
              loading="lazy"
              className="aspect-[3/2] w-full"
            />
          </SlideUp>
          <SlideUp className="reveal-delay-200 lg:reveal-delay-600 col-span-1">
            <StaticImage
              src="../../assets/images/gallery/134-32.jpg"
              alt="134 Lounge foto"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1500}
              height={1000}
              loading="lazy"
              className="aspect-[3/2] w-full"
            />
          </SlideUp>
          <SlideUp className="col-span-1">
            <StaticImage
              src="../../assets/images/gallery/134-49.jpg"
              alt="134 Lounge foto"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1500}
              height={1000}
              loading="lazy"
              className="aspect-[3/2] w-full"
            />
          </SlideUp>
          <SlideUp className="reveal-delay-200 col-span-2 lg:col-span-1">
            <StaticImage
              src="../../assets/images/gallery/134-20.jpg"
              alt="134 Lounge foto"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1500}
              height={1000}
              loading="lazy"
              className="aspect-[3/2] w-full"
            />
          </SlideUp>
          <SlideUp className="lg:reveal-delay-400 col-span-1">
            <StaticImage
              src="../../assets/images/gallery/134-54.jpg"
              alt="134 Lounge foto"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1500}
              height={1000}
              loading="lazy"
              className="aspect-[3/2] w-full"
            />
          </SlideUp>
          <SlideUp className="reveal-delay-200 lg:reveal-delay-600 col-span-1">
            <StaticImage
              src="../../assets/images/gallery/134-57.jpg"
              alt="134 Lounge foto"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1500}
              height={1000}
              loading="lazy"
              className="aspect-[3/2] w-full"
            />
          </SlideUp>
          <SlideUp className="col-span-2 lg:col-span-1">
            <StaticImage
              src="../../assets/images/gallery/134-58.jpg"
              alt="134 Lounge foto"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1500}
              height={1000}
              loading="lazy"
              className="aspect-[3/2] w-full"
            />
          </SlideUp>
          <SlideUp className="reveal-delay-200 col-span-1">
            <StaticImage
              src="../../assets/images/gallery/134-9.jpg"
              alt="134 Lounge foto"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1500}
              height={1000}
              loading="lazy"
              className="aspect-[3/2] w-full"
            />
          </SlideUp>
          <SlideUp className="lg:reveal-delay-400 col-span-1">
            <StaticImage
              src="../../assets/images/gallery/134-29.jpg"
              alt="134 Lounge foto"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1500}
              height={1000}
              loading="lazy"
              className="aspect-[3/2] w-full"
            />
          </SlideUp>
          <SlideUp className="reveal-delay-200 lg:reveal-delay-600 col-span-2 lg:col-span-1">
            <StaticImage
              src="../../assets/images/gallery/134-19.jpg"
              alt="134 Lounge foto"
              placeholder="blurred"
              formats={["avif", "webp", "jpg"]}
              width={1500}
              height={1000}
              loading="lazy"
              className="aspect-[3/2] w-full"
            />
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
