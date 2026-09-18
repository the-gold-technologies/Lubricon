export default function ProductsHero() {
  return (
    <section className="relative py-16 sm:py-20 bg-black text-white text-center border-b-4 border-[#ffe000] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-extrabold text-xs uppercase px-3.5 py-1 rounded-full mb-3 tracking-wider shadow-sm">
          <span>Product Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          All Lubricon Formulations
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Explore our comprehensive range of industrial and automotive lubricants —
          engineered for peak thermal resilience and operational uptime across every application.
        </p>
      </div>
    </section>
  );
}
