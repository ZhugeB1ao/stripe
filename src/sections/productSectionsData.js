import paymentImage from "../assets/images/payments-phone.png";
import billingImage from "../assets/images/billing-price.png";
import connectImage from "../assets/images/connect-chart.png";
import issuingImage from "../assets/images/issuing-cards.png";
import paymentLogo from "../assets/logos/payment.png";
import billingLogo from "../assets/logos/billing.png";
import connectLogo from "../assets/logos/connect.png";
import issuingLogo from "../assets/logos/issusing.png";

export const productSections = [
  {
    id: "payments",
    name: "Payments",
    logo: paymentLogo,
    title: "Accept and optimize payments, globally",
    description:
      "Increase authorization rates, optimize your checkout conversion, and offer local payment methods in every market.",
    ctaLabel: "Start with Payments",
    image: paymentImage,
    imageAlt: "Stripe Payments mobile checkout",
    relatedProducts: [
      {
        name: "Tax",
        description: "for automating sales tax and VAT",
        href: "#payments",
      },
      {
        name: "Radar",
        description: "for fraud prevention and management",
        href: "#payments",
      },
      {
        name: "Terminal",
        description: "for custom in-person payments",
        href: "#payments",
      },
    ],
  },
  {
    id: "billing",
    name: "Billing",
    logo: billingLogo,
    title: "Capture recurring revenue",
    description:
      "Support recurring business models, minimize churn,and automate finance operations.",
    ctaLabel: "Start with Billing",
    image: billingImage,
    imageAlt: "Stripe Billing pricing overview",
    relatedProducts: [
      {
        name: "Invoicing",
        description: "for invoice creation, collection, and tracking",
        href: "#billing",
      },
      {
        name: "Revenue Recognition",
        description: "for streamlined accrual accounting",
        href: "#billing",
      },
      {
        name: "Sigma",
        description: "for custom revenue reports",
        href: "#billing",
      },
    ],
  },
  {
    id: "connect",
    name: "Connect",
    logo: connectLogo,
    title: "Set up multiparty payments and payouts",
    description:
      "Integrate payments into your platform or marketplace for end-to-end payments experiences.",
    ctaLabel: "Start with Connect",
    image: connectImage,
    imageAlt: "Stripe Connect multiparty payment flow",
    relatedProducts: [
      {
        name: "Terminal",
        description: "for custom in-person payments",
        href: "#connect",
      },
      {
        name: "Instant Payouts",
        description: "for fast payments to users",
        href: "#connect",
      },
      {
        name: "Payment Elements",
        description: "for customizable UIs",
        href: "#connect",
      },
    ],
  },
  {
    id: "issuing",
    name: "Issuing",
    logo: issuingLogo,
    title: "Build a fintech offering with banking-as-a-service",
    description:
      "Launch, manage, and scale a commercial card program without lengthy setup or complex infrastructure.",
    ctaLabel: "Start with Issuing",
    image: issuingImage,
    imageAlt: "Stripe Issuing virtual and physical cards",
    relatedProducts: [
      {
        name: "Treasury",
        description: "for financial accounts",
        href: "#issuing",
      },
      {
        name: "Capital",
        description: "for offering fast, flexible financing",
        href: "#issuing",
      },
      {
        name: "Connect",
        description: "for powering platform payments",
        href: "#issuing",
      }
    ],
  },
];
