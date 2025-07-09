type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-3xl text-amber-900 md:text-4xl font-serif font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-amber-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}