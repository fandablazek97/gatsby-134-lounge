import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";

// Configs
import socialLinks from "settings/socialLinks";
import { callToAction } from "settings/cs/navLinks";

// Scroll reveal animations
import { SlideUp } from "components/scroll-reveal-animations";

export default function Contact() {
  return (
    <section id="kontakt" className="ui-wrapper relative my-12 md:my-20">
      <div className="my-20 mx-auto max-w-fit divide-y-1 divide-gray-700 md:grid md:max-w-none md:grid-cols-3 md:divide-y-0 md:divide-x-1">
        <SlideUp
          as="div"
          className="reveal-delay-300 flex items-center justify-center pb-10 md:flex-col md:pb-0"
        >
          <HiPhone className="mr-3 text-3xl text-white md:col-span-1 md:mr-0 md:mb-8 xl:text-5xl" />
          <a
            href={callToAction[0].link}
            target="_blank"
            rel="noreferrer me external"
            aria-label={socialLinks.instagram.ariaLabel}
            className="ui-link text-xl font-medium text-primary xl:text-2xl"
            data-link="4"
          >
            {callToAction[0].label}
          </a>
        </SlideUp>
        <SlideUp
          as="div"
          className="reveal-delay-600 flex items-center justify-center pt-10 pb-10 md:flex-col md:pb-0 md:pt-0"
        >
          <FaInstagram className="mr-3 text-3xl text-white md:col-span-1 md:mr-0 md:mb-8 xl:text-5xl" />
          <a
            href={socialLinks.instagram.link}
            target="_blank"
            rel="noreferrer me external"
            aria-label={socialLinks.instagram.ariaLabel}
            className="ui-link text-xl font-medium text-primary xl:text-2xl"
            data-link="4"
          >
            @134_lounge
          </a>
        </SlideUp>
        <SlideUp
          as="div"
          className="reveal-delay-900 flex items-center justify-center pt-10 md:flex-col md:pt-0"
        >
          <FaFacebookF className="mr-3 text-3xl text-white md:col-span-1 md:mr-0 md:mb-8 xl:text-5xl" />
          <a
            href={socialLinks.facebook.link}
            target="_blank"
            rel="noreferrer me external"
            aria-label={socialLinks.facebook.ariaLabel}
            className="ui-link text-xl font-medium text-primary xl:text-2xl"
            data-link="4"
          >
            @134loungeplzen
          </a>
        </SlideUp>
      </div>
    </section>
  );
}
