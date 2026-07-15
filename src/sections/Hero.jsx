import Button from "../components/ui/Button.jsx";
import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import heroBackground from "../assets/images/hero-background.png";
import heroDashboard from "../assets/images/hero-dashboard.png";
import heroPhone from "../assets/images/hero-phone.png";
import amazonLogo from "../assets/logos/amazon.png";
import googleLogo from "../assets/logos/google.png";
import shopifyLogo from "../assets/logos/shopify.png";
import salesforceLogo from "../assets/logos/salesforce.png";
import maerskLogo from "../assets/logos/maersk-grey.png";
import urbnLogo from "../assets/logos/urbn.png";
import whatsAppLogo from "../assets/logos/whatsapp.png";
import bmwLogo from "../assets/logos/bmw.png";
import marriottLogo from "../assets/logos/marriott.png";

const customerLogos = [
  { src: amazonLogo, alt: "Amazon" },
  { src: salesforceLogo, alt: "Salesforce" },
  { src: googleLogo, alt: "Google" },
  { src: urbnLogo, alt: "URBN" },
  { src: shopifyLogo, alt: "Shopify" },
  { src: whatsAppLogo, alt: "WhatsApp" },
  { src: bmwLogo, alt: "BMW" },
  { src: marriottLogo, alt: "Marriott" },
];

export default function HeroSection({ id }) {
  return (
    <Section id={id} tone="white">
      <Container>
        <img
          src={heroBackground}
          alt="Stripe background"
          className="4xl:h-110 absolute top-0 left-0 h-83 w-[1920px] max-w-none md:h-88 xl:h-100"
        />

        <div className="4xl:max-w-xl relative z-10 py-10 md:max-w-md">
          <h1 className="4xl:text-7xl pt-15 text-4xl leading-[1.1] md:text-5xl lg:pt-0 lg:text-6xl">
            Financial infrastructure for the internet
          </h1>

          <p className="text-ink my-6 text-lg">
            Millions of companies of all sizes use Stripe online and in person
            to accept payments, send payouts, automate financial processes, and
            ultimately grow revenue.
          </p>

          <div className="flex gap-4">
            <Button variant="dark">Start now {">"}</Button>
            <Button variant="outline">Contact sales {">"}</Button>
          </div>
        </div>

        <div className="absolute top-17 -right-1000 h-175 w-250 origin-top-right scale-[0.90] md:-right-120 lg:-right-90 xl:-right-40 4xl:right-0">
          <img
            src={heroPhone}
            alt="Stripe Phone"
            className="absolute top-15 left-25 z-10 object-contain"
          />
          <img
            src={heroDashboard}
            alt="Stripe dashboard showing payment analytics"
            className="absolute top-0 right-0 object-contain"
          />
        </div>

        <div
          aria-label="Customers using Stripe"
          className="mt-30 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {customerLogos.map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
