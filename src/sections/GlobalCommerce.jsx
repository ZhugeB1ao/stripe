import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import globalCommerceBackground from "../assets/images/global-ecomerce-background.png";

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
          className="text-[#00d4ff] transition-colors hover:text-white"
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
    >
      <img
        src={globalCommerceBackground}
        alt=""
        aria-hidden="true"
        className="absolute top-0 h-[115%] w-full max-w-none min-w-322.5 object-cover object-top sm:h-full"
      />

      <Container className="relative z-10 max-w-247.5 pt-60 md:pt-50 lg:pt-61">
        <div className="max-w-93">
          <strong className="text-base font-semibold text-[#00d4ff]">
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
            <div key={stat.value} className="border-l-2 border-[#00d4ff] pl-3">
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
    </Section>
  );
}
