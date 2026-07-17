import Container from "./components/ui/Container.jsx";
import Section from "./components/ui/Section.jsx";
import Header from "./layout/Header.jsx";
import HeroSection from "./sections/Hero.jsx";
import ProductOverview from "./sections/ProductOverview.jsx";
import ProductSection from "./sections/ProductSection.jsx";
import GlobalCommerce from "./sections/GlobalCommerce.jsx";
import { productSections } from "./sections/productSectionsData.js";

const sections = [
  { id: "hero", name: "Hero", Component: HeroSection },
  {
    id: "product-overview",
    name: "ProductOverview",
    Component: ProductOverview,
  },
  ...productSections.map((section) => ({
    ...section,
    Component: ProductSection,
  })),
  {
    id: "global-commerce",
    name: "GlobalCommerce",
    Component: GlobalCommerce,
  },
  //   { id: "enterprise", name: "Enterprise", Component: PlaceholderSection },
  //   { id: "startups", name: "Startups", Component: PlaceholderSection },
  //   {
  //     id: "developer-apis",
  //     name: "DeveloperApis",
  //     Component: PlaceholderSection,
  //   },
  //   { id: "low-code", name: "LowCode", Component: PlaceholderSection },
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
        {sections.map(
          ({ id, name, Component = PlaceholderSection, ...props }) => (
            <Component key={id} id={id} name={name} {...props} />
          ),
        )}
      </main>
    </div>
  );
}
