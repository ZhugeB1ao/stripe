const tones = {
  white: "bg-white text-ink",
  muted: "bg-surface text-ink",
  dark: "bg-ink text-white",
};

export default function Section({
  children,
  tone = "white",
  className = "",
  ...props
}) {
  return (
    <section
      className={`relative overflow-hidden py-20 lg:py-32 ${tones[tone]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
