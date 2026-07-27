const highlights = [
  "Transparent pricing and honest guidance",
  "Fast, personalized property tours",
  "Access to off-market opportunities",
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">Why choose us</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">A calm, confident experience from search to signing.</h2>
          </div>
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
