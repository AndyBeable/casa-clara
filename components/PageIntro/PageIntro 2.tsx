type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <header className="mb-10 max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
        {eyebrow}
      </p>

      <h1 className="mt-3 font-display text-4xl leading-tight font-medium sm:text-5xl">
        {title}
      </h1>

      <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
        {description}
      </p>
    </header>
  );
}
