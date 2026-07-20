import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import ecomcerceBackground from "../assets/images/global-ecomerce-pic.png";
import { motion } from "framer-motion";

const commerceStats = [
  {
    value: "250M+",
    description: (
      <>API requests per day, peaking at 13,000 requests a second.</>
    ),
  },
  {
    value: "99.999%",
    description: (
      <>
        historical uptime for{" "}
        <a
          href="https://status.stripe.com/"
          className="text-sky-blue transition-colors hover:text-white"
        >
          Stripe services
        </a>
        .
      </>
    ),
  },
  {
    value: "90%",
    description: "of U.S. adults have bought from businesses using Stripe.",
  },
  {
    value: "135+",
    description: "currencies and payment methods supported.",
  },
];

export default function GlobalCommerce({ id }) {
  return (
    <Section
      id={id}
      tone="muted"
      className="4xl:h-210 h-270 py-0! md:h-200 lg:h-180"
      style={{ "--slope-rise": "8.75vw" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#0A2540]"
        style={{
          backgroundImage: `url(${ecomcerceBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          clipPath: "polygon(0 var(--slope-rise), 100% 0, 100% 100%, 0 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <Container className="relative z-10 max-w-(--page-width) pt-60 md:pt-50 lg:pt-61">
          <div className="max-w-93">
            <strong className="text-sky-blue text-base font-semibold">
              Global scale
            </strong>

            <h2 className="mt-7 text-3xl leading-[1.18] font-medium text-white md:text-[2.15rem]">
              The backbone for global commerce
            </h2>

            <p className="mt-6 text-base leading-[1.55] font-medium tracking-[0.01em] text-[#adbdcc]">
              Stripe makes moving money as easy and programmable as moving data.
              Our teams are based in offices around the world and we process
              hundreds of billions of dollars each year for ambitious businesses
              of all sizes.
            </p>
          </div>

          <dl className="mt-15 grid gap-x-8 gap-y-8 sm:grid-cols-2 md:mt-23 lg:grid-cols-4">
            {commerceStats.map((stat) => (
              <div key={stat.value} className="border-sky-blue border-l-2 pl-3">
                <dt className="text-2xl leading-none font-medium text-white">
                  {stat.value}
                </dt>
                <dd className="mt-3 max-w-53 text-[13px] leading-normal font-medium tracking-[0.01em] text-[#adbdcc]">
                  {stat.description}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </motion.div>
    </Section>
  );
}
