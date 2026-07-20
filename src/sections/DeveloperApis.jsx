import api1 from "../assets/logos/api-1.png";
import api2 from "../assets/logos/api-2.png";
import api3 from "../assets/logos/api-3.png";
import api4 from "../assets/logos/api-4.png";
import Button from "../components/ui/Button.jsx";
import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import developerApisImage from "../assets/images/developer-apis-pic.png";
import { motion } from "framer-motion";

const developerFeatures = [
  {
    icon: api1,
    title: "Use Stripe with your stack",
    description:
      "We offer client and server libraries in everything from React and PHP to .NET and iOS.",
    link: "See libraries",
  },
  {
    icon: api2,
    title: "Try no-code options",
    description:
      "Customize and deploy payments interfaces directly from the Stripe Dashboard.",
    link: "Explore no-code",
  },
  {
    icon: api3,
    title: "Explore prebuilt integrations",
    description:
      "Connect Stripe to more than a hundred tools including Adobe, Salesforce, and Xero.",
    link: "Browse App Marketplace",
  },
  {
    icon: api4,
    title: "Build on Stripe Apps",
    description:
      "Create an app just for your team or for the millions of businesses on Stripe.",
    link: "Learn about Apps",
  },
];

export default function DeveloperApis({ id }) {
  return (
    <Section
      id={id}
      tone="white"
      className="h-450 overflow-hidden py-0! md:h-400 lg:h-250"
      style={{ "--slope-rise": "8.75vw" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#0A2540]"
        style={{
          clipPath:
            "polygon(0 var(--slope-rise), 100% 0, 100% calc(100% - var(--slope-rise)), 0 100%)",
        }}
      />

      <Container className="relative z-10 h-full max-w-(--page-width) py-36 lg:py-44">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <strong className="text-sky-blue text-sm font-semibold">
              Designed for developers
            </strong>
            <h2 className="mt-7 text-3xl leading-[1.15] font-medium text-white md:text-4xl">
              Ship more quickly with powerful and easy-to-use APIs
            </h2>
            <p className="mt-6 text-sm leading-[1.65] font-medium text-[#adbdcc]">
              Save engineering time with unified payments functionality. We
              obsess over the maze of gateways, payments rails, and financial
              institutions that make up the global economic landscape so that
              your teams can build what you need on one platform.
            </p>
            <Button size="sm" variant="sky" className="mt-6">
              Read the docs <span aria-hidden="true">›</span>
            </Button>
          </motion.div>

          <motion.img
            src={developerApisImage}
            alt="Stripe API code and command-line events"
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          />
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {developerFeatures.map(
            ({ icon, title, description, link }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <img
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  className="ml-3 size-10"
                />
                <h3 className="border-sky-blue mt-4 border-l-2 pl-3 text-sm font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 pl-3 text-xs leading-relaxed text-[#adbdcc]">
                  {description}
                </p>
                <a
                  href="#developer-apis"
                  className="text-sky-blue mt-4 inline-block pl-3 text-xs font-semibold hover:text-white"
                >
                  {link} ›
                </a>
              </motion.article>
            ),
          )}
        </div>
      </Container>
    </Section>
  );
}
