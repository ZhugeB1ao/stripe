

export default function StartupCard({ card }) {
  return (
    <article className="shadow-media overflow-hidden rounded-sm bg-white">
      <img src={card.image} alt="" className="w-full" />
      <div className="p-5">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-semibold bg-gray-100">
          <img src={card.icon} alt="" aria-hidden="true" className="size-4" />
          {card.product}
        </div>
        <h3 className="mt-3 text-xl leading-tight font-medium">{card.title}</h3>
        <p className="mt-3 text-sm leading-relaxed">{card.description}</p>
      </div>
    </article>
  );
}