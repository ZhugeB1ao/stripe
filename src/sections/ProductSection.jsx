import Button from "../components/ui/Button.jsx";
import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import { motion } from "framer-motion";
export default function ProductSection({
  id,
  name,
  logo,
  title,
  description,
  ctaLabel,
  image,
  imageAlt,
  relatedProducts = [],
}) {
  return (
    <Section id={id} tone="muted">
      <Container className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 w-full lg:max-w-md">
            <div className="mb-4 flex items-center gap-2">
              <img src={logo} alt="" aria-hidden="true" className="size-5" />
              <strong className="text-brand text-lg font-medium">{name}</strong>
            </div>

            <h3 className="my-6 leading-[1.1] font-semibold">{title}</h3>

            <p className="text-md mb-6">{description}</p>

            <Button variant="primary">
              {ctaLabel} <span aria-hidden="true">›</span>
            </Button>

            {relatedProducts.length > 0 && (
              <div className="mt-12">
                <strong className="text-ink text-sm">See also</strong>
                <ul className="mt-3 flex flex-col gap-2">
                  {relatedProducts.map((product) => (
                    <li key={product.name} className="text-sm">
                      <a
                        href={product.href}
                        className="text-brand hover:text-ink font-semibold"
                      >
                        {product.name}
                      </a>
                      <span className="text-copy"> {product.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex w-full justify-center">
            <img
              src={image}
              alt={imageAlt}
              className="w-full max-w-md translate-y-10 object-contain"
            />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
