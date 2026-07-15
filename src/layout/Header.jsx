import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";

const links = [
  { name: "Solutions", href: "#product-overview" },
  { name: "GlobalCommerce", href: "#global-commerce" },
  { name: "Enterprise", href: "#enterprise" },
  { name: "Startups", href: "#startups" },
  { name: "DeveloperApis", href: "#developer-apis" },
  { name: "LowCode", href: "#low-code" },
];

export default function Header() {
  return (
    <Section tone="transparent" className="z-10 py-5! fixed! top-0! left-0! w-full!">
      <Container className="flex items-center justify-between gap-4">
        <header className="flex w-full items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-white!">Stripe</h2>

            <ul className="flex items-center gap-4 ">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-brand text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="md"
              className="px-4 py-2 text-sm font-medium border-none! text-white!"
            >
              Contact Sales {">"}
            </Button>
            <Button
              variant="light"
              size="md"
              className="px-4 py-2 text-sm font-medium text-[#E17537]!"
            >
              Sign in {">"}
            </Button>
          </div>
        </header>
      </Container>
    </Section>
  );
}
