import Container from "../components/ui/Container.jsx";
import logoDark from "../assets/logos/stripe-2.png";
import { Navigation } from "lucide-react";

const productLinks = [
  "Products & Pricing",
  "Pricing",
  "Atlas",
  "Billing",
  "Capital",
  "Checkout",
  "Climate",
  "Connect",
  "Data Pipeline",
  "Elements",
  "Financial Connections",
  "Identity",
  "Invoicing",
  "Issuing",
  "Link",
  "Payments",
  "Payment Links",
  "Payouts",
  "Radar",
  "Revenue Recognition",
  "Sigma",
  "Tax",
  "Terminal",
  "Treasury",
];

const solutionLinks = [
  "Solutions",
  "Startups",
  "Enterprises",
  "SaaS",
  "Platforms",
  "Ecommerce",
  "Marketplaces",
  "Crypto",
  "Creator economy",
  "Embedded finance",
  "Global businesses",
  "Finance automation",
  "Integrations & Custom Solutions",
  "Stripe App Marketplace",
  "Partner ecosystem",
  "Professional services",
];

const developerLinks = [
  "Developers",
  "Documentation",
  "API reference",
  "API status",
  "API changelog",
  "Stripe Apps",
];

const resourceLinks = [
  "Resources",
  "Guides",
  "Customer stories",
  "Blog",
  "Annual conference",
  "Privacy & terms",
  "Prohibited & restricted businesses",
  "Licenses",
  "Sitemap",
  "Cookie settings",
  "Your privacy choices",
  "Company",
  "Jobs",
  "Newsroom",
  "Stripe Press",
];

const supportLinks = [
  "Support",
  "Contact sales",
  "Support center",
  "Support plans",
  "CA residents: +1 888 926 2289",
];

export default function Footer() {
  return (
    <footer className="bg-white py-20">
      <Container className="max-w-(--page-width)">
        <div className="grid gap-12 grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start">
            <img className="h-6 w-auto" src={logoDark} alt="Stripe Logo" />
            <button
              type="button"
              className="mt-4 flex items-center gap-1.5 text-xs font-medium"
            >
              <Navigation size={12} fill="currentColor" />
              United States (English)
            </button>
            <span className="mt-auto pt-14 text-xs">© 2024 Stripe, Inc.</span>
          </div>

          {[
            [productLinks],
            [solutionLinks, developerLinks],
            [resourceLinks, supportLinks],
          ].map((groups, columnIndex) => (
            <div key={columnIndex} className="space-y-7">
              {groups.map((links) => (
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-brand text-xs">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
}
