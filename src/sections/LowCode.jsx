import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import lowCodePlatforms from "../assets/images/lowcode-pic-1.png";
import lowCodeExperts from "../assets/images/lowcode-pic-2.png";
import lowCodeProducts from "../assets/images/lowcode-pic-3.png";

const lowCodeCards = [
  {
    image: lowCodePlatforms,
    title: "Use a pre-integrated platform",
    description: (
      <p className="mt-3 text-sm font-normal leading-relaxed">
        Explore our directory to find out-of-the-box solutions that connect with
        Stripe, such as <span className="text-brand">Squarespace</span> and{" "}
        <span className="text-brand">Lightspeed</span>.
      </p>
    ),
  },
  {
    image: lowCodeExperts,
    title: "Build with Stripe-certified experts",
    description: (
      <p className="mt-3 text-sm font-normal leading-relaxed">
        Work with a Stripe consulting partner that can integrate and deploy
        Stripe solutions for you.
      </p>
    ),
  },
  {
    image: lowCodeProducts,
    title: "Try our no-code products",
    description: (
      <p className="mt-3 text-sm font-normal leading-relaxed">
        Create an <span className="text-brand">invoice</span>, accept an{" "}
        <span className="text-brand">in-person payment</span> with your phone, or
        share a <span className="text-brand">payment link</span> directly from
        your Dashboard to start generating revenue in minutes—no code required.
      </p>
    ),
  },
];

export default function LowCode({ id }) {
  return (
    <Section id={id} tone="white" className="py-24! lg:py-32!">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-7 right-0 w-20 md:w-40 xl:w-80 4xl:w-140 origin-right -skew-y-6"
      >
        <div className="h-8 bg-sky-blue" />
        <div className="-mt-2 ml-[25%] w-[30%]">
          <div className="h-2 bg-[#0066e6]" />
          <div className="h-6 bg-brand" />
        </div>
      </div>

      <Container className="relative z-10 max-w-(--page-width)">
        <div className="max-w-150">
          <strong className="text-brand text-sm font-semibold">
            Launch with ease
          </strong>
          <h2 className="mt-7 text-3xl leading-[1.15] font-medium md:text-[2rem]">
            Low- and no-code options for getting started
          </h2>
          <p className="mt-6 text-sm leading-[1.65] font-normal">
            If you’d like to use Stripe for your business but don’t have
            developers on staff, no problem. We have a few options depending on
            your needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {lowCodeCards.map((card) => (
            <article
              key={card.title}
              className="shadow-media overflow-hidden bg-white"
            >
              <img src={card.image} alt="" className="w-full" />
              <div className="p-5">
                <h3 className="text-lg leading-tight font-medium">
                  {card.title}
                </h3>
                {card.description}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
