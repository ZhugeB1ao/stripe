import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import productOverviewImage from "../assets/images/product-overview-cards.png";

export default function ProductOverview() {
  return (
    <Section id="product-overview" tone="muted">
      <Container className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="mb-4">
          <strong className="text-brand text-lg">
            Modular solutions
          </strong>
          <h2 className="my-8 leading-[1.1]">
            A fully integrated suite of financial and payments products
          </h2>
          <p className="mb-8 text-lg">
            Reduce costs, grow revenue, and run your business more efficiently
            on a fully integrated platform. Use Stripe to handle all of your
            payments-related needs, manage revenue operations, and launch (or
            invent) new business models.
          </p>
        </div>

        <img
          src={productOverviewImage}
          alt="Stripe product overview"
          className="w-full max-w-lg translate-y-10"
        />
      </Container>
    </Section>
  );
}
