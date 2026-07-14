export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto px-5 md:px-6  max-w-270 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
