import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import startupAtlas from "../assets/images/startups-pic-1.png";
import startupCheckout from "../assets/images/startups-pic-2.png";
import startupPaymentLinks from "../assets/images/startups-pic-3.png";
import startupInvoice from "../assets/images/startups-pic-4.png";
import atlasLogo from "../assets/logos/atlas.png";
import checkoutLogo from "../assets/logos/checkout.png";
import paymentLinksLogo from "../assets/logos/payment.png";
import invoicingLogo from "../assets/logos/invoicing.png";
import StartupCard from "../components/ui/StartUpCard.jsx";

const startupColumns = [
  [
    {
      image: startupAtlas,
      product: "Atlas",
      accent: "bg-amber-400",
      icon: atlasLogo,
      title: "Incorporate your company",
      description:
        "Form a legal entity, issue stock, and start accepting payments.",
    },
    {
      image: startupCheckout,
      product: "Checkout",
      icon: checkoutLogo,
      accent: "bg-violet-500",
      title: "Sell to consumers",
      description:
        "Launch a B2C business with a prebuilt payment page that’s optimized for conversion.",
    },
  ],
  [
    {
      image: startupPaymentLinks,
      product: "Payment Links",
      icon: paymentLinksLogo,
      accent: "bg-cyan-400",
      title: "Validate your ideas",
      description:
        "Test your product idea by generating payment links with little to no code.",
    },
    {
      image: startupInvoice,
      product: "Invoicing",
      icon: invoicingLogo,
      accent: "bg-emerald-500",
      title: "Sell to businesses",
      description:
        "Launch a B2B business and collect one-time or recurring payments from customers.",
    },
  ],
];

export default function Startups({ id }) {
  return (
    <Section id={id} tone="white" className="py-24! lg:py-32!">
      <Container className="max-w-(--page-width)">
        <div className="max-w-150">
          <strong className="text-brand text-sm font-semibold">
            Built for growth
          </strong>
          <h2 className="mt-7 text-3xl leading-[1.15] font-medium md:text-[2rem]">
            Take your startup farther, faster
          </h2>
          <p className="mt-6 text-sm leading-[1.65] font-normal">
            Startups build on Stripe to launch faster, adapt as they grow, and
            automate workflows to do more with less. Build your own API-based
            integration or use our low- to no-code solutions, which are simple
            enough for easy implementation and powerful enough to scale as fast
            and as far as you need.
          </p>
        </div>

        <div className="mt-25 grid gap-8 md:grid-cols-2">
          {startupColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`space-y-8 ${columnIndex === 1 ? "md:-mt-20" : ""}`}
            >
              {column.map((card) => (
                <StartupCard key={card.title} card={card} />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
