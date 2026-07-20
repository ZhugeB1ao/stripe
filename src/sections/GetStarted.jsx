import { BadgeDollarSign, BookOpenCheck } from "lucide-react";

import Button from "../components/ui/Button.jsx";
import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import { motion } from "framer-motion";
import payLogo from "../assets/logos/pay.png";
import intergrationLogo from "../assets/logos/intergration.png";

export default function GetStarted() {
  return (
    <Section
      tone="transparent"
      className="py-24! pb-36! lg:py-28! lg:pb-44!"
      style={{
        "--slope-rise": "8.75vw",
      }}
    >
      <div
        aria-hidden="true"
        className="bg-surface absolute inset-0"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - var(--slope-rise)), 0 100%)",
        }}
      />

      <Container className="relative z-10 max-w-(--page-width)">
        <div className="grid gap-12 pb-15 md:pb-40 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-no text-xl">Ready to get started?</h2>
            <p className="mt-5 max-w-105 text-sm leading-relaxed font-normal">
              Explore
              <strong className="text-brand text-sm font-normal">
                {" "}
                Stripe Payments
              </strong>
              , or create an account instantly and start accepting payments. You
              can also contact us to design a custom package for your business.
            </p>
            <div className="mt-6 flex items-center gap-5">
              <Button size="sm">Start now ›</Button>
              <a
                href="#"
                className="text-brand hover:text-ink text-sm font-normal"
              >
                Contact sales ›
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-10 sm:grid-cols-2"
          >
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <img src={payLogo} alt="Pay logo" className="size-24" />
              <h3 className="border-brand border-l-2 pl-3 text-sm font-normal">
                Always know what you pay
              </h3>
              <p className="mt-3 pl-3 text-sm leading-relaxed font-normal">
                Integrated per-transaction pricing with no hidden fees.
              </p>
              <a
                href="#"
                className="text-brand mt-4 block pl-3 text-sm font-normal"
              >
                Pricing details ›
              </a>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <img
                src={intergrationLogo}
                alt="Integration logo"
                className="size-24"
              />
              <h3 className="border-brand border-l-2 pl-3 text-sm font-normal">
                Start your integration
              </h3>
              <p className="mt-3 pl-3 text-sm leading-relaxed font-normal">
                Get up and running with Stripe in as little as 10 minutes.
              </p>
              <a
                href="#"
                className="text-brand mt-4 block pl-3 text-sm font-normal"
              >
                API reference ›
              </a>
            </motion.article>
          </motion.div>
        </div>
      </Container>

      <div className="4xl:w-140 pointer-events-none absolute bottom-0 left-0 z-10 w-20 origin-left skew-y-[-5deg] md:w-40 xl:w-80">
        <div className="relative z-10 -mb-2 ml-[50%] w-[30%]">
          <div className="bg-sky-blue h-6" />
          <div className="h-2 bg-[#0066e6]" />
        </div>
        <div className="bg-brand relative z-4 h-8" />
      </div>

      <div
        className="4xl:w-140 absolute right-0 z-10 h-0 w-20 origin-right skew-y-[-5deg] md:w-40 xl:w-80"
        style={{ bottom: "var(--slope-rise)" }}
      >
        <div className="bg-sky-blue absolute z-10 -mt-8 h-8 w-full" />
        <div className="absolute z-20 -mt-2 ml-[20%] w-[30%]">
          <div className="h-2 bg-[#0066e6]" />
          <div className="bg-brand h-6" />
        </div>
      </div>
    </Section>
  );
}
