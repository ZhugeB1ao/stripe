export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-[--page-width] mx-auto px-5 md:px-6 ${className}`}>
      {children}
    </div>
  );
}
