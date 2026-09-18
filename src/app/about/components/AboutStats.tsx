export default function AboutStats() {
  return (
    <section className="bg-[#f8f9fa] border-b border-zinc-200/80 py-10 sm:py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left Title & Subtitle */}
        <div className="lg:max-w-xs shrink-0">
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
            Our Stats
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-2 leading-relaxed">
            We help you to unleash the power within your machinery and industrial operations.
          </p>
        </div>

        {/* Right Metrics Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 flex-1">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
              40<span className="text-[#ffe000]">+</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-600 mt-1.5">
              Advanced Products
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
              800<span className="text-[#ffe000]">+</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-600 mt-1.5">
              Active Clients
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
              15<span className="text-[#ffe000]">+</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-600 mt-1.5">
              Years of Excellence
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
              100<span className="text-[#ffe000]">%</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-600 mt-1.5">
              Quality Assurance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
