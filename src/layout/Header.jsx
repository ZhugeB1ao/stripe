import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section
      tone="transparent"
      className={`fixed! top-0! left-0! z-20 w-full! py-5! transition-all duration-100 ${
        isScrolled
          ? "bg-white/90! shadow-md backdrop-blur-md"
          : "bg-transparent!"
      }`}
    >
      <Container>
        <header className="flex w-full items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h2
              className={`text-xl font-bold ${
                isScrolled ? "text-ink!" : "text-white!"
              }`}
            >
              Stripe
            </h2>

            <ul className="hidden items-center gap-4 lg:flex">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`hover:text-brand text-sm font-medium ${
                      isScrolled ? "text-ink!" : "text-white!"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <Button
              variant="outline"
              size="md"
              className="border-none! px-4 py-2 text-sm font-medium text-white!"
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

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className={`flex size-10 items-center justify-center rounded-full bg-white/2 transition-colors hover:bg-white/30 lg:hidden ${
              isScrolled ? "text-ink!" : "text-white!"
            }`}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </header>

        {isMenuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="mt-4 rounded-2xl bg-white/90! backdrop-blur-md p-5 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-ink hover:bg-surface block rounded-lg px-3 py-2 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </Section>
  );
}
