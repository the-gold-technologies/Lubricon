import LubricantFinder from '@/components/LubricantFinder';

export default function HomeLubricantFinderSection() {
  return (
    <section className="py-16 px-4 bg-zinc-100 border-t border-zinc-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="bg-black text-[#ffe000] text-xs font-bold uppercase px-3 py-1 rounded-full">
            Automated Lubricant Advisor
          </span>
          <h2 className="text-3xl font-extrabold text-zinc-900 mt-2">
            Find the Right Lubricon Lubricant
          </h2>
          <p className="text-zinc-600 text-sm mt-1">
            Select your machinery or vehicle requirements for instant recommended grades.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-zinc-200">
          <LubricantFinder />
        </div>
      </div>
    </section>
  );
}
