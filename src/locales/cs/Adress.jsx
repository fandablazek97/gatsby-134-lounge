import { HiLocationMarker } from "react-icons/hi";

export default function Adress() {
  return (
    <section id="adresa" className="ui-wrapper py-12 md:py-24">
      <a
        href="https://www.google.com/maps/place/134+Lounge/@49.7477718,13.3705124,17z/data=!3m1!4b1!4m5!3m4!1s0x470af1d4a543d93d:0x7c48949ba6f70365!8m2!3d49.7477684!4d13.3727064"
        rel="noreferrer"
        target="_blank"
        className="ui-link mx-auto mb-16 flex text-xl lg:mb-24 lg:text-3xl"
        data-link="4"
      >
        <HiLocationMarker className="mr-2 text-primary lg:mr-4" />
        <span className="font-serif">
          Palackého nám. 618/24, 301 17 Plzeň 3
        </span>
      </a>
      <div className="aspect-[3/2] sm:aspect-[16/9] lg:aspect-[16/7]">
        <iframe
          title="Adresa 134 Lounge"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          className="h-full w-full"
          src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Palack%C3%A9ho%20n%C3%A1m.%20618/24,%20301%2017%20Plze%C5%88%203+(134%20Lounge)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </section>
  );
}
