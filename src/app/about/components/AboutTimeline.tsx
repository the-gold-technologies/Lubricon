const milestones = [
  {
    year: "2014",
    title: "Company Foundation",
    description:
      "Lubricon Specialities India established with exclusive Australian formulation technology and licensing.",
  },
  {
    year: "2016",
    title: "First Industrial Supply",
    description:
      "Commenced commercial supply of heavy duty neat and soluble metalworking fluids to industrial manufacturers.",
  },
  {
    year: "2019",
    title: "Pan-India Distribution",
    description:
      "Expanded direct warehouse distribution network across 15+ states with dedicated technical field support.",
  },
  {
    year: "2022",
    title: "AdBlue DEF Compliance",
    description:
      "Introduced ISO 22241-standard AdBlue AUS32 for India Euro 6 emission standards and clean transport.",
  },
  {
    year: "2024",
    title: "500+ Clients Milestone",
    description:
      "Surpassed 500+ active enterprise clients across paper, steel, plastic injection, and fleet operations.",
  },
  {
    year: "2025",
    title: "Next-Gen CK-4 Range",
    description:
      "Rolled out latest API CK-4 and ACEA E9 low-SAPS high performance heavy diesel engine oils.",
  },
];

export default function AboutTimeline() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ffe000] text-black font-extrabold text-xs uppercase px-3.5 py-1 rounded-full mb-3 shadow-sm tracking-wider">
            <span>Our Journey</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">
            Over a Decade of Industrial Excellence
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-medium mt-2">
            The key milestones that built Lubricon into one of India’s most
            trusted specialty lubrication brands.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Track */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 -translate-x-1/2 w-0.5 bg-zinc-200" />

          <div className="space-y-10">
            {milestones.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Marker Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#ffe000] border-4 border-black z-10 shadow mt-1" />

                  {/* Spacer for 50% on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Box */}
                  <div
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven
                        ? "sm:pr-10 text-left sm:text-right"
                        : "sm:pl-10 text-left"
                    }`}
                  >
                    <div className="bg-zinc-50 border border-zinc-200 hover:border-[#ffe000] p-5 rounded-2xl transition-all shadow-sm">
                      <span className="inline-block bg-black text-[#ffe000] font-black text-xs px-3 py-0.5 rounded-full mb-2">
                        {m.year}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-black tracking-tight mb-1">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
