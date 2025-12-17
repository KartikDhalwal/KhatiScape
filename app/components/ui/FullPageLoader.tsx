"use client";

export default function FullPageLoader({ text = "Sending..." }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
      <div className="px-8 py-6 rounded-lg flex flex-col items-center gap-4">
        <span className="h-10 w-10 border-4 border-amber-600 border-t-transparent rounded-full animate-spin" />
        {/* <p className="text-gray-700 font-medium">{text}</p> */}
      </div>
    </div>
  );
}
