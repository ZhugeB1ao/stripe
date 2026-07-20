import Header from "./layout/Header.jsx";
import HeroSection from "./sections/Hero.jsx";
import ProductOverview from "./sections/ProductOverview.jsx";
import ProductSection from "./sections/ProductSection.jsx";
import Enterprise from "./sections/Enterprise.jsx";
import GlobalCommerce from "./sections/GlobalCommerce.jsx";
import Startups from "./sections/Startups.jsx";
import DeveloperApis from "./sections/DeveloperApis.jsx";
import LowCode from "./sections/LowCode.jsx";
import GetStarted from "./sections/GetStarted.jsx";
import Footer from "./layout/Footer.jsx";
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
  { id: "enterprise", name: "Enterprise", Component: Enterprise },
  { id: "startups", name: "Startups", Component: Startups },
  { id: "developer-apis", name: "DeveloperApis", Component: DeveloperApis },
  { id: "low-code", name: "LowCode", Component: LowCode },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {sections.map(({ id, name, Component, ...props }) => (
          <Component key={id} id={id} name={name} {...props} />
        ))}
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}
