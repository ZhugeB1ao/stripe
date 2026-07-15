const variants = {
  primary: "bg-brand text-white hover:bg-[#514dcf]",
  dark: "bg-ink text-white hover:bg-[#173b5c]",
  light: "bg-white text-ink hover:bg-surface",
  cyan: "bg-cyan text-ink hover:bg-[#70e5ff]",
  outline: "border border-line bg-transparent text-ink hover:bg-surface",
};

const sizes = {
  sm: "min-h-9 px-4 text-sm",
  md: "min-h-10 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

export default function Button({
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full",
    "whitespace-nowrap font-semibold transition-colors duration-200",
    "focus-visible:outline focus-visible:outline-2",
    "focus-visible:outline-offset-2 focus-visible:outline-brand",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
