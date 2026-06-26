export function SectionHeader({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
        {title}
      </h2>
      <div className={`mt-6 h-1.5 w-24 bg-accent rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
