"use client";

interface StatBoxProps {
  label: string;
  value: string | number;
  highlight?: boolean;
}

export default function StatBox({ label, value, highlight = false }: StatBoxProps) {
  return (
    <div className="bg-[#0D0D0D] border border-white/40 rounded-lg p-3 flex flex-col gap-1 min-w-[100px]">
      {/* Label */}
      <p className="text-xs font-normal text-gray-400 leading-4">
        {label}
      </p>

      {/* Value */}
      <p
        className={`text-lg font-medium leading-7 ${
          highlight ? "text-emerald-400" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}