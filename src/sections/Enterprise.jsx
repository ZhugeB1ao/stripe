import { FileText } from "lucide-react";

import Button from "../components/ui/Button.jsx";
import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import amazonCaseStudy from "../assets/images/enterprise-amazon-pic.png";
import enterpriseLayer from "../assets/images/enterprise-layer.png";
import amazonLogoWhite from "../assets/logos/amazon-white.png";
import amazonLogo from "../assets/logos/amazon.png";
import bmwLogo from "../assets/logos/bmw-grey.png";
import maerskLogo from "../assets/logos/maersk-grey.png";
import twilioLogo from "../assets/logos/twilio-grey.png";
import paymentsLogo from "../assets/logos/payment.png";
import connectLogo from "../assets/logos/connect.png";

const customerLogos = [
  { src: bmwLogo, alt: "BMW", accent: "border-[#6ec5f3]" },
  { src: amazonLogo, alt: "Amazon", accent: "border-[#f7b84b]" },
  { src: maerskLogo, alt: "Maersk", accent: "border-[#7dd3e8]" },
  { src: twilioLogo, alt: "Twilio", accent: "border-[#f08f96]" },
];

export default function Enterprise({ id }) {
  return (
    <Section
      id={id}
      tone="muted"
      className="py-20! md:py-24!"
    >
      <Container className="relative z-10 max-w-(--page-width)">
        <div className="max-w-150">
          <strong className="text-brand text-sm font-semibold">
            Enterprise reinvention
          </strong>

          <h2 className="mt-7 text-3xl leading-[1.15] font-medium md:text-[2rem]">
            Bring agility to your enterprise
          </h2>

          <p className="mt-6 text-sm leading-[1.6] font-medium tracking-[0.01em]">
            You can use Stripe not only to accept payments but also to quickly
            support new markets, upgrade existing systems and tools, go
            direct-to-consumer, and engage customers with subscriptions and
            marketplaces. Get expert integration guidance from our{" "}
            <a href="#enterprise" className="text-brand hover:text-ink">
              professional services team
            </a>{" "}
            and{" "}
            <a href="#enterprise" className="text-brand hover:text-ink">
              certified partners
            </a>{" "}
            so you can see value with Stripe faster.
          </p>

          <Button size="sm" className="mt-5">
            Contact sales <span aria-hidden="true">›</span>
          </Button>
        </div>

        <div className="mt-10 grid items-start lg:grid-cols-4">
          <aside className="order-2 mt-8 grid gap-6 sm:grid-cols-2 lg:order-1 lg:mt-0 lg:flex lg:flex-col lg:pr-6">
            <div className="">
              <strong className="text-ink text-xl font-medium border-brand border-l pl-3">5+</strong>
              <p className="mt-3 text-xs leading-[1.65] font-medium pl-3">
                Amazon businesses on Stripe including Prime, Audible, and Amazon
                Pay.
              </p>
            </div>

            <div className="">
              <strong className="text-ink text-xl font-medium border-brand border-l pl-3 ">50+</strong>
              <p className="mt-3 text-xs leading-[1.65] font-medium pl-3">
                Payment methods available on Stripe
              </p>
            </div>

            <div className="">
              <strong className="text-ink text-xs font-semibold border-brand border-l pl-3">
                Products used
              </strong>
              <ul className="mt-4 space-y-3 pl-3">
                <li className="flex items-center gap-3 text-xs font-medium">
                  <img src={paymentsLogo} alt="" className="size-4" />
                  Payments
                </li>
                <li className="flex items-center gap-3 text-xs font-medium">
                  <img src={connectLogo} alt="" className="size-4" />
                  Connect
                </li>
              </ul>
            </div>
          </aside>

          <article className="shadow-media relative order-1 aspect-810/410 w-full min-w-0 overflow-hidden rounded-md lg:order-2 lg:col-span-3">
            <img
              src={amazonCaseStudy}
              alt="An Amazon package being delivered"
              className="absolute inset-0 size-full object-cover"
            />
            <img
              src={enterpriseLayer}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 size-full object-cover opacity-75"
            />

            <div className="relative flex h-full flex-col justify-between p-5 text-white md:p-6">
              <div className="flex items-start justify-between">
                <img
                  src={amazonLogoWhite}
                  alt="Amazon"
                  className="h-auto w-20"
                />
                <FileText aria-hidden="true" className="size-5" />
              </div>

              <h3 className="max-w-105 text-xl leading-[1.4] font-medium text-white">
                See how Amazon simplified cross-border payments with Stripe
              </h3>
            </div>
          </article>
        </div>

        <ul
          aria-label="Enterprise customers"
          className="mt-8 grid grid-cols-2 lg:grid-cols-4"
        >
          {customerLogos.map((logo) => (
            <li
              key={logo.alt}
              className={`flex h-20 items-center justify-center border-t ${logo.accent}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto max-w-30 object-contain"
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
