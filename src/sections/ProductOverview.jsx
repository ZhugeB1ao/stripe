import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ProductOverviewImage from "../assets/images/product-overview-cards.png";
import ProductOverviewImageRps from "../assets/images/product-overview-cards-rps.png";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

export default function ProductOverview() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial window size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section id="product-overview" tone="muted">
      <Container className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 w-full lg:max-w-md">
            <strong className="text-brand text-lg">Modular solutions</strong>
            <h2 className="my-8 leading-[1.1] font-semibold">
              A fully integrated suite of financial and payments products
            </h2>
            <p className="mb-8 text-lg">
              Reduce costs, grow revenue, and run your business more efficiently
              on a fully integrated platform. Use Stripe to handle all of your
              payments-related needs, manage revenue operations, and launch (or
              invent) new business models.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="align-center flex w-full justify-center">
            <img
              src={isMobile ? ProductOverviewImageRps : ProductOverviewImage}
              alt="Stripe product overview"
              className="w-full max-w-lg translate-y-10"
            />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
