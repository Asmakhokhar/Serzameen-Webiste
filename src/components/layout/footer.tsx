export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-8 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 Serzameen Estates. Premium properties, made simple.</p>
        <div className="flex gap-4">
          <a href="#" className="transition hover:text-white">
            Privacy
          </a>
          <a href="#" className="transition hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
