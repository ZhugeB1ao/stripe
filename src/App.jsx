import Container from "./components/ui/Container.jsx";
import Section from "./components/ui/Section.jsx";
import Header from "./layout/Header.jsx";
import HeroSection from "./sections/Hero.jsx";

const sections = [
  { id: "hero", name: "Hero", Component: HeroSection },
  { id: "product-overview", name: "ProductOverview" },
  { id: "payments", name: "Payments" },
  { id: "billing", name: "Billing" },
  { id: "connect", name: "Connect" },
  { id: "issuing", name: "Issuing" },
  { id: "global-commerce", name: "GlobalCommerce" },
  { id: "enterprise", name: "Enterprise" },
  { id: "startups", name: "Startups" },
  { id: "developer-apis", name: "DeveloperApis" },
  { id: "low-code", name: "LowCode" },
];

function PlaceholderSection({ id, name }) {
  return (
    <Section id={id} tone="muted">
      <Container>
        <h2>{name}</h2>
      </Container>
    </Section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main>
        {sections.map(({ id, name, Component = PlaceholderSection }) => (
          <Component key={id} id={id} name={name} />
        ))}
      </main>
    </div>
  );
}
