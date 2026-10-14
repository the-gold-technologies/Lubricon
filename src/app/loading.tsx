import LoadingIndicator from "@/components/LoadingIndicator";

export default function Loading() {
  return (
    <div className="bg-white text-zinc-900 min-h-[75vh] flex items-center justify-center">
      <LoadingIndicator
        fullScreen
        message="Loading Lubricon Specialities India..."
        subMessage="Australian Technology Lubricants & Fluids"
        size="lg"
      />
    </div>
  );
}
