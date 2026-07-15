export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto max-w-(--page-width) px-5 ${className}`}
    >
      {children}
    </div>
  );
}
