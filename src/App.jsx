import Container from "./components/ui/Container.jsx";
import Section from "./components/ui/Section.jsx";
import Header from "./layout/Header.jsx";
import HeroSection from "./sections/Hero.jsx";
import ProductOverview from "./sections/ProductOverview.jsx";

const sections = [
  { id: "hero", name: "Hero", Component: HeroSection },
  { id: "product-overview", name: "ProductOverview", Component: ProductOverview },
  { id: "payments", name: "Payments", Component: PlaceholderSection },
  { id: "billing", name: "Billing", Component: PlaceholderSection },
  { id: "connect", name: "Connect", Component: PlaceholderSection },
  { id: "issuing", name: "Issuing", Component: PlaceholderSection },
  { id: "global-commerce", name: "GlobalCommerce", Component: PlaceholderSection },
  { id: "enterprise", name: "Enterprise", Component: PlaceholderSection },
  { id: "startups", name: "Startups", Component: PlaceholderSection },
  { id: "developer-apis", name: "DeveloperApis", Component: PlaceholderSection },
  { id: "low-code", name: "LowCode", Component: PlaceholderSection },
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
